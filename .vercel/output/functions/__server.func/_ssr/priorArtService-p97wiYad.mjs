//#region node_modules/.nitro/vite/services/ssr/assets/priorArtService-p97wiYad.js
var API_BASE_URL = "https://sihbackend-zd2a.onrender.com";
var graphCache = /* @__PURE__ */ new Map();
function setPriorArtCache(query, data) {
	const normalizedKey = query.trim().toLowerCase();
	graphCache.set(normalizedKey, data);
}
async function fetchPriorArtGraph(query) {
	const normalizedKey = query?.trim().toLowerCase();
	if (normalizedKey && graphCache.has(normalizedKey)) return graphCache.get(normalizedKey);
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
