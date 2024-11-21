module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourseType: "module",
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugings: ["eslint-plugin-react", "eslint-plugin-react-hooks"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
    },
};