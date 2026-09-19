import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Input } from "./input-CjM-Mr1V.mjs";
import { t as Label } from "./label-Brl11RKw.mjs";
import { t as Switch } from "./switch-lvQj61u5.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-WMgYNxRU.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, f as RiskChip, g as WorkspaceIdentity, l as JurisdictionPill, m as SourceBadge, s as EvidenceChip, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { t as listPlants } from "./plantService-CP6f0xNu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/abs-DDCBoORH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sourceOptions = [
	"Cultivated (contract farming)",
	"Wild-collected",
	"Imported",
	"Unknown"
];
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
	let score = 0;
	if (collection === "Wild-collected") score += 2;
	if (collection === "Unknown") score += 2;
	if (tk) score += 2;
	if (commercial) score += 1;
	if (patent) score += 1;
	if (exportMarket) score += 1;
	const status = collection === "Unknown" ? {
		level: "review",
		label: t("Review required")
	} : score >= 6 ? {
		level: "risk",
		label: t("High — documentation likely required")
	} : score >= 4 ? {
		level: "review",
		label: t("Medium — review required")
	} : {
		level: "verified",
		label: t("Low — limited signals detected")
	};
	const framework = origin === "India" ? [
		"Biological Diversity Act, 2002",
		"ABS Regulations, 2014",
		"Nagoya Protocol"
	] : ["Nagoya Protocol", "National ABS legislation of the country of origin"];
	const plantMatch = listPlants().find((p) => p.botanical.toLowerCase() === resource.trim().toLowerCase());
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
							onClick: () => setSubmitted(true),
							children: t("Run ABS check")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "animate-rise p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
									className: "mr-auto",
									children: t("ABS status")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: origin === "India" ? t("India") : origin })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, {
									level: status.level,
									label: status.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("Preliminary assessment") })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-eyebrow",
										children: t("Resource origin")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "mt-1 text-sm text-foreground",
										children: [
											resource,
											" · ",
											origin,
											" · ",
											collection.toLowerCase()
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-eyebrow",
										children: t("Associated TK")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "mt-1 text-sm text-foreground",
										children: [tk ? t("Declared as used") : t("Not declared"), plantMatch ? ` · ${plantMatch.tkdlRecords} TKDL records indexed` : ""]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-eyebrow",
										children: t("Applicable jurisdiction")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-sm text-foreground",
										children: origin === "India" ? t("India (NBA / SBB)") : `${origin} national authority`
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-eyebrow",
										children: t("Potential documentation")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-sm text-foreground",
										children: t("Access approval, benefit-sharing agreement, source-of-material declaration in the patent specification.")
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Relevant legal framework") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: framework.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: f }, f))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "nba" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "nagoya" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "patentsact" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-xs text-review",
								children: t("This is not legal clearance. Further verification with the competent national authority is required before commercial use, filing or export.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ink",
								size: "sm",
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/expert",
									children: t("Request human review of ABS documentation")
								})
							})
						]
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
