import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { s as cn, u as useJurisdiction } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Label } from "./label-Brl11RKw.mjs";
import { t as Switch } from "./switch-lvQj61u5.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-WMgYNxRU.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, g as WorkspaceIdentity, h as StatTile, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BPuA8wVa.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cost-DuelKMPR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var applicantTypes = [
	{
		label: "Individual",
		factor: 1
	},
	{
		label: "Startup",
		factor: 1
	},
	{
		label: "Small Enterprise",
		factor: 1
	},
	{
		label: "Educational Institution",
		factor: 1
	},
	{
		label: "Other (large entity)",
		factor: 5
	}
];
var rights = [
	"Patent",
	"Trademark",
	"Design",
	"PCT",
	"Madrid"
];
function inr(n) {
	return `₹${n.toLocaleString("en-IN")}`;
}
function CostPlanner() {
	const { t } = useTranslation();
	const { jurisdiction } = useJurisdiction();
	const [right, setRight] = (0, import_react.useState)("Patent");
	const [applicant, setApplicant] = (0, import_react.useState)("Startup");
	const [mode, setMode] = (0, import_react.useState)("e-filing");
	const [claims, setClaims] = (0, import_react.useState)(12);
	const [pages, setPages] = (0, import_react.useState)(38);
	const [earlyPub, setEarlyPub] = (0, import_react.useState)(true);
	const [examination, setExamination] = (0, import_react.useState)(true);
	const [country, setCountry] = (0, import_react.useState)("Germany / EPO");
	const [currency, setCurrency] = (0, import_react.useState)("EUR");
	const [designations, setDesignations] = (0, import_react.useState)(3);
	const factor = applicantTypes.find((a) => a.label === applicant)?.factor ?? 1;
	const paperUplift = mode === "physical filing" ? 1.1 : 1;
	const indiaLines = (0, import_react.useMemo)(() => {
		const base = right === "Patent" ? 1600 : right === "Trademark" ? 4500 : 1e3;
		const extraClaims = right === "Patent" ? Math.max(0, claims - 10) * 320 : 0;
		const extraPages = right === "Patent" ? Math.max(0, pages - 30) * 160 : 0;
		const lines = [{
			label: `${right} application filing fee`,
			category: "Official government fee",
			amount: Math.round(base * factor * paperUplift),
			currency: "INR",
			source: "IP India fee schedule",
			effective: "2024-04-01",
			lastVerified: "2026-09-02"
		}];
		if (extraClaims) lines.push({
			label: `Excess claims (${claims - 10} beyond 10)`,
			category: "Official government fee",
			amount: Math.round(extraClaims * factor),
			currency: "INR",
			source: "IP India fee schedule",
			effective: "2024-04-01",
			lastVerified: "2026-09-02"
		});
		if (extraPages) lines.push({
			label: `Excess specification pages (${pages - 30} beyond 30)`,
			category: "Official government fee",
			amount: Math.round(extraPages * factor),
			currency: "INR",
			source: "IP India fee schedule",
			effective: "2024-04-01",
			lastVerified: "2026-09-02"
		});
		if (earlyPub) lines.push({
			label: t("Request for early publication"),
			category: "Official government fee",
			amount: Math.round(2500 * factor),
			currency: "INR",
			source: "IP India fee schedule",
			effective: "2024-04-01",
			lastVerified: "2026-09-02"
		});
		if (examination) lines.push({
			label: t("Request for examination"),
			category: "Official government fee",
			amount: Math.round(4e3 * factor),
			currency: "INR",
			source: "IP India fee schedule",
			effective: "2024-04-01",
			lastVerified: "2026-09-02"
		});
		lines.push({
			label: t("Drafting and filing (professional)"),
			category: "Professional/service estimate",
			amount: right === "Patent" ? 55e3 : 12e3,
			currency: "INR",
			source: "Market range, reference dataset",
			effective: "2026-07-01",
			lastVerified: "2026-09-05"
		}, {
			label: t("Prosecution and response handling (professional)"),
			category: "Professional/service estimate",
			amount: right === "Patent" ? 35e3 : 8e3,
			currency: "INR",
			source: "Market range, reference dataset",
			effective: "2026-07-01",
			lastVerified: "2026-09-05"
		});
		return lines;
	}, [
		right,
		claims,
		pages,
		earlyPub,
		examination,
		factor,
		paperUplift
	]);
	const internationalLines = (0, import_react.useMemo)(() => {
		const perDesignation = currency === "EUR" ? 1200 : currency === "USD" ? 1400 : 1300;
		return [
			{
				label: t("PCT international filing fee"),
				category: "Official government fee",
				amount: currency === "EUR" ? 1330 : 1450,
				currency,
				source: "WIPO PCT fee tables",
				effective: "2026-01-01",
				lastVerified: "2026-09-01"
			},
			{
				label: `National / regional phase entry (${designations} designations)`,
				category: "Official government fee",
				amount: perDesignation * designations,
				currency,
				source: `${country} official fee schedule`,
				effective: "2026-01-01",
				lastVerified: "2026-08-30"
			},
			{
				label: t("Local agent fees"),
				category: "Professional/service estimate",
				amount: 1800 * designations,
				currency,
				source: "Market range, reference dataset",
				effective: "2026-07-01",
				lastVerified: "2026-09-05"
			},
			{
				label: t("Translation of specification"),
				category: "Professional/service estimate",
				amount: Math.round(pages * 28),
				currency,
				source: "Market range, reference dataset",
				effective: "2026-07-01",
				lastVerified: "2026-09-05"
			}
		];
	}, [
		country,
		currency,
		designations,
		pages
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-cost",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "08",
				code: "EC-08",
				label: t("FILING ECONOMICS"),
				title: t("Turn filing strategy into a cost plan"),
				signal: "Turn filing strategy into a cost plan · ₹ / STRATEGY",
				metric: "₹ / STRATEGY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Estimator"),
				title: t("IP Cost Planner"),
				subtitle: t("Official government fees and professional/service estimates are always shown separately, each with a source and an effective date."),
				i18nPrefix: "pg.cost"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[22rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Right") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: rights.map((r) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setRight(r),
									className: r === right ? "rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground" : "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
									children: t(r)
								}, r);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs text-muted-foreground",
									children: t("Applicant type (India)")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: applicant,
									onValueChange: setApplicant,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: applicantTypes.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: a.label,
										children: a.label
									}, a.label)) })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs text-muted-foreground",
									children: t("Filing mode")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: mode,
									onValueChange: setMode,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "e-filing",
										children: t("e-filing")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "physical filing",
										children: t("physical filing")
									})] })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs text-muted-foreground",
									children: [t("Number of claims ·"), claims]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									className: "mt-3",
									value: [claims],
									min: 1,
									max: 40,
									step: 1,
									onValueChange: (v) => setClaims(v[0] ?? claims)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs text-muted-foreground",
									children: [t("Specification pages ·"), pages]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									className: "mt-3",
									value: [pages],
									min: 10,
									max: 120,
									step: 1,
									onValueChange: (v) => setPages(v[0] ?? pages)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm font-normal text-muted-foreground",
										children: t("Early publication")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: earlyPub,
										onCheckedChange: setEarlyPub
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm font-normal text-muted-foreground",
										children: t("Request examination")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: examination,
										onCheckedChange: setExamination
									})]
								}),
								jurisdiction === "International" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs text-muted-foreground",
										children: t("International country")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: country,
										onValueChange: setCountry,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "mt-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
											"Germany / EPO",
											"United States",
											"Japan",
											"Australia",
											"Canada"
										].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: c,
											children: c
										}, c)) })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs text-muted-foreground",
										children: t("Currency")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: currency,
										onValueChange: setCurrency,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "mt-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
											"EUR",
											"USD",
											"CHF"
										].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: c,
											children: c
										}, c)) })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs text-muted-foreground",
										children: [t("Designations ·"), designations]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										className: "mt-3",
										value: [designations],
										min: 1,
										max: 8,
										step: 1,
										onValueChange: (v) => setDesignations(v[0] ?? designations)
									})] })
								] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [jurisdiction === "India" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeeSection, {
							lines: indiaLines,
							currencyLabel: "INR",
							format: inr
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeeSection, {
							lines: internationalLines,
							currencyLabel: currency,
							format: (n) => `${currency} ${n.toLocaleString("en-IN")}`
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Fees change. Always verify the current official fee schedule before filing. Government fees and professional estimates are separate figures and must not be added together as a single official cost.") })]
				})]
			})
		]
	});
}
function FeeSection({ lines, currencyLabel, format }) {
	const { t } = useTranslation();
	const official = lines.filter((l) => l.category === "Official government fee");
	const professional = lines.filter((l) => l.category === "Professional/service estimate");
	const sum = (arr) => arr.reduce((t, l) => t + l.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
					label: t("Official government fee"),
					value: format(sum(official)),
					note: `${official.length} statutory line items`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
					label: t("Professional/service estimate"),
					value: format(sum(professional)),
					note: t("Market range, not an official fee")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
					label: t("Estimated total"),
					value: format(sum(lines)),
					note: `Shown in ${currencyLabel} · indicative only`
				})
			]
		}),
		[{
			title: "Official government fees",
			rows: official
		}, {
			title: "Professional/service estimates",
			rows: professional
		}].map((group) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border px-5 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t(group.title) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Item") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: t("Amount")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Source") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Effective") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t("Last verified") })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: group.rows.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-foreground",
						children: l.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right font-mono text-foreground",
						children: format(l.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-xs text-muted-foreground",
						children: l.source
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs text-muted-foreground",
						children: l.effective
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs text-muted-foreground",
						children: l.lastVerified
					})
				] }, l.label)) })] })]
			}, group.title);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ink",
				size: "sm",
				children: t("Save estimate")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				children: t("Export breakdown")
			})]
		})
	] });
}
//#endregion
export { CostPlanner as component };
