export type EvidenceState = "VERIFIED" | "MISSING" | "CONFLICTING";

export type GateDecision =
  | { status: "ALLOW"; reason: "ALL_REQUIRED_EVIDENCE_VERIFIED" }
  | { status: "BLOCK"; reason: "CONFLICTING_EVIDENCE" }
  | { status: "UNKNOWN"; reason: "REQUIRED_EVIDENCE_MISSING" };

export function evaluateGate(states: EvidenceState[]): GateDecision {
  if (states.some((state) => state === "CONFLICTING")) {
    return { status: "BLOCK", reason: "CONFLICTING_EVIDENCE" };
  }
  if (states.some((state) => state === "MISSING")) {
    return { status: "UNKNOWN", reason: "REQUIRED_EVIDENCE_MISSING" };
  }
  return { status: "ALLOW", reason: "ALL_REQUIRED_EVIDENCE_VERIFIED" };
}
