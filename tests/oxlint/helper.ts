import { execa } from 'execa';
import path from 'node:path';
import * as v from 'valibot';

const ROOT = path.resolve(import.meta.filename, '../../..');
const CONFIG = path.join(ROOT, 'configs/oxlintrc.jsonc');

const diagnosticSchema = v.object({
  message: v.string(),
  code: v.string(),
  severity: v.picklist(['error', 'warning']),
  filename: v.string()
});

const oxlintOutputSchema = v.pipe(
  v.string(),
  v.parseJson(),

  v.object({
    diagnostics: v.array(diagnosticSchema)
  })
);

type Diagnostic = v.InferOutput<typeof diagnosticSchema>;

async function runOxlint(filePaths: string[]): Promise<Diagnostic[]> {
  const absoluteFilePaths = filePaths.map(filePath => path.resolve(ROOT, filePath));

  const result = await execa(
    'oxlint',
    [
      '--config',
      CONFIG,
      '--no-ignore',
      '--format',
      'json',
      ...absoluteFilePaths
    ],
    {
      reject: false,
      cwd: ROOT,
      preferLocal: true
    }
  );

  if (!result.stdout) {
    throw new Error(`oxlint failed to start: ${result.stderr}`);
  }

  const output = v.parse(oxlintOutputSchema, result.stdout);

  return output.diagnostics;
}

function violationsOf(diagnostics: Diagnostic[], ruleId: string): Diagnostic[] {
  const parts = ruleId.split('/');
  const codePatterns = [`eslint(${ruleId})`];

  if (parts.length > 1) {
    codePatterns.splice(0, 1, `${parts[0]}(${parts[1]})`, `eslint-plugin-${parts[0]}(${parts[1]})`);
  }

  if (ruleId.startsWith('typescript/')) {
    codePatterns.push(`typescript-eslint(${parts[1]})`);
  }

  return diagnostics.filter(diag => codePatterns.includes(diag.code));
}

export {
  type Diagnostic,
  runOxlint,
  violationsOf
};
