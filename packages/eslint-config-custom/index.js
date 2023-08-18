module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "turbo",
    "eslint-config-prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:compat/recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "newline-before-return": "error",
    "react/prop-types": "off",
    "import/first": "warn",
  },
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports" },
        ],
      },
    },
  ],
};

