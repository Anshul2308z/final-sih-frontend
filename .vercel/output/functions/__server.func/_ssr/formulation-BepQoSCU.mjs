import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as cn } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Input } from "./input-CjM-Mr1V.mjs";
import { t as Label } from "./label-Brl11RKw.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { I as Circle, J as ArrowLeft, f as RotateCcw, q as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, g as WorkspaceIdentity, l as JurisdictionPill, m as SourceBadge, n as ConfidenceMeter, s as EvidenceChip, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/radix-ui__react-radio-group.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/formulation-BepQoSCU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var steps = [
	{
		key: "classical",
		question: "Does the formulation follow a classical text exactly?",
		options: [
			"Yes — recipe and process follow a classical formulary",
			"Partly — classical base with modifications",
			"No — the composition is newly developed"
		]
	},
	{
		key: "novelty",
		question: "Does it contain a purified or characterised plant fraction?",
		options: [
			"No — whole herb or classical extract",
			"Yes — standardised extract with defined markers",
			"Yes — purified single-molecule fraction"
		]
	},
	{
		key: "claim",
		question: "What is claimed on the label?",
		options: [
			"Therapeutic indication",
			"Nutrition or wellness support",
			"Cosmetic or external appearance benefit"
		]
	},
	{
		key: "route",
		question: "How is it consumed or applied?",
		options: [
			"Oral medicine form",
			"Food or beverage form",
			"Topical application"
		]
	}
];
function classify(a, t) {
	if (a.claim === "Cosmetic or external appearance benefit" || a.route === "Topical application") {
		if (a.claim === "Cosmetic or external appearance benefit") return {
			label: t("Cosmetic"),
			confidence: 79,
			reasoning: "An appearance-directed claim without a therapeutic indication typically falls under cosmetics regulation rather than the Ayurvedic drug route.",
			route: "Cosmetics licensing route",
			authorities: ["CDSCO", "State licensing authority"],
			ip: [
				"Trade mark",
				"Design (packaging)",
				"Trade secret (process)"
			]
		};
	}
	if (a.novelty === "Yes — purified single-molecule fraction") return {
		label: t("Phytopharmaceutical"),
		confidence: 84,
		reasoning: "A purified and characterised plant fraction with a therapeutic claim aligns with the phytopharmaceutical drug category and its data requirements.",
		route: "Phytopharmaceutical drug route",
		authorities: ["CDSCO", "Ministry of Ayush"],
		ip: [
			"Composition patent",
			"Process patent",
			"Regulatory data"
		]
	};
	if (a.claim === "Nutrition or wellness support" || a.route === "Food or beverage form") return {
		label: t("Ayurveda-Aahar / nutraceutical"),
		confidence: 76,
		reasoning: "A nutrition or wellness claim in a food form points to the Ayurveda-Aahar and nutraceutical framework rather than a drug approval route.",
		route: "Food / Ayurveda-Aahar route",
		authorities: ["FSSAI", "Ministry of Ayush"],
		ip: [
			"Trade mark",
			"Process patent",
			"Trade secret"
		]
	};
	if (a.classical === "Yes — recipe and process follow a classical formulary") return {
		label: t("Classical / generic Ayurvedic medicine"),
		confidence: 88,
		reasoning: "A formulation matching a classical formulary is generally treated as a classical Ayurvedic medicine, with documented traditional knowledge as prior art.",
		route: "Classical Ayurvedic medicine licence",
		authorities: ["Ministry of Ayush", "State licensing authority"],
		ip: [
			"Trade mark",
			"Process know-how",
			"No composition novelty expected"
		]
	};
	if (a.classical === "Partly — classical base with modifications") return {
		label: t("Patent / proprietary medicine"),
		confidence: 81,
		reasoning: "A classical base with a modified composition and a therapeutic claim commonly falls under patent or proprietary Ayurvedic medicine.",
		route: "Patent / proprietary medicine licence",
		authorities: ["Ministry of Ayush", "State licensing authority"],
		ip: [
			"Process patent",
			"Trade mark",
			"Trade secret"
		]
	};
	return {
		label: t("New / non-classical drug"),
		confidence: 68,
		reasoning: "A newly developed composition with a therapeutic claim and no classical reference generally requires the new-drug evidence pathway.",
		route: "New drug evaluation route",
		authorities: ["CDSCO", "Ministry of Ayush"],
		ip: [
			"Composition patent",
			"Process patent",
			"Regulatory data"
		]
	};
}
function Formulation() {
	const { t } = useTranslation();
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({
		product: "",
		classical: "",
		novelty: "",
		claim: "",
		route: ""
	});
	const [done, setDone] = (0, import_react.useState)(false);
	const total = steps.length + 1;
	const current = steps[step - 1];
	const result = classify(answers, t);
	const canAdvance = step === 0 ? answers.product.trim().length > 2 : Boolean(current && answers[current.key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-formulation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "04",
				code: "LAB-04",
				label: t("FORMULATION LAB"),
				title: t("Classify the product before filing"),
				signal: "Classify the product before filing · CLASSIFY / ROUTE",
				metric: "CLASSIFY / ROUTE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Guided wizard"),
				title: t("What are you developing?"),
				subtitle: t("Four short questions produce a preliminary regulatory classification with reasoning, authorities and cited sources."),
				i18nPrefix: "pg.formulation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: Array.from({ length: total }).map((_, i) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i <= step ? "h-1 flex-1 rounded-full bg-saffron" : "h-1 flex-1 rounded-full bg-muted" }, i);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: [
								t("Step"),
								Math.min(step + 1, total),
								t("of"),
								total
							]
						}),
						!done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-foreground",
								children: t("Describe the product in one line")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: answers.product,
								onChange: (e) => setAnswers({
									...answers,
									product: e.target.value
								}),
								placeholder: t("Standardised Ashwagandha capsule for stress support"),
								className: "mt-4 h-11 border-border bg-background/60"
							})] }) : current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-foreground",
								children: current.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								className: "mt-4 space-y-2",
								value: answers[current.key],
								onValueChange: (v) => setAnswers({
									...answers,
									[current.key]: v
								}),
								children: current.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background/40 p-3 text-sm font-normal text-muted-foreground transition-colors hover:border-saffron/40 hover:text-foreground has-[[data-state=checked]]:border-saffron/60 has-[[data-state=checked]]:bg-saffron/5 has-[[data-state=checked]]:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
										value: o,
										className: "mt-0.5"
									}), o]
								}, o))
							})] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									disabled: step === 0,
									onClick: () => setStep((s) => Math.max(0, s - 1)),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
										className: "size-3.5",
										"aria-hidden": true
									}), t("Back")]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "saffron",
									size: "sm",
									disabled: !canAdvance,
									onClick: () => step === steps.length ? setDone(true) : setStep((s) => s + 1),
									children: [step === steps.length ? t("Classify") : t("Next"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-3.5",
										"aria-hidden": true
									})]
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl text-foreground",
									children: t("Answers recorded")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 space-y-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", answers.product] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", answers.classical] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", answers.novelty] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", answers.claim] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", answers.route] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ink",
									size: "sm",
									className: "mt-6",
									onClick: () => {
										setDone(false);
										setStep(0);
										setAnswers({
											product: "",
											classical: "",
											novelty: "",
											claim: "",
											route: ""
										});
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
										className: "size-3.5",
										"aria-hidden": true
									}), t("Start again")]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "animate-rise p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
									className: "mr-auto",
									children: t("Preliminary classification")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: "India" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl text-saffron",
								children: result.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, {
								value: result.confidence,
								className: "mt-5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Reasoning summary") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: result.reasoning
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Applicable regulatory route") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-foreground",
									children: result.route
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Relevant authorities") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 flex flex-wrap gap-2",
									children: result.authorities.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: x }, x))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Potential IP implications") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 flex flex-wrap gap-2",
									children: result.ip.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: x }, x))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ayush" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "tkdl" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "patentsact" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-xs text-review",
								children: t("Preliminary classification — professional/regulatory verification may be required.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "saffron",
									size: "sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/abs",
										children: t("Continue to ABS check")
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ink",
									size: "sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/expert",
										children: t("Request human review")
									})
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Possible categories") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [
								"Classical / generic Ayurvedic medicine",
								"Patent / proprietary medicine",
								"New / non-classical drug",
								"Phytopharmaceutical",
								"Ayurveda-Aahar / nutraceutical",
								"Cosmetic",
								"Uncertain — expert review recommended"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-lg border border-border bg-background/40 px-3 py-2",
								children: c
							}, c))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Classification affects both the regulatory route and the intellectual property strategy. This output is a preliminary assessment and does not constitute regulatory clearance.") })]
				})]
			})
		]
	});
}
//#endregion
export { Formulation as component };
