import { execa } from 'execa';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as v from 'valibot';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');
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
  const result = await execa(
    'oxlint',
    [
      '--config',
      CONFIG,
      '--no-ignore',
      '--format',
      'json',
      ...filePaths
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
  const codePattern = parts.length === 1 ? `eslint(${ruleId})` : `eslint-plugin-${parts[0]}(${parts[1]})`;

  return diagnostics.filter(diag => diag.code === codePattern);
}

export {
  type Diagnostic,
  runOxlint,
  violationsOf
};
