import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        files: [
            '**/*.js',
            '**/*.jsx',
            '**/*.ts',
            '**/*.tsx',
            '**/*.json'
        ],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            indent: ['error', 4],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-unused-vars': ['warn'],
            'no-unused-vars': ['error'],
            'curly': 'error',
            'keyword-spacing': ['error', { before: true, after: true }],
            'arrow-parens': ['error', 'always'],
        },
    },
    {   
        ignores: [
            ".node_modules/",
            ".build/",
            ".dist/"
        ]
    }
];