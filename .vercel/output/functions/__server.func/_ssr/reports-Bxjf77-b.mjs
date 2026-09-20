import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { s as cn } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { C as Eye, T as Download, a as Share2 } from "../_libs/lucide-react.mjs";
import { _ as WorkspaceIdentity, b as historyItems, c as EvidenceChip, d as PageHeader, f as Panel, h as SourceBadge, l as Eyebrow, o as Disclaimer, p as RiskChip, r as ConfidenceMeter, u as JurisdictionPill } from "./primitives-DkBwZnB6.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BPuA8wVa.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-Bxjf77-b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
/** Analysis history adapter. Replace with persisted storage when account history is connected. */
function listHistory() {
	return historyItems;
}
var sections = [
	{
		title: "Executive Summary",
		body: "Preliminary assessment of protectability and regulatory route for a standardised Ashwagandha stress-support preparation."
	},
	{
		title: "Product Classification",
		body: "Patent / proprietary Ayurvedic medicine (preliminary, 81% confidence)."
	},
	{
		title: "Jurisdiction",
		body: "India, with international review for EPO and USPTO designations."
	},
	{
		title: "IP Types",
		body: "Process patent, composition patent, trade mark, trade secret."
	},
	{
		title: "Prior-Art Findings",
		body: "Documented classical preparations and one granted Indian claim in the same concept space."
	},
	{
		title: "TKDL Evidence",
		body: "TKDL/AY/1284 and TKDL/AY/2210 — documented classical preparations."
	},
	{
		title: "WIPO Evidence",
		body: "WO 2023/154872 — combination claim covering Withania with Bacopa."
	},
	{
		title: "ABS Findings",
		body: "Wild-collected material with associated traditional knowledge — documentation likely required."
	},
	{
		title: "International Findings",
		body: "Absolute novelty standard at the EPO increases the weight of documented disclosures."
	},
	{
		title: "Cost Estimate",
		body: "Official government fees and professional estimates reported separately."
	},
	{
		title: "Risk Indicators",
		body: "Potential prior-art signal; ABS documentation gap; claim-scope uncertainty."
	},
	{
		title: "Recommended Next Steps",
		body: "Full prior-art trace, ABS documentation review, human IP review before filing."
	},
	{
		title: "Confidence",
		body: "88% overall, based on retrieval strength and source agreement."
	},
	{
		title: "Limitations",
		body: "Reference data; similarity is a retrieval score; no legal conclusion is offered."
	},
	{
		title: "Sources",
		body: "TKDL, IP India, WIPO, Patents Act 1970, National Biodiversity Authority."
	}
];
function Reports() {
	const { t } = useTranslation();
	const [preview, setPreview] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-reports",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "10",
				code: "RP-10",
				label: t("INTELLIGENCE DOSSIER"),
				title: t("Package findings into a decision-ready report"),
				signal: "Package findings into a decision-ready report · REPORT / EXPORT",
				metric: "REPORT / EXPORT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Workspace"),
				title: t("Reports & history"),
				subtitle: t("Generate an IP intelligence report where every source stays attached to the finding it supports, and revisit earlier work."),
				i18nPrefix: "pg.reports",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "saffron",
						size: "sm",
						onClick: () => setPreview(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "size-3.5",
							"aria-hidden": true
						}), t("Preview")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ink",
						size: "sm",
						onClick: () => toast("PDF export is not connected to a document service in this build."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-3.5",
							"aria-hidden": true
						}), t("Download PDF")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => toast("Share links are not connected to a sharing service in this build."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
							className: "size-3.5",
							"aria-hidden": true
						}), t("Share")]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "generate",
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "generate",
						children: t("Generate report")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "history",
						children: t("Recent activity")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "generate",
						className: "mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
										className: "mr-auto",
										children: t("Generate IP Intelligence Report")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: "India" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, { level: "risk" })
								]
							}), preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 divide-y divide-border",
								children: sections.map((s, i) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[0.65rem] text-saffron",
												children: String(i + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 font-display text-base text-foreground",
												children: t(s.title)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-relaxed text-muted-foreground",
												children: t(s.body)
											}),
											[
												"Prior-Art Findings",
												"TKDL Evidence",
												"WIPO Evidence",
												"ABS Findings",
												"Sources"
											].includes(s.title) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex flex-wrap gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: s.title === "WIPO Evidence" ? "wipo" : s.title === "ABS Findings" ? "nba" : "tkdl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ipindia" })]
											}) : null
										]
									}, s.title);
								})
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Report confidence") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, { value: 88 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, {
												value: 94,
												label: t("Source agreement")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, {
												value: 71,
												label: t("Jurisdiction coverage")
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("15 sections") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("5 official sources") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("Preliminary assessment") })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Reports summarise retrieved evidence. They are not legal opinions, freedom-to-operate clearances or regulatory approvals.") })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "history",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Item") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Type") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Date") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Jurisdiction") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: t("Confidence")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Status") })
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: listHistory().map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "max-w-md text-foreground",
									children: h.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs text-muted-foreground",
									children: h.kind
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-mono text-xs text-muted-foreground",
									children: h.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: h.jurisdiction }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "text-right font-mono text-foreground",
									children: [h.confidence, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs text-muted-foreground",
									children: h.status
								})
							] }, h.id)) })] })
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Reports as component };
