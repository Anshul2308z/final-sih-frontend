import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Input } from "./input-CjM-Mr1V.mjs";
import { t as Label } from "./label-Brl11RKw.mjs";
import { D as FileText, F as Clock3, L as CircleCheck, c as Send, o as ShieldCheck, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-WMgYNxRU.mjs";
import { a as Disclaimer, d as Panel, f as RiskChip, g as WorkspaceIdentity, i as DISCLAIMER, p as SectionTitle, s as EvidenceChip, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { t as Textarea } from "./textarea-D-1QfpmZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/expert-DCgU1N8I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var topics = [
	"Patent strategy & prior-art dispute",
	"ABS / benefit-sharing compliance",
	"Formulation classification challenge",
	"International filing decision",
	"Freedom-to-operate opinion",
	"Regulatory submission support"
];
var whenToEscalate = [
	{
		icon: Clock3,
		title: "Time-critical filings",
		body: "An opposition window, examination deadline, or priority date is approaching and automated guidance is not sufficient."
	},
	{
		icon: FileText,
		title: "Binding decisions",
		body: "You are about to sign a licence, file an application, or export a formulation — anything with legal or financial consequence."
	},
	{
		icon: ShieldCheck,
		title: "Conflicting signals",
		body: "The evidence graph shows prior-art risk or a jurisdiction profile conflicts with your plans. A professional must weigh in."
	}
];
function ExpertPage() {
	const { t } = useTranslation();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		org: "",
		topic: "",
		context: ""
	});
	const API_BASE_URL = "https://sihbackend-zd2a.onrender.com";
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			if (!(await fetch(`${API_BASE_URL}/api/v1/expert/consultation`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					organization: formData.org || void 0,
					topic: formData.topic,
					context: formData.context
				})
			})).ok) throw new Error("Failed to submit request");
			setSent(true);
			toast.success(t("Request captured successfully"), { description: t("In production this would route to a vetted IP professional.") });
		} catch (error) {
			toast.error(t("Submission failed"), { description: t("Please check your connection and try again.") });
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-10 workspace-page workspace-page-expert",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "11",
				code: "EX-11",
				label: t("EXPERT ESCALATION"),
				title: t("Know when evidence needs a professional"),
				signal: "Know when evidence needs a professional · REVIEW / ESCALATE",
				metric: "REVIEW / ESCALATE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Expert escalation"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t("When the evidence ends,"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-saffron",
					children: t("a professional begins.")
				})] }),
				subtitle: t("IP-SAKTI provides information, not legal advice. For binding decisions, escalate to a qualified IP professional — with your analysis context attached.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							title: t("Request human review"),
							hint: "Secure request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6 space-y-5",
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "name",
											children: t("Full name")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											placeholder: t("Dr. A. Researcher"),
											required: true,
											value: formData.name,
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											disabled: isSubmitting
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "email",
											children: t("Work email")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											placeholder: t("you@institution.in"),
											required: true,
											value: formData.email,
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											disabled: isSubmitting
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "org",
											children: t("Organisation")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "org",
											placeholder: t("Institute / company"),
											value: formData.org,
											onChange: (e) => setFormData({
												...formData,
												org: e.target.value
											}),
											disabled: isSubmitting
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("Topic") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											required: true,
											value: formData.topic,
											onValueChange: (v) => setFormData({
												...formData,
												topic: v
											}),
											disabled: isSubmitting,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: t("Select a topic") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: t,
												children: t
											}, t)) })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "context",
										children: t("Describe the situation")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "context",
										rows: 5,
										placeholder: t("What are you deciding? Which jurisdictions, formulations, or patents are involved? Include any deadlines."),
										required: true,
										value: formData.context,
										onChange: (e) => setFormData({
											...formData,
											context: e.target.value
										}),
										disabled: isSubmitting
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("Attach analysis context (optional)") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("Assistant session — “Turmeric curcumin novelty”") }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("Evidence graph — 8 nodes") }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceChip, { children: t("ABS risk assessment — Moderate") })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: t("Sharing your in-app analysis lets the professional start from the cited evidence instead of a blank page.")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										variant: "saffron",
										disabled: isSubmitting,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
											className: "size-4",
											"aria-hidden": true
										}), isSubmitting ? t("Submitting...") : t("Submit request")]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: t("Typical response window: 2–3 working days (indicative).")
									})]
								})
							]
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 flex items-start gap-2 rounded-lg border border-verified/30 bg-verified/5 p-3 text-sm text-verified",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}), t("Request captured successfully. A production build would notify the\n              expert network and open a tracked case.")]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
									className: "size-5 text-saffron",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg text-foreground",
									children: t("When to escalate")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-5",
								children: whenToEscalate.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, {
										className: "mt-0.5 size-4 shrink-0 text-info",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-foreground",
										children: w.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed text-muted-foreground",
										children: w.body
									})] })]
								}, w.title))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg text-foreground",
									children: t("What stays automated")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs leading-relaxed text-muted-foreground",
									children: t("Patent screening, TKDL cross-referencing, fee estimation, and jurisdictional\n              orientation remain automated and citation-grounded. Escalation is additive — it\n              never replaces the transparent evidence layer.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, {
										level: "verified",
										label: t("Automated + cited")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, {
										level: "review",
										label: t("Human review for binding steps")
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: DISCLAIMER })
					]
				})]
			})
		]
	});
}
//#endregion
export { ExpertPage as component };
