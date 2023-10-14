module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis', 'eslint-config-prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
