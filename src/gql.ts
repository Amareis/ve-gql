import { query } from "./gqless";

export const chars = () => query.characters().results.map((c) => c.name);
