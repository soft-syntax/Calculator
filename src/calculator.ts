import { Operator } from "./types";

export function calculate(a: number, b: number, op: Operator): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    case "%":
      return a % b;
    default:
      throw new Error("Invalid operator");
  }
}
