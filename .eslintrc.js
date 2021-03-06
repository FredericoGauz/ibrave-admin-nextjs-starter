module.exports = {
    plugins: ['prettier'],
    extends: ['react-app', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'warn',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
    },
};
