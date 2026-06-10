import { parseExpression } from "./parser";

try {
  const result = parseExpression("10 + 5");
  console.log("Result:", result);
} catch (err) {
  console.error((err as Error).message);
}
