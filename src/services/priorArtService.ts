/** Evidence/prior-art adapter. */
import { evidenceEdges, evidenceNodes, type EvidenceNode as MockEvidenceNode } from "@/data/referenceData";
import { PriorArtGraphResponse, PriorArtGraphRequest, EvidenceNode } from "@/types/api";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const graphCache = new Map<string, PriorArtGraphResponse>();

export function setPriorArtCache(query: string, data: PriorArtGraphResponse) {
  const normalizedKey = query.trim().toLowerCase();
  graphCache.set(normalizedKey, data);
}

export function getEvidenceGraph(): { nodes: MockEvidenceNode[]; edges: Array<[string, string]> } {
  return { nodes: evidenceNodes, edges: evidenceEdges };
}

export async function fetchPriorArtGraph(query?: string): Promise<PriorArtGraphResponse> {
  const normalizedKey = query?.trim().toLowerCase();
  
  if (normalizedKey && graphCache.has(normalizedKey)) {
    return graphCache.get(normalizedKey)!;
  }

  const reqBody: PriorArtGraphRequest = query ? { query } : {};
  const res = await fetch(`${API_BASE_URL}/api/v1/prior-art/graph`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  });
  if (!res.ok) {
    throw new Error(`Graph API returned ${res.status}`);
  }
  
  const data = await res.json();
  if (normalizedKey) {
    graphCache.set(normalizedKey, data);
  }
  return data;
}

