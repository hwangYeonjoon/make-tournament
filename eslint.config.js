import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // React 버전 자동 감지 설정 추가
  {
    settings: {
      react: {
        version: 'detect', // React 버전을 자동으로 감지합니다.
      },
    },
  },

  // Prettier 통합 및 규칙 설정
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필요 없음
    },
  },
];
