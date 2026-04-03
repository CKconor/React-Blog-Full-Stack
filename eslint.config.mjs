import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
