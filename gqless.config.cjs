/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "https://rickandmortyapi.com/graphql",
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
