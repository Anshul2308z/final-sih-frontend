import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { i as TooltipContent, l as useI18n, o as TooltipTrigger, r as Tooltip, s as cn } from "./jurisdiction-VDSQbrOm.mjs";
import { A as ExternalLink, R as CircleAlert, S as Info, i as Sparkles, o as ShieldCheck, r as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-BxUwtfld.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sourceRegistry = [
	{
		id: "tkdl",
		name: "Traditional Knowledge Digital Library (TKDL)",
		authority: "CSIR & Ministry of Ayush",
		jurisdiction: "India",
		type: "Traditional knowledge",
		url: "https://www.tkdl.res.in/",
		lastVerified: "2026-08-28",
		dataVersion: "snapshot 2026.08"
	},
	{
		id: "ipindia",
		name: "Intellectual Property India",
		authority: "Office of the CGPDTM",
		jurisdiction: "India",
		type: "Patent office",
		url: "https://ipindia.gov.in/",
		lastVerified: "2026-09-02",
		dataVersion: "fee schedule 2024 rev."
	},
	{
		id: "wipo",
		name: "WIPO PATENTSCOPE",
		authority: "World Intellectual Property Organization",
		jurisdiction: "International",
		type: "Treaty body",
		url: "https://patentscope.wipo.int/",
		lastVerified: "2026-09-01",
		dataVersion: "weekly index"
	},
	{
		id: "epo",
		name: "Espacenet",
		authority: "European Patent Office",
		jurisdiction: "Europe / EPO",
		type: "Patent office",
		url: "https://worldwide.espacenet.com/",
		lastVerified: "2026-08-30",
		dataVersion: "DOCDB 2026.34"
	},
	{
		id: "uspto",
		name: "Patent Full-Text Search",
		authority: "United States Patent and Trademark Office",
		jurisdiction: "United States",
		type: "Patent office",
		url: "https://ppubs.uspto.gov/",
		lastVerified: "2026-08-27",
		dataVersion: "2026-08 index"
	},
	{
		id: "ayush",
		name: "Ministry of Ayush",
		authority: "Government of India",
		jurisdiction: "India",
		type: "Regulator",
		url: "https://ayush.gov.in/",
		lastVerified: "2026-08-20",
		dataVersion: "circulars to Aug 2026"
	},
	{
		id: "nba",
		name: "National Biodiversity Authority",
		authority: "Government of India",
		jurisdiction: "India",
		type: "Regulator",
		url: "https://nbaindia.org/",
		lastVerified: "2026-08-19",
		dataVersion: "ABS guidelines 2014"
	},
	{
		id: "nagoya",
		name: "Nagoya Protocol on Access and Benefit-sharing",
		authority: "Convention on Biological Diversity",
		jurisdiction: "International",
		type: "Law",
		url: "https://www.cbd.int/abs/",
		lastVerified: "2026-07-30",
		dataVersion: "text as in force"
	},
	{
		id: "patentsact",
		name: "The Patents Act, 1970 (as amended)",
		authority: "Government of India",
		jurisdiction: "India",
		type: "Law",
		url: "https://ipindia.gov.in/patents.htm",
		lastVerified: "2026-08-12",
		dataVersion: "consolidated text"
	}
];
var sourceById = (id) => sourceRegistry.find((s) => s.id === id);
var patentRecords = [
	{
		id: "p1",
		number: "IN 384512",
		title: "Standardised Withania somnifera root extract composition for stress modulation",
		applicant: "Deccan Phyto Research Pvt Ltd",
		jurisdiction: "India",
		jurisdictionGroup: "India",
		published: "2024-03-15",
		similarity: 91,
		status: "Granted",
		risk: "risk",
		whyRelevant: "Claims a withanolide-standardised root extract with an adaptogenic indication that overlaps the described formulation concept.",
		concepts: [
			"Withanolide standardisation",
			"Adaptogen",
			"Root extract",
			"Stress indication"
		],
		sources: ["ipindia", "patentsact"],
		plants: ["Ashwagandha"],
		family: "Solanaceae",
		indication: "Stress / anxiety",
		ipType: "Patent",
		evidenceLevel: "Official record"
	},
	{
		id: "p2",
		number: "WO 2023/154872",
		title: "Synergistic botanical composition comprising Withania and Bacopa for cognitive support",
		applicant: "Nordic Botanicals AS",
		jurisdiction: "PCT / WIPO",
		jurisdictionGroup: "International",
		published: "2023-08-17",
		similarity: 84,
		status: "Published",
		risk: "review",
		whyRelevant: "Combination claim covering Withania with Bacopa monnieri; designation list includes EP, US and IN national phases.",
		concepts: [
			"Combination claim",
			"Cognitive support",
			"PCT designation"
		],
		sources: ["wipo"],
		plants: ["Ashwagandha", "Brahmi"],
		family: "Solanaceae",
		indication: "Cognition",
		ipType: "PCT application",
		evidenceLevel: "Official record"
	},
	{
		id: "p3",
		number: "TKDL/AY/1284",
		title: "Ashwagandha churna preparation described in classical Ayurvedic literature",
		applicant: "Prior-art record (no applicant)",
		jurisdiction: "India",
		jurisdictionGroup: "India",
		published: "Classical text reference",
		similarity: 88,
		status: "Published",
		risk: "verified",
		whyRelevant: "Documented classical preparation and indication. Potential prior-art signal for novelty discussions.",
		concepts: [
			"Classical preparation",
			"Churna",
			"Documented traditional use"
		],
		sources: ["tkdl"],
		plants: ["Ashwagandha"],
		family: "Solanaceae",
		indication: "Rasayana / vitality",
		ipType: "Patent",
		evidenceLevel: "Official record"
	},
	{
		id: "p4",
		number: "US 11,504,398",
		title: "Curcuminoid-neem composition with enhanced dermal bioavailability",
		applicant: "Meridian Skin Sciences Inc.",
		jurisdiction: "United States",
		jurisdictionGroup: "International",
		published: "2022-11-22",
		similarity: 79,
		status: "Granted",
		risk: "review",
		whyRelevant: "Delivery-system claims around a turmeric–neem pairing for inflammatory skin conditions.",
		concepts: [
			"Bioavailability enhancer",
			"Topical delivery",
			"Curcuminoid"
		],
		sources: ["uspto"],
		plants: ["Turmeric", "Neem"],
		family: "Zingiberaceae",
		indication: "Skin inflammation",
		ipType: "Patent",
		evidenceLevel: "Official record"
	},
	{
		id: "p5",
		number: "EP 3 921 044 B1",
		title: "Process for preparing Emblica officinalis polyphenol concentrate",
		applicant: "Helvetia Nutra GmbH",
		jurisdiction: "Europe / EPO",
		jurisdictionGroup: "International",
		published: "2023-02-08",
		similarity: 72,
		status: "Granted",
		risk: "review",
		whyRelevant: "Process claims on an Amla polyphenol concentrate relevant to extraction routes.",
		concepts: [
			"Process claim",
			"Polyphenol concentrate",
			"Extraction"
		],
		sources: ["epo"],
		plants: ["Amla"],
		family: "Phyllanthaceae",
		indication: "Antioxidant support",
		ipType: "Patent",
		evidenceLevel: "Official record"
	},
	{
		id: "p6",
		number: "IN 202641008812 A",
		title: "Giloy–Tulsi decoction granule with improved shelf stability",
		applicant: "Sattva Ayur Labs LLP",
		jurisdiction: "India",
		jurisdictionGroup: "India",
		published: "2026-04-03",
		similarity: 68,
		status: "Examination",
		risk: "info",
		whyRelevant: "Formulation-stability claims on a classical decoction converted to granules.",
		concepts: [
			"Granulation",
			"Shelf stability",
			"Kadha"
		],
		sources: ["ipindia"],
		plants: ["Giloy", "Tulsi"],
		family: "Menispermaceae",
		indication: "Immunity support",
		ipType: "Patent",
		evidenceLevel: "Official record"
	},
	{
		id: "p7",
		number: "WO 2021/099318",
		title: "Glycyrrhiza glabra extract for mucosal soothing compositions",
		applicant: "Kyoto Herbal Institute",
		jurisdiction: "PCT / WIPO",
		jurisdictionGroup: "International",
		published: "2021-05-27",
		similarity: 64,
		status: "Withdrawn",
		risk: "info",
		whyRelevant: "Withdrawn application; useful as a documented disclosure in the same concept space.",
		concepts: [
			"Mucosal soothing",
			"Glycyrrhizin",
			"Withdrawn disclosure"
		],
		sources: ["wipo"],
		plants: ["Mulethi"],
		family: "Fabaceae",
		indication: "Throat / mucosa",
		ipType: "PCT application",
		evidenceLevel: "Secondary index"
	},
	{
		id: "p8",
		number: "TKDL/AY/3390",
		title: "Haridra–Nimba lepa for skin disorders in classical formularies",
		applicant: "Prior-art record (no applicant)",
		jurisdiction: "India",
		jurisdictionGroup: "India",
		published: "Classical text reference",
		similarity: 86,
		status: "Published",
		risk: "verified",
		whyRelevant: "Documented topical preparation combining turmeric and neem for skin conditions.",
		concepts: [
			"Lepa",
			"Topical",
			"Documented traditional use"
		],
		sources: ["tkdl"],
		plants: ["Turmeric", "Neem"],
		family: "Zingiberaceae",
		indication: "Skin inflammation",
		ipType: "Patent",
		evidenceLevel: "Official record"
	}
];
var plants = [
	{
		id: "ashwagandha",
		common: "Ashwagandha",
		botanical: "Withania somnifera",
		genus: "Withania",
		family: "Solanaceae",
		parts: ["Root", "Leaf"],
		traditionalUse: "Rasayana and balya use documented across classical Ayurvedic formularies.",
		role: "Primary adaptogenic ingredient",
		tkdlRecords: 214,
		evidenceLevel: "High",
		relatedIds: ["brahmi", "giloy"],
		similarity: 100,
		whyRanked: "Query anchor plant."
	},
	{
		id: "amla",
		common: "Amla",
		botanical: "Phyllanthus emblica",
		genus: "Phyllanthus",
		family: "Phyllanthaceae",
		parts: ["Fruit"],
		traditionalUse: "Rasayana ingredient, widely documented in classical triphala preparations.",
		role: "Antioxidant / rasayana base",
		tkdlRecords: 331,
		evidenceLevel: "High",
		relatedIds: ["giloy", "mulethi"],
		similarity: 61,
		whyRanked: "Shared rasayana classification and heavy TKDL documentation overlap."
	},
	{
		id: "turmeric",
		common: "Turmeric",
		botanical: "Curcuma longa",
		genus: "Curcuma",
		family: "Zingiberaceae",
		parts: ["Rhizome"],
		traditionalUse: "Documented in lepa and internal preparations for inflammatory conditions.",
		role: "Anti-inflammatory principal",
		tkdlRecords: 402,
		evidenceLevel: "High",
		relatedIds: ["neem", "mulethi"],
		similarity: 58,
		whyRanked: "Frequently co-documented with neem in topical classical formulations."
	},
	{
		id: "mulethi",
		common: "Mulethi",
		botanical: "Glycyrrhiza glabra",
		genus: "Glycyrrhiza",
		family: "Fabaceae",
		parts: ["Root"],
		traditionalUse: "Documented for throat and mucosal complaints; common anupana ingredient.",
		role: "Demulcent / synergist",
		tkdlRecords: 188,
		evidenceLevel: "High",
		relatedIds: ["tulsi", "amla"],
		similarity: 54,
		whyRanked: "Overlapping formulation role as a synergist in documented combinations."
	},
	{
		id: "brahmi",
		common: "Brahmi",
		botanical: "Bacopa monnieri",
		genus: "Bacopa",
		family: "Plantaginaceae",
		parts: ["Whole plant"],
		traditionalUse: "Medhya use for cognition documented in classical sources.",
		role: "Nootropic co-ingredient",
		tkdlRecords: 147,
		evidenceLevel: "High",
		relatedIds: ["ashwagandha"],
		similarity: 73,
		whyRanked: "Appears with Withania in multiple documented and claimed combinations for cognition."
	},
	{
		id: "neem",
		common: "Neem",
		botanical: "Azadirachta indica",
		genus: "Azadirachta",
		family: "Meliaceae",
		parts: [
			"Leaf",
			"Bark",
			"Seed"
		],
		traditionalUse: "Documented kushtha-related and antimicrobial topical uses.",
		role: "Antimicrobial co-ingredient",
		tkdlRecords: 356,
		evidenceLevel: "High",
		relatedIds: ["turmeric", "tulsi"],
		similarity: 57,
		whyRanked: "Strong co-occurrence with turmeric in documented dermatological preparations."
	},
	{
		id: "giloy",
		common: "Giloy",
		botanical: "Tinospora cordifolia",
		genus: "Tinospora",
		family: "Menispermaceae",
		parts: ["Stem"],
		traditionalUse: "Documented rasayana and jvara-related use.",
		role: "Immunomodulatory co-ingredient",
		tkdlRecords: 263,
		evidenceLevel: "High",
		relatedIds: ["tulsi", "amla"],
		similarity: 66,
		whyRanked: "Shared rasayana role and frequent substitution discussion in documented sources."
	},
	{
		id: "tulsi",
		common: "Tulsi",
		botanical: "Ocimum tenuiflorum",
		genus: "Ocimum",
		family: "Lamiaceae",
		parts: ["Leaf"],
		traditionalUse: "Documented respiratory and jvara-related use.",
		role: "Respiratory support co-ingredient",
		tkdlRecords: 241,
		evidenceLevel: "High",
		relatedIds: ["giloy", "mulethi"],
		similarity: 49,
		whyRanked: "Co-documented in decoction families with Giloy."
	},
	{
		id: "betel",
		common: "Betel",
		botanical: "Piper betle",
		genus: "Piper",
		family: "Piperaceae",
		parts: ["Leaf"],
		traditionalUse: "Documented digestive and topical applications.",
		role: "Carrier / bioenhancer discussion",
		tkdlRecords: 96,
		evidenceLevel: "Moderate",
		relatedIds: ["turmeric"],
		similarity: 38,
		whyRanked: "Piperaceae bioenhancer literature overlaps extraction-route claims."
	},
	{
		id: "aloe",
		common: "Aloe vera",
		botanical: "Aloe barbadensis",
		genus: "Aloe",
		family: "Asphodelaceae",
		parts: ["Leaf gel"],
		traditionalUse: "Documented use in topical and digestive preparations (Kumari).",
		role: "Base / vehicle",
		tkdlRecords: 173,
		evidenceLevel: "High",
		relatedIds: ["neem", "turmeric"],
		similarity: 44,
		whyRanked: "Common vehicle in documented topical formulations."
	}
];
var countries = [
	{
		id: "in",
		name: "India",
		flag: "🇮🇳",
		authority: "Office of the CGPDTM (IP India)",
		authorityUrl: "https://ipindia.gov.in/",
		patent: "The Patents Act, 1970. Section 3(p) addresses traditional knowledge subject matter.",
		trademark: "Trade Marks Act, 1999.",
		traditionalKnowledge: "TKDL used in defensive protection; access agreements with several offices.",
		abs: "Biological Diversity Act, 2002 with National Biodiversity Authority approvals.",
		disclosure: "Source-of-biological-material disclosure required in the specification.",
		x: 68,
		y: 52
	},
	{
		id: "us",
		name: "United States",
		flag: "🇺🇸",
		authority: "USPTO",
		authorityUrl: "https://www.uspto.gov/",
		patent: "35 U.S.C.; prior art includes printed publications worldwide.",
		trademark: "Lanham Act; use-based and intent-to-use filings.",
		traditionalKnowledge: "No sui generis TK statute; documented TK operates as prior art.",
		abs: "Not a party to the Nagoya Protocol.",
		disclosure: "No general genetic-resource disclosure requirement.",
		x: 20,
		y: 40
	},
	{
		id: "ep",
		name: "Germany / EPO",
		flag: "🇪🇺",
		authority: "European Patent Office",
		authorityUrl: "https://www.epo.org/",
		patent: "European Patent Convention; absolute novelty standard.",
		trademark: "EUIPO for EU trade marks.",
		traditionalKnowledge: "TKDL access agreement supports examiner searching.",
		abs: "EU Regulation 511/2014 implements the Nagoya Protocol.",
		disclosure: "Rule 26(2) EPC on biological material deposit; EU due-diligence declarations.",
		x: 48,
		y: 31
	},
	{
		id: "gb",
		name: "United Kingdom",
		flag: "🇬🇧",
		authority: "UK Intellectual Property Office",
		authorityUrl: "https://www.gov.uk/government/organisations/intellectual-property-office",
		patent: "Patents Act 1977.",
		trademark: "Trade Marks Act 1994.",
		traditionalKnowledge: "TKDL access agreement in place.",
		abs: "Nagoya Protocol compliance regulations apply.",
		disclosure: "Deposit requirements for biological material.",
		x: 45,
		y: 27
	},
	{
		id: "cn",
		name: "China",
		flag: "🇨🇳",
		authority: "CNIPA",
		authorityUrl: "https://english.cnipa.gov.cn/",
		patent: "Patent Law of the PRC; provisions on genetic resources.",
		trademark: "Trademark Law of the PRC; first-to-file.",
		traditionalKnowledge: "Traditional medicine documentation used in examination.",
		abs: "Party to the Nagoya Protocol.",
		disclosure: "Disclosure of origin of genetic resources required.",
		x: 78,
		y: 38
	},
	{
		id: "jp",
		name: "Japan",
		flag: "🇯🇵",
		authority: "Japan Patent Office",
		authorityUrl: "https://www.jpo.go.jp/",
		patent: "Japanese Patent Act.",
		trademark: "Japanese Trademark Act.",
		traditionalKnowledge: "TKDL access agreement in place.",
		abs: "Party to the Nagoya Protocol; national guidelines apply.",
		disclosure: "No general disclosure-of-origin mandate.",
		x: 87,
		y: 38
	},
	{
		id: "au",
		name: "Australia",
		flag: "🇦🇺",
		authority: "IP Australia",
		authorityUrl: "https://www.ipaustralia.gov.au/",
		patent: "Patents Act 1990.",
		trademark: "Trade Marks Act 1995.",
		traditionalKnowledge: "Indigenous Knowledge panel and consultation practices.",
		abs: "Party to the Nagoya Protocol; state and territory access laws.",
		disclosure: "Source declarations under environment legislation in some jurisdictions.",
		x: 85,
		y: 74
	},
	{
		id: "ca",
		name: "Canada",
		flag: "🇨🇦",
		authority: "CIPO",
		authorityUrl: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en",
		patent: "Patent Act (Canada).",
		trademark: "Trademarks Act.",
		traditionalKnowledge: "Indigenous knowledge considerations in examination practice.",
		abs: "Signatory to the Nagoya Protocol.",
		disclosure: "No general disclosure-of-origin mandate.",
		x: 19,
		y: 27
	},
	{
		id: "br",
		name: "Brazil",
		flag: "🇧🇷",
		authority: "INPI Brazil",
		authorityUrl: "https://www.gov.br/inpi/",
		patent: "Industrial Property Law 9.279/1996.",
		trademark: "Same statute; national registration.",
		traditionalKnowledge: "Law 13.123/2015 covers associated traditional knowledge.",
		abs: "SisGen registration for access and benefit-sharing.",
		disclosure: "Access registration must be declared in patent applications.",
		x: 31,
		y: 66
	},
	{
		id: "ec",
		name: "Ecuador",
		flag: "🇪🇨",
		authority: "SENADI",
		authorityUrl: "https://www.derechosintelectuales.gob.ec/",
		patent: "Andean Community Decision 486.",
		trademark: "Decision 486 regional framework.",
		traditionalKnowledge: "Decision 391 covers access to genetic resources and associated TK.",
		abs: "Party to the Nagoya Protocol.",
		disclosure: "Disclosure of origin and access contract required.",
		x: 25,
		y: 60
	}
];
var historyItems = [
	{
		id: "h1",
		kind: "Analysis",
		title: "Ashwagandha stress formulation — India & EU protectability",
		date: "2026-09-08",
		jurisdiction: "India + International",
		confidence: 88,
		status: "Complete"
	},
	{
		id: "h2",
		kind: "Report",
		title: "IP intelligence report — Haridra–Nimba topical",
		date: "2026-09-06",
		jurisdiction: "India",
		confidence: 81,
		status: "Complete"
	},
	{
		id: "h3",
		kind: "Patent search",
		title: "Semantic search — turmeric + neem skin inflammation",
		date: "2026-09-05",
		jurisdiction: "Both",
		confidence: 76,
		status: "Complete"
	},
	{
		id: "h4",
		kind: "Cost estimate",
		title: "Startup patent filing + PCT designation plan",
		date: "2026-09-03",
		jurisdiction: "India + PCT",
		confidence: 92,
		status: "Draft"
	},
	{
		id: "h5",
		kind: "Expert request",
		title: "ABS documentation review — wild-collected Giloy",
		date: "2026-09-01",
		jurisdiction: "India",
		confidence: 54,
		status: "Awaiting expert"
	},
	{
		id: "h6",
		kind: "Analysis",
		title: "Amla polyphenol concentrate — freedom-to-operate questions",
		date: "2026-08-28",
		jurisdiction: "International",
		confidence: 69,
		status: "In review"
	}
];
var DISCLAIMER = "IP-SAKTI Sahayak provides information and decision support, not legal advice.";
/** Source registry adapter. Official URLs and verification metadata live in the data layer. */
function listSources() {
	return sourceRegistry;
}
function getSourceById(id) {
	return sourceById(id);
}
function Eyebrow({ children, className }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-eyebrow", className),
		children
	});
}
function PageHeader({ eyebrow, title, subtitle, actions, i18nPrefix }) {
	const { t } = useI18n();
	const translatedEyebrow = i18nPrefix ? t(`${i18nPrefix}.eyebrow`) : eyebrow;
	const translatedTitle = i18nPrefix ? t(`${i18nPrefix}.title`) : title;
	const translatedSubtitle = i18nPrefix && subtitle ? t(`${i18nPrefix}.subtitle`) : subtitle;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "workspace-page-header animate-rise border-b border-border pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-4 h-1 w-12 rounded-full bg-saffron" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: translatedEyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]",
						children: translatedTitle
					}), translatedSubtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: translatedSubtitle
					}) : null]
				}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex shrink-0 flex-wrap gap-2",
					children: actions
				}) : null]
			})
		]
	});
}
function WorkspaceIdentity({ index, code, label, title, signal, metric }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "module-stage animate-rise",
		"aria-label": `${label} workspace`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "module-stage-orbit module-stage-orbit-a" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "module-stage-orbit module-stage-orbit-b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "module-stage-lines" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "module-stage-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "module-stage-index",
					children: index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "module-stage-code",
						children: code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "module-stage-label",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "module-stage-title",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "module-stage-signal",
						children: signal
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "module-stage-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "module-stage-live",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), t("LIVE WORKSPACE")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: metric }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("evidence-first workflow") })
				]
			})
		]
	});
}
function SectionTitle({ title, hint, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-baseline justify-between gap-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl text-foreground sm:text-2xl",
			children: title
		}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted-foreground",
			children: hint
		}) : null]
	});
}
function Panel({ children, className, as: As = "section" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		className: cn("surface-panel rounded-2xl", className),
		children
	});
}
var riskCopy = {
	verified: {
		label: "Documented evidence",
		icon: ShieldCheck,
		className: "border-verified/40 bg-verified/10 text-verified"
	},
	review: {
		label: "Review required",
		icon: TriangleAlert,
		className: "border-review/40 bg-review/10 text-review"
	},
	risk: {
		label: "Potential prior-art signal",
		icon: CircleAlert,
		className: "border-risk/40 bg-risk/10 text-risk"
	},
	info: {
		label: "Informational",
		icon: Info,
		className: "border-info/40 bg-info/10 text-info"
	}
};
function RiskChip({ level, label, className }) {
	const { t } = useTranslation();
	const cfg = riskCopy[level];
	const Icon = cfg.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium", cfg.className, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-3.5",
			"aria-hidden": true
		}), label ? t(label) : t(cfg.label)]
	});
}
function AnalysisChip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full border border-analysis/40 bg-analysis/10 px-2.5 py-1 text-[0.7rem] font-medium text-analysis",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			className: "size-3.5",
			"aria-hidden": true
		}), children]
	});
}
function JurisdictionPill({ jurisdiction, className }) {
	const isIndia = jurisdiction.toLowerCase().includes("india");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[0.7rem] tracking-tight", isIndia ? "border-saffron/40 bg-saffron/10 text-saffron" : "border-info/40 bg-info/10 text-info", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			children: isIndia ? "🇮🇳" : "🌍"
		}), jurisdiction]
	});
}
function EvidenceChip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center rounded-md border border-border bg-accent/50 px-2 py-0.5 text-[0.7rem] text-muted-foreground",
		children
	});
}
function SourceBadge({ id }) {
	const { t } = useTranslation();
	const source = getSourceById(id);
	if (!source) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: source.url,
			target: "_blank",
			rel: "noreferrer",
			className: "inline-flex items-center gap-1.5 rounded-md border border-info/30 bg-info/10 px-2 py-0.5 text-[0.7rem] font-medium text-info transition-colors hover:border-info/60 hover:bg-info/15",
			children: [t(source.name.split("(")[0]?.trim() || ""), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
				className: "size-3",
				"aria-hidden": true
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
		className: "max-w-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: t(source.authority)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-muted-foreground",
			children: [
				t(source.jurisdiction),
				" · ",
				t(source.type),
				" · ",
				t("last verified"),
				" ",
				source.lastVerified
			]
		})]
	})] });
}
function useInView() {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || seen) return;
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)), { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, [seen]);
	return {
		ref,
		seen
	};
}
function ConfidenceMeter({ value, label = "Confidence", className }) {
	const { ref, seen } = useInView();
	const tone = value >= 80 ? "bg-verified" : value >= 60 ? "bg-review" : "bg-risk";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-lg text-foreground",
				children: [value, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full transition-[width] duration-1000 ease-out", tone),
				style: { width: seen ? `${value}%` : "0%" }
			})
		})]
	});
}
function Counter({ to, suffix = "", className }) {
	const { ref, seen } = useInView();
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!seen) return;
		let frame = 0;
		const total = 42;
		const id = window.setInterval(() => {
			frame += 1;
			const p = 1 - Math.pow(1 - frame / total, 3);
			setN(Math.round(to * p));
			if (frame >= total) window.clearInterval(id);
		}, 16);
		return () => window.clearInterval(id);
	}, [seen, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: cn("font-mono tabular-nums", className),
		children: [n.toLocaleString("en-IN"), suffix]
	});
}
function StatTile({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dashboard-stat-tile rounded-xl border border-border bg-card p-4 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-2xl text-foreground",
				children: value
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: note
			}) : null
		]
	});
}
function Disclaimer({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start gap-2 rounded-lg border border-review/30 bg-review/5 p-3 text-xs leading-relaxed text-review",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			className: "mt-0.5 size-3.5 shrink-0",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function EmptyState({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hairline-grid rounded-xl border border-dashed border-border-strong px-6 py-14 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground",
				children: body
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex justify-center",
				children: action
			}) : null
		]
	});
}
//#endregion
export { plants as S, countries as _, Disclaimer as a, listSources as b, Eyebrow as c, Panel as d, RiskChip as f, WorkspaceIdentity as g, StatTile as h, DISCLAIMER as i, JurisdictionPill as l, SourceBadge as m, ConfidenceMeter as n, EmptyState as o, SectionTitle as p, Counter as r, EvidenceChip as s, AnalysisChip as t, PageHeader as u, getSourceById as v, patentRecords as x, historyItems as y };
