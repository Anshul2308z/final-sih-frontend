import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { t as Separator } from "./separator-yLUBz5Z4.mjs";
import { m as MapPin, q as Earth, w as ExternalLink } from "../_libs/lucide-react.mjs";
import { _ as WorkspaceIdentity, d as PageHeader, f as Panel, l as Eyebrow, o as Disclaimer, u as JurisdictionPill, v as countries } from "./primitives-DkBwZnB6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/international-DFTVNhdE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Regulatory/jurisdiction profile adapter backed by the current reference set. */
function listCountryProfiles() {
	return countries;
}
function International() {
	const { t } = useTranslation();
	const [activeId, setActiveId] = (0, import_react.useState)("in");
	const profiles = listCountryProfiles();
	const active = profiles.find((c) => c.id === activeId) ?? profiles[0];
	const markerPositions = {
		in: {
			left: "71.6%",
			top: "40%"
		},
		us: {
			left: "21.5%",
			top: "27.4%"
		},
		ep: {
			left: "49.4%",
			top: "19.8%"
		},
		gb: {
			left: "48.5%",
			top: "16.1%"
		},
		cn: {
			left: "75.8%",
			top: "28.3%"
		},
		jp: {
			left: "85.7%",
			top: "34.2%"
		},
		au: {
			left: "85.7%",
			top: "66.2%"
		},
		ca: {
			left: "21.9%",
			top: "14.9%"
		},
		br: {
			left: "34%",
			top: "59.5%"
		},
		ec: {
			left: "29.3%",
			top: "52.2%"
		}
	};
	if (!active) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 workspace-page workspace-page-international",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "06",
				code: "GL-06",
				label: t("GLOBAL IP ATLAS"),
				title: t("Move from India to the world"),
				signal: "Move from India to the world · 10 JURISDICTIONS",
				metric: "10 JURISDICTIONS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Jurisdiction map"),
				title: t("International IP intelligence"),
				subtitle: t("Select a jurisdiction to see its patent and trade mark framework, traditional knowledge treatment, ABS regime and disclosure requirements."),
				i18nPrefix: "pg.international"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 xl:grid-cols-[1.35fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Supported jurisdictions") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "international-map-shell mt-4 overflow-hidden rounded-2xl border border-emerald-200/70 bg-[linear-gradient(135deg,#f7fbf7_0%,#eef7f2_52%,#fff8e8_100%)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "international-map-toolbar",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "international-map-kicker",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "size-3.5" }), t("Global IP coverage")]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "international-map-title",
									children: t("Select a supported jurisdiction")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "international-map-count",
									children: [profiles.length, t("profiles")]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "international-map-canvas",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "international-map-visual",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											className: "international-world-map-image",
											src: "/world-color.svg",
											alt: t("Colourful world map showing IP-SAKTI supported jurisdictions"),
											draggable: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "international-map-network",
											viewBox: "0 0 100 100",
											preserveAspectRatio: "none",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
												id: "ipNetworkGradient",
												x1: "0",
												y1: "0",
												x2: "1",
												y2: "1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "0%",
														stopColor: "#F4B73A"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "55%",
														stopColor: "#54E0BF"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
														offset: "100%",
														stopColor: "#7D8CFF"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
												id: "ipNetworkGlow",
												x: "-30%",
												y: "-30%",
												width: "160%",
												height: "160%",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
													stdDeviation: "0.8",
													result: "blur"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "blur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
											})] }), Object.entries(markerPositions).filter(([id]) => id !== "in").map(([id, position]) => {
												const x = Number.parseFloat(position.left);
												const y = Number.parseFloat(position.top);
												const indiaX = Number.parseFloat(markerPositions["in"].left);
												const indiaY = Number.parseFloat(markerPositions["in"].top);
												const midX = (x + indiaX) / 2;
												const midY = Math.min(y, indiaY) - 8;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: `M ${Number.parseFloat(markerPositions["in"].left)} ${Number.parseFloat(markerPositions["in"].top)} Q ${midX} ${midY} ${x} ${y}`,
													pathLength: "1",
													className: `international-map-route ${id === activeId ? "is-active" : ""}`,
													filter: "url(#ipNetworkGlow)"
												}, id);
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "international-map-aurora",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "international-map-markers",
											"aria-label": t("Supported jurisdictions"),
											children: profiles.map((profile) => {
												const position = markerPositions[profile.id];
												if (!position) return null;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													className: `international-map-marker ${profile.id === activeId ? "is-active" : ""}`,
													style: {
														left: position.left,
														top: position.top
													},
													onClick: () => setActiveId(profile.id),
													"aria-label": `Open ${profile.name} jurisdiction profile`,
													title: `${profile.flag} ${profile.name}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "international-map-marker-pulse",
															"aria-hidden": true
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "international-map-marker-core",
															"aria-hidden": true
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "international-map-marker-label",
															children: [
																profile.flag,
																" ",
																profile.name
															]
														})
													]
												}, profile.id);
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "international-map-overlay",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "map-dot map-dot-supported" }), t("Supported")] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "map-dot map-dot-active" }), t("Selected")] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "map-dot map-dot-network" }), t("Network")] })
											]
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), t("Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.")]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "animate-rise p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
									className: "mr-auto",
									children: t("Jurisdiction profile")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: active.name })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-2xl text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "mr-2",
									children: active.flag
								}), active.name]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: active.authority
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "space-y-4",
								children: [
									{
										label: t("Patent"),
										value: active.patent
									},
									{
										label: t("Trademark"),
										value: active.trademark
									},
									{
										label: t("Traditional knowledge"),
										value: active.traditionalKnowledge
									},
									{
										label: t("ABS"),
										value: active.abs
									},
									{
										label: t("Disclosure requirements"),
										value: active.disclosure
									}
								].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-eyebrow",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm leading-relaxed text-muted-foreground",
									children: row.value
								})] }, row.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "evidence",
								size: "sm",
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: active.authorityUrl,
									target: "_blank",
									rel: "noreferrer",
									children: [t("Official authority"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "size-3.5",
										"aria-hidden": true
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: t("Frameworks summarised from official sources in a reference dataset. National practice changes; confirm current requirements with the relevant authority or a local professional.") })]
				})]
			})
		]
	});
}
//#endregion
export { International as component };
