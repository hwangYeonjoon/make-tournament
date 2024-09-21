import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'], // 린트할 파일 패턴
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // React 버전 자동 감지 설정 추가
  {
    settings: {
      react: {
        version: 'detect', // React 버전 자동 감지
      },
    },
  },

  // Prettier 통합 및 규칙 설정
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConfig.rules, // Prettier 규칙 적용
      'prettier/prettier': 'error', // Prettier 오류는 ESLint에서 오류로 처리
      'react/react-in-jsx-scope': 'off', // React 17 이상에서는 불필요
    },
  },
];
