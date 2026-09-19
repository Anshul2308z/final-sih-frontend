import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { s as cn } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Input } from "./input-CjM-Mr1V.mjs";
import { t as Label } from "./label-Brl11RKw.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { H as Check, a as SlidersHorizontal, u as Search, v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-WMgYNxRU.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, f as RiskChip, g as WorkspaceIdentity, l as JurisdictionPill, m as SourceBadge, o as EmptyState, s as EvidenceChip, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { t as getPatentRecords } from "./patentService-BKuM62-G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patents-C0jCk4dG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var sources = [
	"TKDL",
	"IP India",
	"WIPO",
	"EPO",
	"USPTO",
	"Other"
];
var searchTypes = [
	"Semantic",
	"Hybrid",
	"Exact"
];
function ResultCard({ record }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-panel animate-rise rounded-xl p-5 transition-colors hover:border-saffron/35",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-saffron",
						children: record.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: record.jurisdiction }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: record.status }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: record.ipType }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, { level: record.risk })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-lg leading-snug text-foreground",
				children: record.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					record.applicant,
					" · published ",
					record.published
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Why relevant") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
					children: record.whyRelevant
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:w-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Conceptual similarity") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-2xl text-foreground",
							children: [record.similarity, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 h-1 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-saffron",
								style: { width: `${record.similarity}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[0.65rem] leading-tight text-muted-foreground",
							children: t("Retrieval score — not a legal probability.")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					className: "mr-1",
					children: t("Concepts")
				}), record.concepts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: c }, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						className: "mr-1",
						children: t("Sources")
					}),
					record.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: s }, s)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: record.evidenceLevel })
				]
			})
		]
	});
}
function PatentIntelligence() {
	const { t } = useTranslation();
	const [query, setQuery] = (0, import_react.useState)("herbal formulation using turmeric and neem for skin inflammation");
	const [scope, setScope] = (0, import_react.useState)("Both");
	const [type, setType] = (0, import_react.useState)("Semantic");
	const [activeSources, setActiveSources] = (0, import_react.useState)(sources);
	const [plant, setPlant] = (0, import_react.useState)("All");
	const [status, setStatus] = (0, import_react.useState)("All");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [ran, setRan] = (0, import_react.useState)(true);
	const results = (0, import_react.useMemo)(() => {
		return getPatentRecords().filter((r) => scope === "Both" ? true : r.jurisdictionGroup === scope).filter((r) => plant === "All" ? true : r.plants.includes(plant)).filter((r) => status === "All" ? true : r.status === status).sort((a, b) => b.similarity - a.similarity);
	}, [
		scope,
		plant,
		status
	]);
	const search = () => {
		setLoading(true);
		setRan(true);
		window.setTimeout(() => setLoading(false), 700);
	};
	const allPlants = Array.from(new Set(getPatentRecords().flatMap((r) => r.plants))).sort();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-patents",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "02",
				code: "IP-02",
				label: t("PATENT DISCOVERY"),
				title: t("Search the prior landscape"),
				signal: "Search the prior landscape · SEARCH / MATCH",
				metric: "SEARCH / MATCH"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Concept retrieval"),
				title: t("Patent Intelligence"),
				subtitle: t("Find patents and prior art by concept, not just keywords."),
				i18nPrefix: "pg.patents"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-8 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Describe your invention or formulation in your own words") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-3 lg:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: t("Describe your invention or formulation in your own words..."),
							className: "h-12 border-border bg-background/60 text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "saffron",
							className: "h-12 px-6",
							onClick: search,
							disabled: loading,
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "size-4 animate-spin",
								"aria-hidden": true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-4",
								"aria-hidden": true
							}), t("Search")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Try:") }), ["device that detects crop disease early", "herbal formulation using turmeric and neem for skin inflammation"].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setQuery(q),
							className: "rounded-md border border-border bg-accent/40 px-2 py-1 transition-colors hover:border-saffron/40 hover:text-foreground",
							children: q
						}, q))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Jurisdiction") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: scope,
								onValueChange: setScope,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "India",
										children: t("India")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "International",
										children: t("International")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "Both",
										children: t("Both")
									})
								] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Search type") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 inline-flex rounded-md border border-border bg-background/50 p-1",
								children: searchTypes.map((st) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setType(st),
										className: st === type ? "rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground" : "rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
										children: t(st)
									}, st);
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Plant") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: plant,
								onValueChange: setPlant,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "All",
									children: t("All plants")
								}), allPlants.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: p,
									children: p
								}, p))] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Status") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: status,
								onValueChange: setStatus,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
									"All",
									"Granted",
									"Published",
									"Examination",
									"Withdrawn"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: s,
									children: s
								}, s)) })]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {
								className: "size-3.5",
								"aria-hidden": true
							}), t("Sources")]
						}), sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							className: "flex items-center gap-2 text-xs font-normal text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: activeSources.includes(s),
								onCheckedChange: (v) => setActiveSources((prev) => v ? [...prev, s] : prev.filter((x) => x !== s))
							}), s]
						}, s))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[1fr_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-foreground",
							children: loading ? t("Retrieving records…") : `${results.length} intelligence cards`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								type,
								t("retrieval ·"),
								scope,
								" · sorted by conceptual similarity"
							]
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-56 w-full rounded-xl" }, i))
					}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: t("No records match these filters"),
						body: t("Widen the jurisdiction, clear the plant filter, or try a hybrid search to recover borderline matches."),
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							size: "sm",
							onClick: () => {
								setScope("Both");
								setPlant("All");
								setStatus("All");
							},
							children: t("Reset filters")
						})
					}) : ran ? results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, { record: r }, r.id)) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Reading similarity") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: [
									t("A score such as"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-foreground",
										children: "91%"
									}),
									t("describes how\n              closely a record matches your described concept in retrieval space. It is not a measure\n              of infringement, validity or grant probability.")
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Filters applied") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-1.5 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [t("Jurisdiction ·"), scope] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [t("Plant ·"), plant] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [t("Status ·"), status] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										t("Sources ·"),
										activeSources.length,
										t("of"),
										sources.length
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("Evidence level · official records preferred") })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Results are preliminary signals from a reference dataset. Verify every record against the official register before relying on it.") })
					]
				})]
			})
		]
	});
}
//#endregion
export { PatentIntelligence as component };
