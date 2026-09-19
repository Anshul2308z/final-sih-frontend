import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, b as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as JurisdictionSwitch, s as cn, u as useJurisdiction } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { C as ImageUp, E as FileUp, V as ChevronDown, h as Mic, i as Sparkles, l as SendHorizontal, q as ArrowRight, v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Disclaimer, c as Eyebrow, d as Panel, f as RiskChip, g as WorkspaceIdentity, h as StatTile, l as JurisdictionPill, m as SourceBadge, n as ConfidenceMeter, o as EmptyState, t as AnalysisChip, u as PageHeader } from "./primitives-BxUwtfld.mjs";
import { t as Textarea } from "./textarea-D-1QfpmZ.mjs";
import { n as setPriorArtCache } from "./priorArtService-p97wiYad.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant-BTyE3PCV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var stages = [
	"Intent",
	"Product classification",
	"Jurisdiction",
	"IP type",
	"Evidence retrieval",
	"Analysis"
];
var API_BASE_URL = "https://sihbackend-zd2a.onrender.com";
var EXAMPLE = "I developed an Ashwagandha-based formulation for stress management. Can I protect it in India and Europe?";
function Assistant() {
	const { t, i18n } = useTranslation();
	const { jurisdiction } = useJurisdiction();
	const [input, setInput] = (0, import_react.useState)("");
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [stage, setStage] = (0, import_react.useState)(-1);
	const [data, setData] = (0, import_react.useState)(null);
	const run = async () => {
		if (!input.trim()) {
			toast.error("Describe your product or IP concern to begin.");
			return;
		}
		setPhase("running");
		setStage(0);
		let i = 0;
		const intervalId = window.setInterval(() => {
			i += 1;
			if (i < stages.length) setStage(i);
			else window.clearInterval(intervalId);
		}, 520);
		try {
			const reqBody = {
				query: input,
				jurisdiction,
				language: i18n.language || "en"
			};
			const res = await fetch(`${API_BASE_URL}/api/v1/chat/message`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(reqBody)
			});
			if (!res.ok) throw new Error(`API returned ${res.status}`);
			const json = await res.json();
			if (json.prior_art_graph) setPriorArtCache(input, json.prior_art_graph);
			setData(json);
			setStage(stages.length);
			setPhase("done");
		} catch (err) {
			console.error(err);
			toast.error("Analysis failed. Please check backend connection.");
			setPhase("idle");
			setStage(-1);
		} finally {
			window.clearInterval(intervalId);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-assistant",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "01",
				code: "AI-01",
				label: t("AI RESEARCH COMMAND"),
				title: t("Ask → analyse → evidence"),
				signal: "Ask → analyse → evidence · AI / EVIDENCE",
				metric: "AI / EVIDENCE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("AI workspace"),
				title: t("Ask about protection, classification or compliance"),
				subtitle: t("Answers are assembled from official records and always carry jurisdiction, evidence and limitations. Information, not legal advice."),
				i18nPrefix: "pg.assistant",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionSwitch, { size: "sm" }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[1.35fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Your question") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: input,
									onChange: (e) => setInput(e.target.value),
									rows: 5,
									placeholder: t("Describe your Ayurvedic product, formulation or IP concern..."),
									className: "mt-3 resize-none border-border bg-background/60 text-sm leading-relaxed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ink",
											size: "sm",
											onClick: () => setInput(EXAMPLE),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
												className: "size-3.5",
												"aria-hidden": true
											}), t("Use example")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ghost",
											size: "sm",
											onClick: () => toast("Voice capture is not connected in this build."),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
												className: "size-3.5",
												"aria-hidden": true
											}), t("Voice")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ghost",
											size: "sm",
											onClick: () => toast("Document upload is not connected in this build."),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {
												className: "size-3.5",
												"aria-hidden": true
											}), t("Document")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ghost",
											size: "sm",
											onClick: () => toast("Image upload is not connected in this build."),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, {
												className: "size-3.5",
												"aria-hidden": true
											}), t("Image")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "saffron",
											size: "sm",
											className: "ml-auto",
											onClick: run,
											disabled: phase === "running",
											children: [phase === "running" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
												className: "size-3.5 animate-spin",
												"aria-hidden": true
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SendHorizontal, {
												className: "size-3.5",
												"aria-hidden": true
											}), t("Analyse")]
										})
									]
								})
							]
						}),
						phase !== "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Processing route") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-4 grid gap-2 sm:grid-cols-3",
									children: stages.map((s, i) => {
										const state = stage > i ? "done" : stage === i ? "active" : "pending";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: state === "done" ? "rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified" : state === "active" ? "rounded-md border border-saffron/50 bg-saffron/10 px-3 py-2 text-xs text-saffron" : "rounded-md border border-border bg-background/40 px-3 py-2 text-xs text-muted-foreground",
											children: [
												i + 1,
												". ",
												t(s)
											]
										}, s);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[0.7rem] text-muted-foreground",
									children: t("High-level processing stages only. Internal reasoning is not exposed.")
								})
							]
						}) : null,
						phase === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "animate-rise p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
											className: "mr-auto",
											children: t("Executive answer")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, { level: "risk" })
									]
								}),
								data?.confidence === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 rounded-md border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-600",
									children: t("⚠️ AI analysis unavailable. Showing retrieved official records below.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-foreground",
									children: data?.executive_answer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
											label: t("Confidence"),
											value: `${data?.confidence ?? 0}%`,
											note: t("Retrieval + agreement score")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
											label: t("Evidence"),
											value: `${data?.evidence_count ?? data?.evidence?.length ?? 0} sources`,
											note: t("All official records")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
											label: t("Jurisdiction"),
											value: jurisdiction,
											note: t("Answer sets kept apart")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
											label: t("Status"),
											value: "Prior-art signal",
											note: t("Preliminary assessment")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Applicable IP types") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: data?.applicable_ip_types?.map((type, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisChip, { children: type }, i))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Key findings") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-2 text-sm text-muted-foreground",
										children: data?.key_findings?.map((finding, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", finding] }, i))
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Recommended next steps") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2",
									children: data?.next_steps?.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										i + 1,
										". ",
										step
									] }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
									type: "multiple",
									className: "mt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
											value: "sources",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
												className: "text-sm",
												children: t("Sources (4 official records)")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "tkdl" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ipindia" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "wipo" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "patentsact" })
												]
											}) })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
											value: "evidence",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
												className: "text-sm",
												children: t("Evidence used")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-3",
												children: (data?.evidence || []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "rounded-lg border border-border bg-background/40 p-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center gap-2",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-mono text-xs text-saffron",
																	children: e.number
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: e.jurisdiction }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, {
																	level: e.risk,
																	className: "ml-auto"
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-xs text-foreground",
															children: e.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs text-muted-foreground",
															children: e.whyRelevant
														})
													]
												}, e.id))
											}) })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
											value: "limits",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
												className: "text-sm",
												children: t("Limitations")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "space-y-2 text-xs text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Similarity is a retrieval score, not a legal probability.") }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Documented prior art does not automatically invalidate any patent.") }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Records reflect a reference dataset snapshot and may not be current.") }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("· Claim scope interpretation requires a qualified professional.") })
												]
											}) })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "saffron",
											size: "sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/expert",
												children: t("Request human review")
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "ink",
											size: "sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/prior-art",
												search: { query: input },
												children: [t("Open evidence explorer"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													className: "size-3.5",
													"aria-hidden": true
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "ghost",
											size: "sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/reports",
												children: t("Generate report")
											})
										})
									]
								})
							]
						}) : null,
						phase === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							title: t("No analysis yet"),
							body: t("Describe a formulation, product or IP concern. The assistant will retrieve official records before offering any assessment."),
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ink",
								size: "sm",
								onClick: () => setInput(EXAMPLE),
								children: t("Try the example question")
							})
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Confidence & evidence") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, { value: phase === "done" ? data?.confidence ?? 0 : 0 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, {
										value: phase === "done" ? data?.source_agreement ?? 0 : 0,
										label: t("Source agreement")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceMeter, {
										value: phase === "done" ? data?.jurisdiction_coverage ?? 0 : 0,
										label: t("Coverage of jurisdiction")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Active source set") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: jurisdiction === "India" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "tkdl" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ipindia" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ayush" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "nba" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "patentsact" })
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "wipo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "epo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "uspto" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "nagoya" })
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: t("Indian and international answer sets are never visually merged.")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("IP-SAKTI Sahayak provides information and preliminary analysis. Human experts are required for legal advice. Never rely on this output as clearance to file, market or export.") })
					]
				})]
			})
		]
	});
}
//#endregion
export { Assistant as component };
