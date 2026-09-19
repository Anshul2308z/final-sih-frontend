import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as JurisdictionSwitch } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { K as ArrowUpRight, N as Database, O as FileCheckCorner, T as FlaskConical, W as Bot, Y as Activity, b as Leaf, d as ScanSearch, i as Sparkles, j as Earth, m as Network, n as Waypoints, o as ShieldCheck, q as ArrowRight } from "../_libs/lucide-react.mjs";
import { f as RiskChip, l as JurisdictionPill, m as SourceBadge, r as Counter } from "./primitives-BxUwtfld.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-v9XgYQHg.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		to: "/assistant",
		icon: Bot,
		number: "01",
		tag: "AI RESEARCH",
		title: "AI IP Sahayak",
		body: "Ask a question and receive a structured answer with jurisdiction, evidence and source context.",
		accent: "violet"
	},
	{
		to: "/patents",
		icon: ScanSearch,
		number: "02",
		tag: "DISCOVERY",
		title: "Patent Intelligence",
		body: "Search concepts, claims and jurisdictions without losing the evidence behind each result.",
		accent: "blue"
	},
	{
		to: "/prior-art",
		icon: Network,
		number: "03",
		tag: "TRACE",
		title: "Prior-Art Trace",
		body: "Connect formulations, ingredients, traditional records and patent claims in one research trail.",
		accent: "purple"
	},
	{
		to: "/formulation",
		icon: FlaskConical,
		number: "04",
		tag: "FORMULATION",
		title: "Formulation Intelligence",
		body: "Screen the likely product category before investing in a filing or market route.",
		accent: "saffron"
	},
	{
		to: "/knowledge",
		icon: Leaf,
		number: "05",
		tag: "TRADITIONAL KNOWLEDGE",
		title: "Knowledge Explorer",
		body: "Explore documented Ayurvedic plant knowledge and the records behind traditional-use claims.",
		accent: "green"
	},
	{
		to: "/international",
		icon: Earth,
		number: "06",
		tag: "GLOBAL IP",
		title: "International IP",
		body: "Compare selected jurisdictions, disclosure expectations and traditional-knowledge treatment.",
		accent: "cyan"
	}
];
var stats = [
	{
		label: "TKDL records",
		to: 2411,
		suffix: "+",
		icon: Database
	},
	{
		label: "Patent records",
		to: 1860,
		suffix: "",
		icon: ScanSearch
	},
	{
		label: "Jurisdictions",
		to: 10,
		suffix: "",
		icon: Earth
	},
	{
		label: "Official sources",
		to: 9,
		suffix: "",
		icon: ShieldCheck
	}
];
function EvidenceFlow() {
	const { t } = useTranslation();
	const nodes = [
		[
			"01",
			t("Plant"),
			t("Withania somnifera")
		],
		[
			"02",
			t("Knowledge"),
			t("Traditional record")
		],
		[
			"03",
			t("Patent"),
			t("Claim / filing")
		],
		[
			"04",
			t("Rule"),
			t("Jurisdiction")
		],
		[
			"05",
			t("Decision"),
			t("Evidence brief")
		]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "evidence-command-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "evidence-card-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-start justify-between gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "live-label",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t("LIVE EVIDENCE ARCHITECTURE")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl leading-tight text-white sm:text-[2rem]",
					children: t("From biological resource to a defensible research trail.")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "evidence-icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "evidence-track",
				children: nodes.map(([number, label, value], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "evidence-node-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "evidence-node",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "evidence-number",
								children: number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-sm font-bold text-white",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[0.68rem] leading-snug text-white/60",
								children: value
							})
						]
					}), index < nodes.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "evidence-arrow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					}) : null]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "evidence-status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}),
							" ",
							t("Source-linked")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Jurisdiction aware") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Verification state retained") })
				]
			})
		]
	});
}
function IntelligencePreview() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "intelligence-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "intelligence-topline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "live-label light",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t("ILLUSTRATIVE ASSESSMENT")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: "India" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.14em] text-slate-500",
						children: t("FORMULATION SIGNAL")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl leading-tight text-slate-950",
						children: t("Withania somnifera")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-semibold text-emerald-900",
						children: t("Stress-support formulation")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "score-orb",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("sources") })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-sm leading-6 text-slate-600",
				children: t("Documented traditional records and an overlapping granted claim are visible in the current reference set. This is a research signal, not a legal conclusion.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, { level: "risk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskChip, {
					level: "verified",
					label: t("Evidence linked")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "tkdl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "ipindia" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBadge, { id: "wipo" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/prior-art",
				search: { query: "" },
				className: "mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950",
				children: [
					t("Inspect evidence trail"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
				]
			})
		]
	});
}
function Home() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "home-command-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero-command",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-orb orb-green" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-orb orb-saffron" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grid" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1500px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-kicker",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-kicker-dot" }),
										" ",
										t("INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE"),
										" "
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "hero-title",
									children: [
										t("Protect Ayurveda."),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Navigate IP with evidence.") })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-copy",
									children: t("A structured intelligence workspace for medicinal plants, formulations, traditional knowledge, patents, prior art, ABS and international IP — with the evidence trail kept visible.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "saffron",
										className: "hero-primary-cta",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/assistant",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
												" ",
												t("Start an IP analysis"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										className: "hero-secondary-cta",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/patents",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, {}),
												" ",
												t("Explore patent intelligence")
											]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-500",
										children: t("Answering for")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionSwitch, { size: "sm" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hero-stat-grid",
									children: stats.map(({ label, to, suffix, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-stat",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hero-stat-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to,
												suffix,
												className: "hero-stat-value"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(label) })
										]
									}, label))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col justify-center gap-4 lg:pl-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceFlow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntelligencePreview, {})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "signal-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "signal-pulse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-[0.16em] text-slate-900",
							children: t("Evidence-first intelligence")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500",
							children: t("Source · jurisdiction · date · verification state stay visible.")
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sources",
						className: "signal-link",
						children: [
							t("View source registry"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "workspace-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "workspace-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-kicker",
							children: t("THE IP-SAKTI WORKSPACE")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "workspace-title",
							children: [
								t("Six research paths."),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("One evidence system.") })
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "workspace-description",
							children: t("Move from an idea to a research-backed decision without jumping between disconnected tools.")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "workspace-grid",
						children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: feature.to,
							className: `workspace-card workspace-${feature.accent}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "workspace-card-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "workspace-number",
											children: feature.number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "workspace-tag",
											children: t(feature.tag)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "workspace-arrow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "workspace-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(feature.title) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(feature.body) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "workspace-open",
									children: [
										t("Open workspace"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
									]
								})
							]
						}, feature.to))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "trust-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1500px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-kicker light-kicker",
							children: t("WHY IP-SAKTI")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "trust-title",
							children: [
								t("Evidence is not a footnote."),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("It is the product.") })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-sm leading-7 text-white/65",
							children: t("The platform is designed to keep research traceable: what was found, where it applies, which source supports it and when that source was verified.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							className: "mt-7 border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sources",
								children: [t("Explore the evidence layer"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "trust-cards",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waypoints, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Source-linked findings") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("Every meaningful conclusion can point back to its reference set.") })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Jurisdiction-aware by design") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("India and international requirements remain clearly separated.") })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("Human escalation built in") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("Uncertain cases can move from automated analysis to expert review.") })] })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "closing-cta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "closing-pattern" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1500px] px-4 py-14 text-center sm:px-6 lg:px-10 lg:py-18",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-kicker justify-center",
							children: t("START WITH A QUESTION")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "closing-title",
							children: t("Leave with a research trail.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600",
							children: t("Ask about a formulation, traditional knowledge record, patent, prior art or international IP route.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "saffron",
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/assistant",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}),
									t("Start an IP analysis"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								]
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
