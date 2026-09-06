import { describe, expect, it } from "vitest";
import { evaluateGate } from "../src/decisionGate";

describe("evaluateGate", () => {
  it("allows verified evidence", () => {
    expect(evaluateGate(["VERIFIED", "VERIFIED"]).status).toBe("ALLOW");
  });
  it("returns unknown when evidence is missing", () => {
    expect(evaluateGate(["VERIFIED", "MISSING"]).status).toBe("UNKNOWN");
  });
  it("blocks conflicting evidence", () => {
    expect(evaluateGate(["VERIFIED", "CONFLICTING"]).status).toBe("BLOCK");
  });
});
