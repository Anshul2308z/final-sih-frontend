import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { A as ExternalLink, v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, g as WorkspaceIdentity, l as JurisdictionPill, o as EmptyState, s as EvidenceChip, u as PageHeader, v as getSourceById } from "./primitives-BxUwtfld.mjs";
import { t as fetchPriorArtGraph } from "./priorArtService-p97wiYad.mjs";
import { t as Route } from "./prior-art-C8GZmLJb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prior-art-DK1eugS6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var layers = [
	{
		key: "formulation",
		label: "Your formulation",
		tone: "border-saffron/50 bg-saffron/10 text-saffron"
	},
	{
		key: "ingredient",
		label: "Detected ingredients",
		tone: "border-botanical/50 bg-botanical/10 text-botanical"
	},
	{
		key: "tkdl",
		label: "TKDL records",
		tone: "border-verified/50 bg-verified/10 text-verified"
	},
	{
		key: "patent",
		label: "Patent cases",
		tone: "border-review/50 bg-review/10 text-review"
	},
	{
		key: "international",
		label: "International records",
		tone: "border-info/50 bg-info/10 text-info"
	}
];
var columnX = 90;
var colGap = 150;
function positions(nodesData) {
	const map = /* @__PURE__ */ new Map();
	layers.forEach((layer, li) => {
		const nodes = nodesData.filter((n) => n.layer === layer.key);
		nodes.forEach((n, ni) => {
			map.set(n.id, {
				x: columnX + li * colGap,
				y: 60 + ni * 78 + (nodes.length === 1 ? 78 : 0)
			});
		});
	});
	return map;
}
function PriorArt() {
	const { t } = useTranslation();
	const search = Route.useSearch();
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		fetchPriorArtGraph(search.query).then((res) => {
			setData(res);
			setLoading(false);
		}).catch((err) => {
			console.error(err);
			setError("Failed to fetch graph data");
			setLoading(false);
		});
	}, [search.query]);
	const pos = data ? positions(data.nodes) : /* @__PURE__ */ new Map();
	const [selected, setSelected] = (0, import_react.useState)((data?.nodes || [])[3] ?? null);
	const source = selected?.source ? getSourceById(selected.source) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-prior-art",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "03",
				code: "EV-03",
				label: t("PRIOR-ART TRACE"),
				title: t("Connect claims to evidence"),
				signal: "Connect claims to evidence · TRACE / PROVE",
				metric: "TRACE / PROVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Evidence explorer"),
				title: t("Prior-art trace"),
				subtitle: t("Formulation → detected ingredients → TKDL records → patent cases → international records. Select any node to inspect the underlying record."),
				i18nPrefix: "pg.priorArt"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-2 flex h-64 items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-saffron" })
				}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-2 flex h-64 items-center justify-center text-red-500",
					children: error
				}) : !data || data.nodes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: t("No prior art found"),
						body: t("No prior art graph can be constructed for this query."),
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "overflow-hidden p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: layers.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full border px-2.5 py-1 text-[0.65rem] font-medium ${l.tone}`,
								children: l.label
							}, l.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 780 400",
								className: "min-w-[720px]",
								role: "img",
								"aria-label": t("Prior art evidence graph"),
								children: [(data?.edges || []).map(([from, to]) => {
									const a = pos.get(from);
									const b = pos.get(to);
									if (!a || !b) return null;
									const active = selected && (selected.id === from || selected.id === to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: `M ${a.x + 52} ${a.y} C ${a.x + 110} ${a.y}, ${b.x - 110} ${b.y}, ${b.x - 52} ${b.y}`,
										fill: "none",
										stroke: active ? "oklch(0.68 0.14 72)" : "oklch(0.78 0.025 150)",
										strokeWidth: active ? 1.8 : 1,
										opacity: active ? 1 : .6
									}, `${from}-${to}`);
								}), (data?.nodes || []).map((n) => {
									const p = pos.get(n.id);
									if (!p) return null;
									const active = selected?.id === n.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
										transform: `translate(${p.x - 52} ${p.y - 22})`,
										onClick: () => setSelected(n),
										className: "cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											width: "104",
											height: "44",
											rx: "8",
											fill: active ? "oklch(0.975 0.025 90)" : "oklch(1 0 0)",
											stroke: active ? "oklch(0.68 0.14 72)" : "oklch(0.78 0.025 150)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "52",
											y: "26",
											textAnchor: "middle",
											style: {
												fontSize: 9.5,
												fill: "oklch(0.25 0.035 155)"
											},
											children: n.label.length > 20 ? `${n.label.slice(0, 19)}…` : n.label
										})]
									}, n.id);
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: t("Graph edges show documented relationships in the reference dataset. They do not assert any legal conclusion.")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "animate-rise p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
										className: "mr-auto",
										children: t("Evidence node")
									}), selected.jurisdiction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: selected.jurisdiction }) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-xl text-foreground",
									children: selected.label
								}),
								selected.passage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "mt-4 border-l-2 border-saffron/60 pl-4 text-sm leading-relaxed text-muted-foreground",
									children: selected.passage
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("Source"),
											value: source?.name ?? "User submission"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("Case / record number"),
											value: selected.caseNumber ?? "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("Outcome"),
											value: selected.outcome ?? "Not applicable"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("Source date"),
											value: selected.sourceDate ?? "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("Verification"),
											value: selected.verification
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: t("Authority"),
											value: source?.authority ?? "—"
										})
									]
								}),
								source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "evidence",
									size: "sm",
									className: "mt-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: source.url,
										target: "_blank",
										rel: "noreferrer",
										children: [t("Open official source"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
											className: "size-3.5",
											"aria-hidden": true
										})]
									})
								}) : null
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Trace summary") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-3 space-y-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· 2 ingredients detected from the described formulation.") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· 2 documented traditional knowledge records located.") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· 1 granted Indian claim in the same concept space.") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· 2 international records requiring review.") })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("Preliminary assessment") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("Further verification required") })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Documented prior art does not automatically invalidate any patent. Invalidity and infringement questions require formal legal analysis by a qualified professional.") })
					]
				})] })
			})
		]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-eyebrow",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-sm text-foreground",
		children: value
	})] });
}
//#endregion
export { PriorArt as component };
