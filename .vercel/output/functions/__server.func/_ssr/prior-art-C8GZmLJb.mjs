import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prior-art-C8GZmLJb.js
var $$splitComponentImporter = () => import("./prior-art-DK1eugS6.mjs");
var Route = createFileRoute("/prior-art")({
	validateSearch: (search) => {
		const q = search["query"];
		return typeof q === "string" ? { query: q } : {};
	},
	head: () => ({ meta: [
		{ title: "Evidence Explorer — Prior Art | IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Trace a formulation through detected ingredients, TKDL records, patent cases and international records in one interactive evidence graph."
		},
		{
			property: "og:title",
			content: "Evidence Explorer — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Interactive prior-art evidence graph with official sources on every node."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
