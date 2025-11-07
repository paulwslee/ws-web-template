import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier, // prettier 충돌 방지용

  // 전역 ignore 설정
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  // 추가 규칙
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      unicorn,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
      'unicorn/filename-case': [
        'warn',
        {
          cases: { camelCase: true, pascalCase: true, kebabCase: true },
        },
      ],
      'import/no-unresolved': 'off',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
]);
