module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['promise'],
    rules: {
        'no-restricted-imports': ['error', 'underscore'],
        eqeqeq: 'error',
        'no-console': 'off',
        'consistent-return': 'error',
        "promise/catch-or-return": "error",
        'no-unused-vars': 'off',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    }
};
