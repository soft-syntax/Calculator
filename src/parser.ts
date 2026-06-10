import { calculate } from "./calculator";
import { Operator } from "./types";

export function parseExpression(expression: string): number {
  const match = expression.match(/(\d+)\s*([\+\-\*\/%])\s*(\d+)/);

  if (!match) {
    throw new Error("Invalid expression format");
  }

  const a = Number(match[1]);
  const op = match[2] as Operator;
  const b = Number(match[3]);

  return calculate(a, b, op);
}
