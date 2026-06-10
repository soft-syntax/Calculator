export type Operator = "+" | "-" | "*" | "/" | "%";

export interface CalculationResult {
  input: string;
  result: number;
  error?: string;
}
