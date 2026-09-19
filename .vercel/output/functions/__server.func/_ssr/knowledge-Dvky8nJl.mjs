import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, g as WorkspaceIdentity, m as SourceBadge, s as EvidenceChip, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { t as listPlants } from "./plantService-CP6f0xNu.mjs";
import { t as getPatentRecords } from "./patentService-BKuM62-G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/knowledge-Dvky8nJl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GraphView({ plant }) {
	const { t } = useTranslation();
	const related = plant.relatedIds.map((id) => listPlants().find((p) => p.id === id)).filter((p) => Boolean(p));
	const cases = getPatentRecords().filter((r) => r.plants.includes(plant.common));
	const rings = [
		{
			label: plant.genus,
			tone: "oklch(0.66 0.09 155)"
		},
		{
			label: plant.family,
			tone: "oklch(0.7 0.12 235)"
		},
		{
			label: `${plant.tkdlRecords} TKDL records`,
			tone: "oklch(0.7 0.13 155)"
		},
		{
			label: `${cases.length} examination cases`,
			tone: "oklch(0.79 0.145 72)"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 620 340",
		className: "w-full",
		role: "img",
		"aria-label": `Knowledge graph for ${plant.common}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "150",
				cy: "170",
				r: "46",
				fill: "oklch(0.975 0.02 90)",
				stroke: "oklch(0.68 0.14 72)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "150",
				y: "167",
				textAnchor: "middle",
				style: {
					fontSize: 12,
					fill: "oklch(0.25 0.035 155)"
				},
				children: plant.common
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "150",
				y: "183",
				textAnchor: "middle",
				style: {
					fontSize: 8.5,
					fill: "oklch(0.49 0.025 150)"
				},
				children: plant.botanical
			}),
			rings.map((r, i) => {
				const y = 50 + i * 80;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M 196 170 C 280 170, 300 ${y + 20}, 400 ${y + 20}`,
						fill: "none",
						stroke: r.tone,
						strokeWidth: "1.2",
						opacity: "0.7",
						className: "animate-trace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "400",
						y,
						width: "180",
						height: "40",
						rx: "8",
						fill: "oklch(0.985 0.008 90)",
						stroke: r.tone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "490",
						y: y + 24,
						textAnchor: "middle",
						style: {
							fontSize: 10,
							fill: "oklch(0.25 0.035 155)"
						},
						children: r.label
					})
				] }, r.label);
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
				x: "150",
				y: "266",
				textAnchor: "middle",
				style: {
					fontSize: 9,
					fill: "oklch(0.49 0.025 150)"
				},
				children: [related.length, t("related candidates")]
			}) : null
		]
	});
}
function Knowledge() {
	const { t } = useTranslation();
	const [activeId, setActiveId] = (0, import_react.useState)("ashwagandha");
	const active = listPlants().find((p) => p.id === activeId) ?? listPlants()[0];
	if (!active) return null;
	const candidates = listPlants().filter((p) => p.id !== active.id).sort((a, b) => b.similarity - a.similarity).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-knowledge",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "05",
				code: "TK-05",
				label: t("KNOWLEDGE GRAPH"),
				title: t("Map botanical knowledge into defensible evidence"),
				signal: "Map botanical knowledge into defensible evidence · MAP / CONNECT",
				metric: "MAP / CONNECT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Botanical intelligence"),
				title: t("Traditional Knowledge Family Explorer"),
				subtitle: t("Botanical family, genus, documented traditional use and related research candidates — with the official record behind each claim."),
				i18nPrefix: "pg.knowledge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-1.5",
				children: listPlants().map((p) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveId(p.id),
						className: p.id === activeId ? "rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground" : "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground",
						children: t(p.common)
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 xl:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-foreground",
								children: active.common
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-sm text-muted-foreground",
								children: active.botanical
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EvidenceChip, { children: [t("Genus ·"), active.genus] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EvidenceChip, { children: [t("Family ·"), active.family] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EvidenceChip, { children: [t("Evidence level ·"), active.evidenceLevel] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EvidenceChip, { children: [active.tkdlRecords, t("TKDL records")] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-[560px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphView, { plant: active })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-eyebrow",
									children: t("Traditional use")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-muted-foreground",
									children: active.traditionalUse
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-eyebrow",
									children: t("Plant part")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground",
									children: active.parts.join(", ")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-eyebrow",
									children: t("Formulation role")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground",
									children: active.role
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-eyebrow",
									children: t("Official source")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-2 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "tkdl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ayush" })]
								})] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Potential alternative candidates for further research") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: candidates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-lg border border-border bg-background/40 p-4 transition-colors hover:border-saffron/35",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-baseline gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setActiveId(c.id),
													className: "font-display text-base text-foreground hover:text-saffron",
													children: c.common
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "italic text-xs text-muted-foreground",
													children: c.botanical
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "ml-auto font-mono text-sm text-saffron",
													children: [c.similarity, "%"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs leading-relaxed text-muted-foreground",
											children: c.whyRanked
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EvidenceChip, { children: [t("Evidence ·"), c.evidenceLevel] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: c.family }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "tkdl" })
											]
										})
									]
								}, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "mt-4",
								children: t("Load more candidates")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Same family or genus does not establish medicinal equivalence or freedom from patent infringement. Candidates are research leads only, never substitutes.") })]
				})]
			})
		]
	});
}
//#endregion
export { Knowledge as component };
