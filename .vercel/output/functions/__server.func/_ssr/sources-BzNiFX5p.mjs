import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { s as cn } from "./jurisdiction-VDSQbrOm.mjs";
import { A as ExternalLink, N as Database, o as ShieldCheck, p as RefreshCcw } from "../_libs/lucide-react.mjs";
import { a as Disclaimer, b as listSources, c as Eyebrow, d as Panel, g as WorkspaceIdentity, h as StatTile, i as DISCLAIMER, l as JurisdictionPill, p as SectionTitle, u as PageHeader } from "./primitives-BxUwtfld.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function SourcesPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-10 workspace-page workspace-page-sources",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceIdentity, {
				index: "09",
				code: "SR-09",
				label: t("SOURCE REGISTRY"),
				title: t("Every claim needs a traceable authority"),
				signal: "Every claim needs a traceable authority · VERIFY / CITE",
				metric: "VERIFY / CITE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t("Source transparency"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t("Every answer,"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-saffron",
						children: t("anchored to an authority.")
					}),
					t("i18nPrefix=\"pg.sources\"")
				] }),
				subtitle: t("IP-SAKTI never answers from model memory alone. Each claim cites an official registry, statute, or treaty body listed here — with its last verification date.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("Official sources"),
						value: listSources().length,
						note: t("Across 3 jurisdiction tiers")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("Verification cadence"),
						value: "Weekly",
						note: t("Fee schedules & registries re-checked")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("Citations in answers"),
						value: "100%",
						note: t("Unsourced statements are flagged")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border p-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						title: t("Registered sources"),
						hint: `${listSources().length} authorities`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "gap-1.5 border-verified/40 text-verified",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, {
							className: "size-3",
							"aria-hidden": true
						}), t("Synced Sep 2026")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: listSources().map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: s.url,
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-saffron",
									children: [s.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "size-3.5 text-muted-foreground transition-colors group-hover:text-saffron",
										"aria-hidden": true
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionPill, { jurisdiction: s.jurisdiction })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: s.authority
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 flex-wrap items-center gap-x-6 gap-y-1 text-xs text-muted-foreground sm:flex-col sm:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-3.5 text-verified",
										"aria-hidden": true
									}),
									t("Verified"),
									s.lastVerified
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
									className: "size-3.5",
									"aria-hidden": true
								}), s.dataVersion]
							})]
						})]
					}, s.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("How verification works") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("Each source is checked against its official publication on a weekly cycle.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("Fee schedules and statutory texts are diffed; changes invalidate cached answers.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("Answers display the verification date of the oldest source they rely on.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								t("When a source cannot be reached, the interface marks dependent claims"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-review",
									children: "“Review required”"
								}),
								t("instead of guessing.")
							] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t("Coverage boundaries") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: t("Coverage currently spans India (TKDL, CGPDTM, Ayush, NBA) and the principal\n            international systems (WIPO, EPO, USPTO, Nagoya Protocol). National-phase detail for\n            other jurisdictions is summarised from WIPO aggregates and may lag local amendments.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: DISCLAIMER })
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { SourcesPage as component };
