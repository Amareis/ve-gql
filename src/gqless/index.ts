/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createClient, QueryFetcher } from "gqless";
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames
} from "./schema.generated";

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "https://rickandmortyapi.com/graphql" if needed
  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: "cors"
  });

  const json = await response.json();

  return json;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher
});

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch
} = client;

export * from "./schema.generated";
