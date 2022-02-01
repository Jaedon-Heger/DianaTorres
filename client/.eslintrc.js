module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    '@vue/airbnb',
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "semi": "off",
    "linebreak-style": 0,
    "class-methods-use-this": "off",
    "no-unexpected-multiline": "error",
    'max-len': 0
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
