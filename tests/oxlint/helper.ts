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

interface RunOxlintOptions {
  typeAware?: boolean;
}

async function runOxlint(filePaths: string[], options: RunOxlintOptions = {}): Promise<Diagnostic[]> {
  const typeAwareArgs = options.typeAware === true ? ['--type-aware'] : [];

  const result = await execa(
    'oxlint',
    [
      '--config',
      CONFIG,
      '--no-ignore',
      '--format',
      'json',
      ...typeAwareArgs,
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

  if (parts.length === 1) {
    return diagnostics.filter(diag => diag.code === `eslint(${ruleId})`);
  }

  const [plugin, rule] = parts;
  const eslintPluginCode = `eslint-plugin-${plugin}(${rule})`;
  // Tsgolint reports typescript type-aware rules as typescript-eslint(rule-name)
  const tsgolintCode = plugin === 'typescript' ? `typescript-eslint(${rule})` : undefined;

  return diagnostics.filter(diag => diag.code === eslintPluginCode || diag.code === tsgolintCode);
}

export {
  type Diagnostic,
  type RunOxlintOptions,
  runOxlint,
  violationsOf
};
