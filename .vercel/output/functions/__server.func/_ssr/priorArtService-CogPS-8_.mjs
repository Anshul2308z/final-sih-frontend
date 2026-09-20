//#region node_modules/.nitro/vite/services/ssr/assets/priorArtService-CogPS-8_.js
var API_BASE_URL = "http://localhost:8000";
var graphCache = /* @__PURE__ */ new Map();
function setPriorArtCache(query, data) {
	const normalizedKey = query.trim().toLowerCase();
	graphCache.set(normalizedKey, data);
	if (typeof window !== "undefined") try {
		sessionStorage.setItem(`pa_graph_${normalizedKey}`, JSON.stringify(data));
	} catch (e) {}
}
async function fetchPriorArtGraph(query) {
	const normalizedKey = query?.trim().toLowerCase();
	if (normalizedKey && graphCache.has(normalizedKey)) return graphCache.get(normalizedKey);
	if (normalizedKey && typeof window !== "undefined") try {
		const cached = sessionStorage.getItem(`pa_graph_${normalizedKey}`);
		if (cached) {
			const data = JSON.parse(cached);
			graphCache.set(normalizedKey, data);
			return data;
		}
	} catch (e) {}
	const res = await fetch(`${API_BASE_URL}/api/v1/prior-art/graph`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(query ? { query } : {})
	});
	if (!res.ok) throw new Error(`Graph API returned ${res.status}`);
	const data = await res.json();
	if (normalizedKey) graphCache.set(normalizedKey, data);
	return data;
}
//#endregion
export { setPriorArtCache as n, fetchPriorArtGraph as t };
