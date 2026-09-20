import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Input } from "./input-CjM-Mr1V.mjs";
import { t as Label } from "./label-Brl11RKw.mjs";
import { t as Switch } from "./switch-lvQj61u5.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { W as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-WMgYNxRU.mjs";
import { _ as WorkspaceIdentity, c as EvidenceChip, d as PageHeader, f as Panel, h as SourceBadge, l as Eyebrow, o as Disclaimer, p as RiskChip, u as JurisdictionPill } from "./primitives-DkBwZnB6.mjs";
import { t as listPlants } from "./plantService-Cq0wO9pP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/abs-8Rg1BUoQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sourceOptions = [
	"Cultivated (contract farming)",
	"Wild-collected",
	"Imported",
	"Unknown"
];
var API_BASE_URL = "http://localhost:8000";
var originOptions = [
	"India",
	"Nepal",
	"Sri Lanka",
	"Brazil",
	"Ecuador",
	"Other"
];
function AbsCheck() {
	const { t } = useTranslation();
	const [resource, setResource] = (0, import_react.useState)("Withania somnifera");
	const [origin, setOrigin] = (0, import_react.useState)("India");
	const [collection, setCollection] = (0, import_react.useState)("Wild-collected");
	const [tk, setTk] = (0, import_react.useState)(true);
	const [commercial, setCommercial] = (0, import_react.useState)(true);
	const [patent, setPatent] = (0, import_react.useState)(true);
	const [exportMarket, setExportMarket] = (0, import_react.useState)(true);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const checkAbs = async () => {
		setLoading(true);
		setSubmitted(true);
		try {
			const res = await fetch(`${API_BASE_URL}/api/v1/compliance/abs`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					resource,
					origin,
					collection,
					tk,
					commercial,
					patent,
					exportMarket
				})
			});
			if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
			setResult(await res.json());
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
	let score = 0;
	if (collection === "Wild-collected") score += 2;
	if (collection === "Unknown") score += 2;
	if (tk) score += 2;
	if (commercial) score += 1;
	if (patent) score += 1;
	if (exportMarket) score += 1;
	collection === "Unknown" ? t("Review required") : score >= 6 ? t("High — documentation likely required") : score >= 4 ? t("Medium — review required") : t("Low — limited signals detected");
	listPlants().find((p) => p.botanical.toLowerCase() === resource.trim().toLowerCase());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-abs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "07",
				code: "AB-07",
				label: t("ABS RISK RADAR"),
				title: t("Check biodiversity obligations early"),
				signal: "Check biodiversity obligations early · RISK / COMPLY",
				metric: "RISK / COMPLY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Compliance workflow"),
				title: t("Biodiversity & ABS Check"),
				subtitle: t("Access and benefit-sharing signals for the biological resource, its origin and any associated traditional knowledge."),
				i18nPrefix: "pg.abs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Resource details") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs text-muted-foreground",
									children: t("Biological resource")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: resource,
									onChange: (e) => setResource(e.target.value),
									className: "mt-1.5 border-border bg-background/60",
									placeholder: t("Botanical name, e.g. Withania somnifera")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs text-muted-foreground",
										children: t("Country of origin")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: origin,
										onValueChange: setOrigin,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "mt-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: originOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o,
											children: o
										}, o)) })]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs text-muted-foreground",
										children: t("Source")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: collection,
										onValueChange: setCollection,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "mt-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sourceOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: o,
											children: o
										}, o)) })]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
								[
									{
										label: t("Associated traditional knowledge used?"),
										value: tk,
										set: setTk
									},
									{
										label: t("Commercial use intended?"),
										value: commercial,
										set: setCommercial
									},
									{
										label: t("Patent protection planned?"),
										value: patent,
										set: setPatent
									},
									{
										label: t("Export market planned?"),
										value: exportMarket,
										set: setExportMarket
									}
								].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm font-normal text-muted-foreground",
										children: row.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: row.value,
										onCheckedChange: row.set
									})]
								}, row.label))
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "saffron",
							className: "mt-6 w-full",
							onClick: checkAbs,
							disabled: loading || !resource.trim(),
							children: t("Run ABS check")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						className: "animate-rise p-6",
						children: loading || !result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center py-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: t("Analyzing ABS obligations via LLM...")
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
									className: "mr-auto",
									children: t("Risk radar output")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: "India" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, { level: result.status.level }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl text-foreground",
									children: result.status.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Applicable frameworks") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: result.framework.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: f }, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Context") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: result.reasoning
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "nba" })
							})
						] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("What this check looks at") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Whether the resource is wild-collected, cultivated or imported.") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Whether associated traditional knowledge is involved.") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Whether commercial use, patenting or export is planned.") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Which national framework and authority is likely to apply.") })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("ABS outcomes depend on facts that cannot be verified automatically, including collection records and community consent. No definitive legal clearance is given here.") })]
				})]
			})
		]
	});
}
//#endregion
export { AbsCheck as component };
