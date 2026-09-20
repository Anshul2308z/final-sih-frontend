import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useTranslation, r as initReactI18next, t as I18nextProvider } from "../_libs/react-i18next.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as TooltipProvider, c as languages, l as useI18n, n as JurisdictionSwitch, s as cn, t as JurisdictionProvider, u as useJurisdiction } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { D as Command, F as Bot, G as House, I as Bell, J as CircleCheck, N as Check, P as Calculator, S as FileText, _ as Languages, b as FlaskConical, c as ScanSearch, d as Network, g as Leaf, h as LifeBuoy, i as ShieldCheck, j as ChevronRight, k as Circle, p as Menu, q as Earth, s as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$12 } from "./prior-art-BxxgRCp7.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as instance } from "../_libs/i18next.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { i as Trigger$1, n as Portal, r as Root2$1, t as Content2$1 } from "../_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CRROG7gH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
instance.use(initReactI18next).init({
	resources: {
		en: { translation: {
			"Every claim needs a traceable authority": "Every claim needs a traceable authority",
			"anchored to an authority.": "anchored to an authority.",
			"Registered sources": "Registered sources",
			"<0>...</0>Synced Sep 2026": "<0>...</0>Synced Sep 2026",
			"<0>...</0>Verified{{var1}}": "<0>...</0>Verified{{var1}}",
			"How verification works": "How verification works",
			"Each source is checked against its official publication on a weekly cycle.": "Each source is checked against its official publication on a weekly cycle.",
			"Fee schedules and statutory texts are diffed; changes invalidate cached answers.": "Fee schedules and statutory texts are diffed; changes invalidate cached answers.",
			"Answers display the verification date of the oldest source they rely on.": "Answers display the verification date of the oldest source they rely on.",
			"When a source cannot be reached, the interface marks dependent claims{{var0}} <1>...</1>instead of guessing.": "When a source cannot be reached, the interface marks dependent claims{{var0}} <1>...</1>instead of guessing.",
			"Coverage boundaries": "Coverage boundaries",
			"Package findings into a decision-ready report": "Package findings into a decision-ready report",
			"Reports & history": "Reports & history",
			"<0>...</0>Preview": "<0>...</0>Preview",
			"<0>...</0>Download PDF": "<0>...</0>Download PDF",
			"<0>...</0>Share": "<0>...</0>Share",
			"Generate report": "Generate report",
			"Recent activity": "Recent activity",
			"Generate IP Intelligence Report": "Generate IP Intelligence Report",
			wipo: "wipo",
			"Report confidence": "Report confidence",
			"15 sections": "15 sections",
			"5 official sources": "5 official sources",
			"Preliminary assessment": "Preliminary assessment",
			"Reports summarise retrieved evidence. They are not legal opinions, freedom-to-operate clearances or regulatory approvals.": "Reports summarise retrieved evidence. They are not legal opinions, freedom-to-operate clearances or regulatory approvals.",
			Item: "Item",
			Type: "Type",
			Date: "Date",
			Jurisdiction: "Jurisdiction",
			Confidence: "Confidence",
			Status: "Status",
			"{{var0}}%": "{{var0}}%",
			"Connect claims to evidence": "Connect claims to evidence",
			"Prior-art trace": "Prior-art trace",
			"No prior art found": "No prior art found",
			"Prior art evidence graph": "Prior art evidence graph",
			"Graph edges show documented relationships in the reference dataset. They do not assert any legal conclusion.": "Graph edges show documented relationships in the reference dataset. They do not assert any legal conclusion.",
			"Evidence node": "Evidence node",
			"User submission": "User submission",
			"Not applicable": "Not applicable",
			"Open official source<0>...</0>": "Open official source<0>...</0>",
			"Trace summary": "Trace summary",
			"· 2 ingredients detected from the described formulation.": "· 2 ingredients detected from the described formulation.",
			"· 2 documented traditional knowledge records located.": "· 2 documented traditional knowledge records located.",
			"· 1 granted Indian claim in the same concept space.": "· 1 granted Indian claim in the same concept space.",
			"· 2 international records requiring review.": "· 2 international records requiring review.",
			"Further verification required": "Further verification required",
			"Documented prior art does not automatically invalidate any patent. Invalidity and infringement questions require formal legal analysis by a qualified professional.": "Documented prior art does not automatically invalidate any patent. Invalidity and infringement questions require formal legal analysis by a qualified professional.",
			"{{var0}}· published{{var1}}": "{{var0}}· published{{var1}}",
			"Why relevant": "Why relevant",
			"Conceptual similarity": "Conceptual similarity",
			"Retrieval score — not a legal probability.": "Retrieval score — not a legal probability.",
			Concepts: "Concepts",
			Sources: "Sources",
			"Search the prior landscape": "Search the prior landscape",
			"Patent Intelligence": "Patent Intelligence",
			"Describe your invention or formulation in your own words": "Describe your invention or formulation in your own words",
			"Describe your invention or formulation in your own words...": "Describe your invention or formulation in your own words...",
			"{{var0}}Search": "{{var0}}Search",
			"Try:": "Try:",
			India: "India",
			International: "International",
			Both: "Both",
			"Search type": "Search type",
			"rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground": "rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground",
			"rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground": "rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
			Plant: "Plant",
			"All plants": "All plants",
			"<0>...</0>Sources": "<0>...</0>Sources",
			"Retrieving records…": "Retrieving records…",
			"{{var0}}retrieval ·{{var1}}· sorted by conceptual similarity": "{{var0}}retrieval ·{{var1}}· sorted by conceptual similarity",
			"No records match these filters": "No records match these filters",
			"Reset filters": "Reset filters",
			"Reading similarity": "Reading similarity",
			"A score such as<0>...</0>describes how closely a record matches your described concept in retrieval space. It is not a measure of infringement, validity or grant probability.": "A score such as<0>...</0>describes how closely a record matches your described concept in retrieval space. It is not a measure of infringement, validity or grant probability.",
			"Filters applied": "Filters applied",
			"Jurisdiction ·{{var0}}": "Jurisdiction ·{{var0}}",
			"Plant ·{{var0}}": "Plant ·{{var0}}",
			"Status ·{{var0}}": "Status ·{{var0}}",
			"Sources ·{{var0}}of{{var1}}": "Sources ·{{var0}}of{{var1}}",
			"Evidence level · official records preferred": "Evidence level · official records preferred",
			"Results are preliminary signals from a reference dataset. Verify every record against the official register before relying on it.": "Results are preliminary signals from a reference dataset. Verify every record against the official register before relying on it.",
			"{{var0}}related candidates": "{{var0}}related candidates",
			"Map botanical knowledge into defensible evidence": "Map botanical knowledge into defensible evidence",
			"Traditional Knowledge Family Explorer": "Traditional Knowledge Family Explorer",
			"rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground": "rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground",
			"rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground": "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground",
			"Genus ·{{var0}}": "Genus ·{{var0}}",
			"Family ·{{var0}}": "Family ·{{var0}}",
			"Evidence level ·{{var0}}": "Evidence level ·{{var0}}",
			"Traditional use": "Traditional use",
			"Plant part": "Plant part",
			"Formulation role": "Formulation role",
			"Official source": "Official source",
			"Potential alternative candidates for further research": "Potential alternative candidates for further research",
			"Evidence ·{{var0}}": "Evidence ·{{var0}}",
			"Load more candidates": "Load more candidates",
			"Same family or genus does not establish medicinal equivalence or freedom from patent infringement. Candidates are research leads only, never substitutes.": "Same family or genus does not establish medicinal equivalence or freedom from patent infringement. Candidates are research leads only, never substitutes.",
			"Move from India to the world": "Move from India to the world",
			"International IP intelligence": "International IP intelligence",
			"Supported jurisdictions": "Supported jurisdictions",
			"<0>...</0>Global IP coverage": "<0>...</0>Global IP coverage",
			"Select a supported jurisdiction": "Select a supported jurisdiction",
			"{{var0}}profiles": "{{var0}}profiles",
			"Colourful world map showing IP-SAKTI supported jurisdictions": "Colourful world map showing IP-SAKTI supported jurisdictions",
			"<0>...</0>Supported": "<0>...</0>Supported",
			"<0>...</0>Selected": "<0>...</0>Selected",
			"<0>...</0>Network": "<0>...</0>Network",
			"<0>...</0>Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.": "<0>...</0>Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.",
			"Jurisdiction profile": "Jurisdiction profile",
			"Official authority<0>...</0>": "Official authority<0>...</0>",
			"Frameworks summarised from official sources in a reference dataset. National practice changes; confirm current requirements with the relevant authority or a local professional.": "Frameworks summarised from official sources in a reference dataset. National practice changes; confirm current requirements with the relevant authority or a local professional.",
			"<0>...</0>LIVE EVIDENCE ARCHITECTURE": "<0>...</0>LIVE EVIDENCE ARCHITECTURE",
			"From biological resource to a defensible research trail.": "From biological resource to a defensible research trail.",
			"<0>...</0>Source-linked": "<0>...</0>Source-linked",
			"Jurisdiction aware": "Jurisdiction aware",
			"Verification state retained": "Verification state retained",
			"<0>...</0>ILLUSTRATIVE ASSESSMENT": "<0>...</0>ILLUSTRATIVE ASSESSMENT",
			"FORMULATION SIGNAL": "FORMULATION SIGNAL",
			"Stress-support formulation": "Stress-support formulation",
			sources: "sources",
			"Documented traditional records and an overlapping granted claim are visible in the current reference set. This is a research signal, not a legal conclusion.": "Documented traditional records and an overlapping granted claim are visible in the current reference set. This is a research signal, not a legal conclusion.",
			"Inspect evidence trail<0>...</0>": "Inspect evidence trail<0>...</0>",
			"<0>...</0>INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE": "<0>...</0>INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE",
			"Protect Ayurveda.<0>...</0><1>...</1>": "Protect Ayurveda.<0>...</0><1>...</1>",
			"A structured intelligence workspace for medicinal plants, formulations, traditional knowledge, patents, prior art, ABS and international IP — with the evidence trail kept visible.": "A structured intelligence workspace for medicinal plants, formulations, traditional knowledge, patents, prior art, ABS and international IP — with the evidence trail kept visible.",
			"<0>...</0>Start an IP analysis<1>...</1>": "<0>...</0>Start an IP analysis<1>...</1>",
			"<0>...</0>Explore patent intelligence": "<0>...</0>Explore patent intelligence",
			"Answering for": "Answering for",
			"Evidence-first intelligence": "Evidence-first intelligence",
			"Source · jurisdiction · date · verification state stay visible.": "Source · jurisdiction · date · verification state stay visible.",
			"View source registry<0>...</0>": "View source registry<0>...</0>",
			"THE IP-SAKTI WORKSPACE": "THE IP-SAKTI WORKSPACE",
			"Six research paths.<0>...</0><1>...</1>": "Six research paths.<0>...</0><1>...</1>",
			"Move from an idea to a research-backed decision without jumping between disconnected tools.": "Move from an idea to a research-backed decision without jumping between disconnected tools.",
			"Open workspace<0>...</0>": "Open workspace<0>...</0>",
			"WHY IP-SAKTI": "WHY IP-SAKTI",
			"Evidence is not a footnote.<0>...</0><1>...</1>": "Evidence is not a footnote.<0>...</0><1>...</1>",
			"The platform is designed to keep research traceable: what was found, where it applies, which source supports it and when that source was verified.": "The platform is designed to keep research traceable: what was found, where it applies, which source supports it and when that source was verified.",
			"Explore the evidence layer<0>...</0>": "Explore the evidence layer<0>...</0>",
			"Source-linked findings": "Source-linked findings",
			"Every meaningful conclusion can point back to its reference set.": "Every meaningful conclusion can point back to its reference set.",
			"Jurisdiction-aware by design": "Jurisdiction-aware by design",
			"India and international requirements remain clearly separated.": "India and international requirements remain clearly separated.",
			"Human escalation built in": "Human escalation built in",
			"Uncertain cases can move from automated analysis to expert review.": "Uncertain cases can move from automated analysis to expert review.",
			"START WITH A QUESTION": "START WITH A QUESTION",
			"Leave with a research trail.": "Leave with a research trail.",
			"Ask about a formulation, traditional knowledge record, patent, prior art or international IP route.": "Ask about a formulation, traditional knowledge record, patent, prior art or international IP route.",
			"Classify the product before filing": "Classify the product before filing",
			"What are you developing?": "What are you developing?",
			"h-1 flex-1 rounded-full bg-saffron": "h-1 flex-1 rounded-full bg-saffron",
			"h-1 flex-1 rounded-full bg-muted": "h-1 flex-1 rounded-full bg-muted",
			"Step{{var0}}of{{var1}}": "Step{{var0}}of{{var1}}",
			"Describe the product in one line": "Describe the product in one line",
			"Standardised Ashwagandha capsule for stress support": "Standardised Ashwagandha capsule for stress support",
			"<0>...</0>Back": "<0>...</0>Back",
			Classify: "Classify",
			Next: "Next",
			"Answers recorded": "Answers recorded",
			"·{{var0}}": "·{{var0}}",
			"<0>...</0>Start again": "<0>...</0>Start again",
			"Preliminary classification": "Preliminary classification",
			"Reasoning summary": "Reasoning summary",
			"Applicable regulatory route": "Applicable regulatory route",
			"Relevant authorities": "Relevant authorities",
			"Potential IP implications": "Potential IP implications",
			"Preliminary classification — professional/regulatory verification may be required.": "Preliminary classification — professional/regulatory verification may be required.",
			"Continue to ABS check": "Continue to ABS check",
			"Request human review": "Request human review",
			"Possible categories": "Possible categories",
			"Classification affects both the regulatory route and the intellectual property strategy. This output is a preliminary assessment and does not constitute regulatory clearance.": "Classification affects both the regulatory route and the intellectual property strategy. This output is a preliminary assessment and does not constitute regulatory clearance.",
			"Know when evidence needs a professional": "Know when evidence needs a professional",
			"a professional begins.": "a professional begins.",
			"Full name": "Full name",
			"Dr. A. Researcher": "Dr. A. Researcher",
			"Work email": "Work email",
			"you@institution.in": "you@institution.in",
			Organisation: "Organisation",
			"Institute / company": "Institute / company",
			Topic: "Topic",
			"Select a topic": "Select a topic",
			"Describe the situation": "Describe the situation",
			"What are you deciding? Which jurisdictions, formulations, or patents are involved? Include any deadlines.": "What are you deciding? Which jurisdictions, formulations, or patents are involved? Include any deadlines.",
			"Attach analysis context (optional)": "Attach analysis context (optional)",
			"Assistant session — “Turmeric curcumin novelty”": "Assistant session — “Turmeric curcumin novelty”",
			"Evidence graph — 8 nodes": "Evidence graph — 8 nodes",
			"ABS risk assessment — Moderate": "ABS risk assessment — Moderate",
			"Sharing your in-app analysis lets the professional start from the cited evidence instead of a blank page.": "Sharing your in-app analysis lets the professional start from the cited evidence instead of a blank page.",
			"<0>...</0>Submit request": "<0>...</0>Submit request",
			"Typical response window: 2–3 working days (indicative).": "Typical response window: 2–3 working days (indicative).",
			"<0>...</0>Request captured in this local session. A production build would notify the expert network and open a tracked case.": "<0>...</0>Request captured in this local session. A production build would notify the expert network and open a tracked case.",
			"When to escalate": "When to escalate",
			"What stays automated": "What stays automated",
			"Turn filing strategy into a cost plan": "Turn filing strategy into a cost plan",
			"IP Cost Planner": "IP Cost Planner",
			Right: "Right",
			"rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground": "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
			"Applicant type (India)": "Applicant type (India)",
			"Filing mode": "Filing mode",
			"e-filing": "e-filing",
			"physical filing": "physical filing",
			"Number of claims ·{{var0}}": "Number of claims ·{{var0}}",
			"Specification pages ·{{var0}}": "Specification pages ·{{var0}}",
			"Early publication": "Early publication",
			"Request examination": "Request examination",
			"International country": "International country",
			Currency: "Currency",
			"Designations ·{{var0}}": "Designations ·{{var0}}",
			"🇮🇳 India": "🇮🇳 India",
			"🌍 International": "🌍 International",
			"Fees change. Always verify the current official fee schedule before filing. Government fees and professional estimates are separate figures and must not be added together as a single official cost.": "Fees change. Always verify the current official fee schedule before filing. Government fees and professional estimates are separate figures and must not be added together as a single official cost.",
			Amount: "Amount",
			Source: "Source",
			Effective: "Effective",
			"Last verified": "Last verified",
			"Save estimate": "Save estimate",
			"Export breakdown": "Export breakdown",
			"Ask → analyse → evidence": "Ask → analyse → evidence",
			"Ask about protection, classification or compliance": "Ask about protection, classification or compliance",
			"Your question": "Your question",
			"Describe your Ayurvedic product, formulation or IP concern...": "Describe your Ayurvedic product, formulation or IP concern...",
			"<0>...</0>Use example": "<0>...</0>Use example",
			"<0>...</0>Voice": "<0>...</0>Voice",
			"<0>...</0>Document": "<0>...</0>Document",
			"<0>...</0>Image": "<0>...</0>Image",
			"{{var0}}Analyse": "{{var0}}Analyse",
			"Processing route": "Processing route",
			"{{var0}}.{{var1}}": "{{var0}}.{{var1}}",
			"rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified": "rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified",
			"High-level processing stages only. Internal reasoning is not exposed.": "High-level processing stages only. Internal reasoning is not exposed.",
			"Executive answer": "Executive answer",
			"⚠️ AI analysis unavailable. Showing retrieved official records below.": "⚠️ AI analysis unavailable. Showing retrieved official records below.",
			"Applicable IP types": "Applicable IP types",
			"Key findings": "Key findings",
			"Recommended next steps": "Recommended next steps",
			"Sources (4 official records)": "Sources (4 official records)",
			"Evidence used": "Evidence used",
			Limitations: "Limitations",
			"· Similarity is a retrieval score, not a legal probability.": "· Similarity is a retrieval score, not a legal probability.",
			"· Documented prior art does not automatically invalidate any patent.": "· Documented prior art does not automatically invalidate any patent.",
			"· Records reflect a reference dataset snapshot and may not be current.": "· Records reflect a reference dataset snapshot and may not be current.",
			"· Claim scope interpretation requires a qualified professional.": "· Claim scope interpretation requires a qualified professional.",
			"Open evidence explorer<0>...</0>": "Open evidence explorer<0>...</0>",
			"No analysis yet": "No analysis yet",
			"Try the example question": "Try the example question",
			"Confidence & evidence": "Confidence & evidence",
			"Active source set": "Active source set",
			"Indian and international answer sets are never visually merged.": "Indian and international answer sets are never visually merged.",
			"IP-SAKTI Sahayak provides information and preliminary analysis. Human experts are required for legal advice. Never rely on this output as clearance to file, market or export.": "IP-SAKTI Sahayak provides information and preliminary analysis. Human experts are required for legal advice. Never rely on this output as clearance to file, market or export.",
			"Check biodiversity obligations early": "Check biodiversity obligations early",
			"Biodiversity & ABS Check": "Biodiversity & ABS Check",
			"Resource details": "Resource details",
			"Biological resource": "Biological resource",
			"Country of origin": "Country of origin",
			"Run ABS check": "Run ABS check",
			"ABS status": "ABS status",
			"Resource origin": "Resource origin",
			"{{var0}}·{{var1}}·{{var2}}": "{{var0}}·{{var1}}·{{var2}}",
			"Associated TK": "Associated TK",
			"Declared as used": "Declared as used",
			"Not declared": "Not declared",
			"Applicable jurisdiction": "Applicable jurisdiction",
			"India (NBA / SBB)": "India (NBA / SBB)",
			"Potential documentation": "Potential documentation",
			"Access approval, benefit-sharing agreement, source-of-material declaration in the patent specification.": "Access approval, benefit-sharing agreement, source-of-material declaration in the patent specification.",
			"Relevant legal framework": "Relevant legal framework",
			"This is not legal clearance. Further verification with the competent national authority is required before commercial use, filing or export.": "This is not legal clearance. Further verification with the competent national authority is required before commercial use, filing or export.",
			"Request human review of ABS documentation": "Request human review of ABS documentation",
			"What this check looks at": "What this check looks at",
			"· Whether the resource is wild-collected, cultivated or imported.": "· Whether the resource is wild-collected, cultivated or imported.",
			"· Whether associated traditional knowledge is involved.": "· Whether associated traditional knowledge is involved.",
			"· Whether commercial use, patenting or export is planned.": "· Whether commercial use, patenting or export is planned.",
			"· Which national framework and authority is likely to apply.": "· Which national framework and authority is likely to apply.",
			"ABS outcomes depend on facts that cannot be verified automatically, including collection records and community consent. No definitive legal clearance is given here.": "ABS outcomes depend on facts that cannot be verified automatically, including collection records and community consent. No definitive legal clearance is given here.",
			"Page not found": "Page not found",
			"The page you're looking for doesn't exist or has been moved.": "The page you're looking for doesn't exist or has been moved.",
			"Go home": "Go home",
			"This page didn't load": "This page didn't load",
			"Something went wrong on our end. You can try refreshing or head back home.": "Something went wrong on our end. You can try refreshing or head back home.",
			"Try again": "Try again",
			Sidebar: "Sidebar",
			"Displays the mobile sidebar.": "Displays the mobile sidebar.",
			"Toggle Sidebar": "Toggle Sidebar",
			Close: "Close",
			pagination: "pagination",
			page: "page",
			"Go to previous page": "Go to previous page",
			Previous: "Previous",
			"Go to next page": "Go to next page",
			"More pages": "More pages",
			"Previous slide": "Previous slide",
			"Next slide": "Next slide",
			breadcrumb: "breadcrumb",
			More: "More",
			"<0>...</0>LIVE WORKSPACE": "<0>...</0>LIVE WORKSPACE",
			"evidence-first workflow": "evidence-first workflow",
			"{{var0}}·{{var1}}· last verified{{var2}}": "{{var0}}·{{var1}}· last verified{{var2}}",
			"Reference data": "Reference data",
			"IP-SAKTI Sahayak home": "IP-SAKTI Sahayak home",
			"IP-SAKTI Sahayak": "IP-SAKTI Sahayak",
			"IP-SAKTI": "IP-SAKTI",
			Sahayak: "Sahayak",
			"Government of India 🟡 Ayurveda 🟡 Intellectual Property": "Government of India 🟡 Ayurveda 🟡 Intellectual Property",
			"🟡 Evidence-first research workspace": "🟡 Evidence-first research workspace",
			Primary: "Primary",
			"⌘K": "⌘K",
			Language: "Language",
			"Source status": "Source status",
			"verified 28 Aug 2026": "verified 28 Aug 2026",
			"IP India fee schedule": "IP India fee schedule",
			"verified 02 Sep 2026": "verified 02 Sep 2026",
			"Espacenet index": "Espacenet index",
			"re-verification due": "re-verification due",
			"Open source registry →": "Open source registry →",
			"Open navigation": "Open navigation",
			"All sections": "All sections",
			"Evidence-first decision support for Ayurvedic medicinal plants, formulations, traditional knowledge and intellectual-property research.": "Evidence-first decision support for Ayurvedic medicinal plants, formulations, traditional knowledge and intellectual-property research.",
			Research: "Research",
			Compliance: "Compliance",
			Governance: "Governance",
			"Quick navigation": "Quick navigation",
			"<0>...</0>Search": "<0>...</0>Search",
			"No matching workspace or reference.": "No matching workspace or reference.",
			"<0>...</0>Source registry": "<0>...</0>Source registry",
			"nav.home": "Home",
			"nav.assistant": "AI Assistant",
			"nav.patents": "Patent Intelligence",
			"nav.priorArt": "Prior Art",
			"nav.formulation": "Formulation",
			"nav.abs": "ABS Check",
			"nav.cost": "Cost Planner",
			"nav.knowledge": "Knowledge Explorer",
			"nav.international": "International",
			"nav.reports": "Reports",
			"nav.expert": "Expert Help",
			"shell.search": "Search everything",
			"shell.interfaceLanguage": "Interface language",
			"shell.commandMenu": "Command menu",
			"shell.menu": "Menu",
			"shell.tagline": "Multilingual, citation-grounded decision support for Ayurveda intellectual property and regulatory questions across Indian and international jurisdictions.",
			"shell.colWorkspaces": "Workspaces",
			"shell.colCompliance": "Compliance",
			"shell.colTransparency": "Transparency",
			"shell.disclaimer": "Information, not legal advice. Verify with official sources and consult a qualified IP professional before acting.",
			"shell.sourceRegistry": "Source registry",
			"shell.humanReview": "Human IP review",
			"shell.reportsHistory": "Reports & history",
			"shell.knowledgeExplorer": "Knowledge Explorer",
			"shell.groupResearch": "Research",
			"shell.groupCompliance": "Formulation & Compliance",
			"shell.groupKnowledge": "Knowledge & Evidence",
			"shell.groupGlobal": "Global IP",
			"shell.groupSupport": "Reports & Support",
			"pg.assistant.eyebrow": "AI workspace",
			"pg.assistant.title": "Ask about protection, classification or compliance",
			"pg.assistant.subtitle": "Answers are assembled from official records and always carry jurisdiction, evidence and limitations. Information, not legal advice.",
			"pg.patents.eyebrow": "Concept retrieval",
			"pg.patents.title": "Patent Intelligence",
			"pg.patents.subtitle": "Find patents and prior art by concept, not just keywords.",
			"pg.priorArt.eyebrow": "Evidence explorer",
			"pg.priorArt.title": "Prior-art trace",
			"pg.priorArt.subtitle": "Formulation → detected ingredients → TKDL records → patent cases → international records. Select any node to inspect the underlying record.",
			"pg.formulation.eyebrow": "Guided wizard",
			"pg.formulation.title": "What are you developing?",
			"pg.formulation.subtitle": "Four short questions produce a preliminary regulatory classification with reasoning, authorities and cited sources.",
			"pg.abs.eyebrow": "Compliance workflow",
			"pg.abs.title": "Biodiversity & ABS Check",
			"pg.abs.subtitle": "Access and benefit-sharing signals for the biological resource, its origin and any associated traditional knowledge.",
			"pg.cost.eyebrow": "Estimator",
			"pg.cost.title": "IP Cost Planner",
			"pg.cost.subtitle": "Official government fees and professional/service estimates are always shown separately, each with a source and an effective date.",
			"pg.knowledge.eyebrow": "Botanical intelligence",
			"pg.knowledge.title": "Traditional Knowledge Family Explorer",
			"pg.knowledge.subtitle": "Botanical family, genus, documented traditional use and related research candidates — with the official record behind each claim.",
			"pg.international.eyebrow": "Jurisdiction map",
			"pg.international.title": "International IP intelligence",
			"pg.international.subtitle": "Select a jurisdiction to see its patent and trade mark framework, traditional knowledge treatment, ABS regime and disclosure requirements.",
			"pg.reports.eyebrow": "Workspace",
			"pg.reports.title": "Reports & history",
			"pg.reports.subtitle": "Generate an IP intelligence report where every source stays attached to the finding it supports, and revisit earlier work.",
			"pg.expert.eyebrow": "Expert escalation",
			"pg.expert.title": "When the evidence ends, a professional begins.",
			"pg.expert.subtitle": "IP-SAKTI provides information, not legal advice. For binding decisions, escalate to a qualified IP professional — with your analysis context attached.",
			"pg.sources.eyebrow": "Source transparency",
			"pg.sources.title": "Every answer, anchored to an authority.",
			"pg.sources.subtitle": "IP-SAKTI never answers from model memory alone. Each claim cites an official registry, statute, or treaty body listed here — with its last verification date.",
			"guide.home.title": "What is IP-SAKTI Sahayak?",
			"guide.home.body": "A decision-support workbench for Ayurveda intellectual property. It screens patents, traces prior art, classifies formulations, checks ABS obligations, estimates filing costs and cites the official record behind every statement.\nUse the navigation above to open a workspace; each page explains itself in a banner like this one.",
			"guide.assistant.title": "How the AI Assistant works",
			"guide.assistant.body": "Type a question about protecting or classifying an Ayurveda formulation. The assistant retrieves matching official records (TKDL, patent offices, regulators), assembles an answer, and shows its confidence, the sources used, and the limits of the answer.\nIf the question has legal or financial consequences, use the escalation link to hand the same context to a human professional.",
			"guide.patents.title": "How Patent Intelligence works",
			"guide.patents.body": "Describe your formulation in plain words. The search matches by concept and ingredient (semantic), not only exact keywords, across Indian and international patent offices.\nFilters narrow by jurisdiction, plant, status and source. Each result shows a similarity score and links to the official register so you can verify it yourself.",
			"guide.priorArt.title": "How the prior-art flow works",
			"guide.priorArt.body": "This page answers one question: “Has this already been documented or patented?” The graph reads left to right as a chain of evidence:\n1. Formulation — your product idea is broken down.\n2. Ingredients — each detected plant/mineral component.\n3. TKDL records — matches in India's Traditional Knowledge Digital Library (prior art that can block patents).\n4. Patent cases — existing applications/grants claiming similar subject matter.\n5. International records — corresponding WIPO/EPO/USPTO filings abroad.\nSelect any node to open its underlying record: authority, excerpt, dates and the official source link. Edge thickness reflects strength of the match.",
			"guide.formulation.title": "How the classification wizard works",
			"guide.formulation.body": "Answer four short questions (intended use, claims, ingredients, presentation). The wizard produces a preliminary regulatory category — e.g. classical Ayurvedic medicine vs. proprietary medicine vs. supplement — with the reasoning, the responsible authorities and cited sources.\nThis is a triage step: a human professional should confirm the classification before you file anything.",
			"guide.abs.title": "How the ABS check works",
			"guide.abs.body": "Enter where the biological resource comes from and how you intend to use it. The check weighs traditional-knowledge association, commercial use, patent intent and export to estimate an Access & Benefit-Sharing risk level.\nIt then points to the framework that applies (NBA/SBB in India, Nagoya Protocol abroad) and the documentation you would need — before you commit to filings or trade.",
			"guide.cost.title": "How the Cost Planner works",
			"guide.cost.body": "Pick an IP instrument (patent, trade mark, design, PCT, Madrid) and applicant type. Official government fees and professional/service estimates are always listed separately, each with its source and effective date.\nSliders let you model scale (claims, classes, countries). Numbers update against the fee schedule version shown, so you always know which revision produced the estimate.",
			"guide.knowledge.title": "How the Knowledge Explorer works",
			"guide.knowledge.body": "Choose a medicinal plant to see its botanical family and genus, documented traditional uses, and related plants worth researching next.\nEvery use claim is tied to a TKDL or official record — this is a map of documented knowledge, not a recommendation of efficacy.",
			"guide.international.title": "How the jurisdiction map works",
			"guide.international.body": "Select a country or region to profile its IP system: patent and trade mark framework, how traditional knowledge is treated, the ABS regime, and disclosure-of-origin requirements.\nEach profile links to the official authority so you can confirm the current rules before filing abroad.",
			"guide.reports.title": "How Reports work",
			"guide.reports.body": "Reports bundle findings from the other workspaces into one document where every source stays attached to the finding it supports.\nPreview the structure here, then export or share. The history list lets you reopen earlier sessions and reports.",
			"guide.expert.title": "How expert escalation works",
			"guide.expert.body": "Automated analysis stops where binding decisions begin. Describe your situation, pick a topic, and optionally attach your in-app analysis (assistant session, evidence graph, ABS assessment).\nA qualified IP professional receives the same cited context — so the conversation starts from evidence, not from scratch.",
			"guide.sources.title": "How the source registry works",
			"guide.sources.body": "This is the complete list of authorities IP-SAKTI cites. Each entry shows who maintains it, which jurisdiction it covers, the data version in use, and when it was last verified.\nIf a source cannot be re-verified, answers depending on it are marked “Review required” rather than presented as fact.",
			"Evidence brief": "Evidence brief",
			"Source-linked": "Source-linked",
			"Image upload is not connected in this build.": "Image upload is not connected in this build.",
			"View source registry": "View source registry",
			"ILLUSTRATIVE ASSESSMENT": "ILLUSTRATIVE ASSESSMENT",
			"LIVE EVIDENCE ARCHITECTURE": "LIVE EVIDENCE ARCHITECTURE",
			"Start an IP analysis": "Start an IP analysis",
			"(": "(",
			All: "All",
			"content-type": "content-type",
			"Evidence linked": "Evidence linked",
			"One evidence system.": "One evidence system.",
			Knowledge: "Knowledge",
			"Share links are not connected to a sharing service in this build.": "Share links are not connected to a sharing service in this build.",
			"Inspect evidence trail": "Inspect evidence trail",
			"Voice capture is not connected in this build.": "Voice capture is not connected in this build.",
			"Open workspace": "Open workspace",
			Patent: "Patent",
			"Navigate IP with evidence.": "Navigate IP with evidence.",
			"Claim / filing": "Claim / filing",
			"Six research paths.": "Six research paths.",
			"@tanstack/react-start/server-entry": "@tanstack/react-start/server-entry",
			Decision: "Decision",
			"Traditional record": "Traditional record",
			"INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE": "INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE",
			Rule: "Rule",
			"Document upload is not connected in this build.": "Document upload is not connected in this build.",
			"Withania somnifera": "Withania somnifera",
			"PDF export is not connected to a document service in this build.": "PDF export is not connected to a document service in this build.",
			"Explore patent intelligence": "Explore patent intelligence",
			"Protect Ayurveda.": "Protect Ayurveda.",
			"TKDL records": "TKDL records",
			"Patent records": "Patent records",
			Jurisdictions: "Jurisdictions",
			"Official sources": "Official sources",
			"Potential prior-art signal": "Potential prior-art signal",
			"Traditional Knowledge Digital Library": "Traditional Knowledge Digital Library",
			"Intellectual Property India": "Intellectual Property India",
			"WIPO PATENTSCOPE": "WIPO PATENTSCOPE",
			"AI RESEARCH": "AI RESEARCH",
			"AI IP Sahayak": "AI IP Sahayak",
			"Ask a question and receive a structured answer with jurisdiction, evidence and source context.": "Ask a question and receive a structured answer with jurisdiction, evidence and source context.",
			DISCOVERY: "DISCOVERY",
			"Search concepts, claims and jurisdictions without losing the evidence behind each result.": "Search concepts, claims and jurisdictions without losing the evidence behind each result.",
			TRACE: "TRACE",
			"Prior-Art Trace": "Prior-Art Trace",
			"Connect formulations, ingredients, traditional records and patent claims in one research trail.": "Connect formulations, ingredients, traditional records and patent claims in one research trail.",
			FORMULATION: "FORMULATION",
			"Formulation Intelligence": "Formulation Intelligence",
			"Screen the likely product category before investing in a filing or market route.": "Screen the likely product category before investing in a filing or market route.",
			"TRADITIONAL KNOWLEDGE": "TRADITIONAL KNOWLEDGE",
			"Knowledge Explorer": "Knowledge Explorer",
			"Explore documented Ayurvedic plant knowledge and the records behind traditional-use claims.": "Explore documented Ayurvedic plant knowledge and the records behind traditional-use claims.",
			"GLOBAL IP": "GLOBAL IP",
			"International IP": "International IP",
			"Compare selected jurisdictions, disclosure expectations and traditional-knowledge treatment.": "Compare selected jurisdictions, disclosure expectations and traditional-knowledge treatment.",
			"Evidence is not a footnote.": "Evidence is not a footnote.",
			"It is the product.": "It is the product.",
			"Explore the evidence layer": "Explore the evidence layer",
			"AI Assistant": "AI Assistant",
			"Prior Art": "Prior Art",
			"ABS Check": "ABS Check",
			"Cost Planner": "Cost Planner",
			"Source registry": "Source registry",
			"Human review": "Human review",
			"last verified": "last verified",
			Home: "Home",
			Formulation: "Formulation",
			Reports: "Reports",
			"Expert Help": "Expert Help",
			"Formulation & Compliance": "Formulation & Compliance",
			"Knowledge & Evidence": "Knowledge & Evidence",
			"Global IP": "Global IP",
			"Reports & Support": "Reports & Support",
			Assistant: "Assistant",
			Patents: "Patents",
			"TKDL reference set": "TKDL reference set",
			Search: "Search",
			"LIVE WORKSPACE": "LIVE WORKSPACE",
			"Documented evidence": "Documented evidence",
			"Review required": "Review required",
			Informational: "Informational",
			"group-[.toast]:text-muted-foreground": "group-[.toast]:text-muted-foreground",
			English: "English",
			हिन्दी: "हिन्दी",
			मराठी: "मराठी",
			"Standardised Withania somnifera root extract composition for stress modulation": "Standardised Withania somnifera root extract composition for stress modulation",
			"Synergistic botanical composition comprising Withania and Bacopa for cognitive support": "Synergistic botanical composition comprising Withania and Bacopa for cognitive support",
			"Ashwagandha churna preparation described in classical Ayurvedic literature": "Ashwagandha churna preparation described in classical Ayurvedic literature",
			"Curcuminoid-neem composition with enhanced dermal bioavailability": "Curcuminoid-neem composition with enhanced dermal bioavailability",
			"Process for preparing Emblica officinalis polyphenol concentrate": "Process for preparing Emblica officinalis polyphenol concentrate",
			"Giloy–Tulsi decoction granule with improved shelf stability": "Giloy–Tulsi decoction granule with improved shelf stability",
			"Glycyrrhiza glabra extract for mucosal soothing compositions": "Glycyrrhiza glabra extract for mucosal soothing compositions",
			"Haridra–Nimba lepa for skin disorders in classical formularies": "Haridra–Nimba lepa for skin disorders in classical formularies",
			"Ashwagandha stress-support capsule": "Ashwagandha stress-support capsule",
			"Withania somnifera (root)": "Withania somnifera (root)",
			"Bacopa monnieri (whole plant)": "Bacopa monnieri (whole plant)",
			"TKDL/AY/1284": "TKDL/AY/1284",
			"TKDL/AY/2210": "TKDL/AY/2210",
			"IN 384512": "IN 384512",
			"WO 2023/154872": "WO 2023/154872",
			"EP 3 921 044 B1": "EP 3 921 044 B1",
			"Ashwagandha stress formulation — India & EU protectability": "Ashwagandha stress formulation — India & EU protectability",
			"IP intelligence report — Haridra–Nimba topical": "IP intelligence report — Haridra–Nimba topical",
			"Semantic search — turmeric + neem skin inflammation": "Semantic search — turmeric + neem skin inflammation",
			"Startup patent filing + PCT designation plan": "Startup patent filing + PCT designation plan",
			"ABS documentation review — wild-collected Giloy": "ABS documentation review — wild-collected Giloy",
			"Amla polyphenol concentrate — freedom-to-operate questions": "Amla polyphenol concentrate — freedom-to-operate questions",
			"IP-SAKTI Sahayak — Ayurveda IP & Regulatory Intelligence": "IP-SAKTI Sahayak — Ayurveda IP & Regulatory Intelligence",
			"Biodiversity & ABS Check — IP-SAKTI Sahayak": "Biodiversity & ABS Check — IP-SAKTI Sahayak",
			"High — documentation likely required": "High — documentation likely required",
			"Medium — review required": "Medium — review required",
			"Low — limited signals detected": "Low — limited signals detected",
			"ABS RISK RADAR": "ABS RISK RADAR",
			"Compliance workflow": "Compliance workflow",
			"Access and benefit-sharing signals for the biological resource, its origin and any associated traditional knowledge.": "Access and benefit-sharing signals for the biological resource, its origin and any associated traditional knowledge.",
			"Botanical name, e.g. Withania somnifera": "Botanical name, e.g. Withania somnifera",
			"Associated traditional knowledge used?": "Associated traditional knowledge used?",
			"Commercial use intended?": "Commercial use intended?",
			"Patent protection planned?": "Patent protection planned?",
			"Export market planned?": "Export market planned?",
			"AI Assistant — IP-SAKTI Sahayak": "AI Assistant — IP-SAKTI Sahayak",
			"AI RESEARCH COMMAND": "AI RESEARCH COMMAND",
			"AI workspace": "AI workspace",
			"Answers are assembled from official records and always carry jurisdiction, evidence and limitations. Information, not legal advice.": "Answers are assembled from official records and always carry jurisdiction, evidence and limitations. Information, not legal advice.",
			"Use example": "Use example",
			Voice: "Voice",
			Document: "Document",
			Image: "Image",
			Analyse: "Analyse",
			"Retrieval + agreement score": "Retrieval + agreement score",
			Evidence: "Evidence",
			"All official records": "All official records",
			"Answer sets kept apart": "Answer sets kept apart",
			"Open evidence explorer": "Open evidence explorer",
			"Describe a formulation, product or IP concern. The assistant will retrieve official records before offering any assessment.": "Describe a formulation, product or IP concern. The assistant will retrieve official records before offering any assessment.",
			"Source agreement": "Source agreement",
			"Coverage of jurisdiction": "Coverage of jurisdiction",
			"IP Cost Planner — IP-SAKTI Sahayak": "IP Cost Planner — IP-SAKTI Sahayak",
			Individual: "Individual",
			Startup: "Startup",
			"Small Enterprise": "Small Enterprise",
			"Educational Institution": "Educational Institution",
			"Other (large entity)": "Other (large entity)",
			"Request for early publication": "Request for early publication",
			"Request for examination": "Request for examination",
			"Drafting and filing (professional)": "Drafting and filing (professional)",
			"Prosecution and response handling (professional)": "Prosecution and response handling (professional)",
			"PCT international filing fee": "PCT international filing fee",
			"Local agent fees": "Local agent fees",
			"Translation of specification": "Translation of specification",
			"FILING ECONOMICS": "FILING ECONOMICS",
			Estimator: "Estimator",
			"Official government fees and professional/service estimates are always shown separately, each with a source and an effective date.": "Official government fees and professional/service estimates are always shown separately, each with a source and an effective date.",
			"Number of claims ·": "Number of claims ·",
			"Specification pages ·": "Specification pages ·",
			"Designations ·": "Designations ·",
			"Official government fee": "Official government fee",
			"Professional/service estimate": "Professional/service estimate",
			"Market range, not an official fee": "Market range, not an official fee",
			"Estimated total": "Estimated total",
			"Official government fees": "Official government fees",
			"Professional/service estimates": "Professional/service estimates",
			"Expert Escalation — IP-SAKTI Sahayak": "Expert Escalation — IP-SAKTI Sahayak",
			"Time-critical filings": "Time-critical filings",
			"An opposition window, examination deadline, or priority date is approaching and automated guidance is not sufficient.": "An opposition window, examination deadline, or priority date is approaching and automated guidance is not sufficient.",
			"Binding decisions": "Binding decisions",
			"You are about to sign a licence, file an application, or export a formulation — anything with legal or financial consequence.": "You are about to sign a licence, file an application, or export a formulation — anything with legal or financial consequence.",
			"Conflicting signals": "Conflicting signals",
			"The evidence graph shows prior-art risk or a jurisdiction profile conflicts with your plans. A professional must weigh in.": "The evidence graph shows prior-art risk or a jurisdiction profile conflicts with your plans. A professional must weigh in.",
			"EXPERT ESCALATION": "EXPERT ESCALATION",
			"Expert escalation": "Expert escalation",
			"When the evidence ends,": "When the evidence ends,",
			"IP-SAKTI provides information, not legal advice. For binding decisions, escalate to a qualified IP professional — with your analysis context attached.": "IP-SAKTI provides information, not legal advice. For binding decisions, escalate to a qualified IP professional — with your analysis context attached.",
			"In production this would route to a vetted IP professional.": "In production this would route to a vetted IP professional.",
			"Submit request": "Submit request",
			"Request captured in this local session. A production build would notify the\n              expert network and open a tracked case.": "Request captured in this local session. A production build would notify the\n              expert network and open a tracked case.",
			"Patent screening, TKDL cross-referencing, fee estimation, and jurisdictional\n              orientation remain automated and citation-grounded. Escalation is additive — it\n              never replaces the transparent evidence layer.": "Patent screening, TKDL cross-referencing, fee estimation, and jurisdictional\n              orientation remain automated and citation-grounded. Escalation is additive — it\n              never replaces the transparent evidence layer.",
			"Automated + cited": "Automated + cited",
			"Human review for binding steps": "Human review for binding steps",
			"Formulation Classification — IP-SAKTI Sahayak": "Formulation Classification — IP-SAKTI Sahayak",
			Cosmetic: "Cosmetic",
			Phytopharmaceutical: "Phytopharmaceutical",
			"Ayurveda-Aahar / nutraceutical": "Ayurveda-Aahar / nutraceutical",
			"Classical / generic Ayurvedic medicine": "Classical / generic Ayurvedic medicine",
			"Patent / proprietary medicine": "Patent / proprietary medicine",
			"New / non-classical drug": "New / non-classical drug",
			"FORMULATION LAB": "FORMULATION LAB",
			"Guided wizard": "Guided wizard",
			"Four short questions produce a preliminary regulatory classification with reasoning, authorities and cited sources.": "Four short questions produce a preliminary regulatory classification with reasoning, authorities and cited sources.",
			Step: "Step",
			of: "of",
			Back: "Back",
			"Start again": "Start again",
			"IP-SAKTI Sahayak — Ayurvedic IP Intelligence": "IP-SAKTI Sahayak — Ayurvedic IP Intelligence",
			"International IP Intelligence — IP-SAKTI Sahayak": "International IP Intelligence — IP-SAKTI Sahayak",
			"GLOBAL IP ATLAS": "GLOBAL IP ATLAS",
			"Jurisdiction map": "Jurisdiction map",
			"Select a jurisdiction to see its patent and trade mark framework, traditional knowledge treatment, ABS regime and disclosure requirements.": "Select a jurisdiction to see its patent and trade mark framework, traditional knowledge treatment, ABS regime and disclosure requirements.",
			"Global IP coverage": "Global IP coverage",
			profiles: "profiles",
			Supported: "Supported",
			Selected: "Selected",
			Network: "Network",
			"Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.": "Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.",
			Trademark: "Trademark",
			"Traditional knowledge": "Traditional knowledge",
			ABS: "ABS",
			"Disclosure requirements": "Disclosure requirements",
			"Official authority": "Official authority",
			"Traditional Knowledge Family Explorer — IP-SAKTI Sahayak": "Traditional Knowledge Family Explorer — IP-SAKTI Sahayak",
			"related candidates": "related candidates",
			"KNOWLEDGE GRAPH": "KNOWLEDGE GRAPH",
			"Botanical intelligence": "Botanical intelligence",
			"Botanical family, genus, documented traditional use and related research candidates — with the official record behind each claim.": "Botanical family, genus, documented traditional use and related research candidates — with the official record behind each claim.",
			"Genus ·": "Genus ·",
			"Family ·": "Family ·",
			"Evidence level ·": "Evidence level ·",
			"Evidence ·": "Evidence ·",
			"Patent Intelligence — IP-SAKTI Sahayak": "Patent Intelligence — IP-SAKTI Sahayak",
			"PATENT DISCOVERY": "PATENT DISCOVERY",
			"Concept retrieval": "Concept retrieval",
			"Find patents and prior art by concept, not just keywords.": "Find patents and prior art by concept, not just keywords.",
			"retrieval ·": "retrieval ·",
			"Widen the jurisdiction, clear the plant filter, or try a hybrid search to recover borderline matches.": "Widen the jurisdiction, clear the plant filter, or try a hybrid search to recover borderline matches.",
			"A score such as": "A score such as",
			"describes how\n              closely a record matches your described concept in retrieval space. It is not a measure\n              of infringement, validity or grant probability.": "describes how\n              closely a record matches your described concept in retrieval space. It is not a measure\n              of infringement, validity or grant probability.",
			"Jurisdiction ·": "Jurisdiction ·",
			"Plant ·": "Plant ·",
			"Status ·": "Status ·",
			"Sources ·": "Sources ·",
			"Evidence Explorer — Prior Art | IP-SAKTI Sahayak": "Evidence Explorer — Prior Art | IP-SAKTI Sahayak",
			"Your formulation": "Your formulation",
			"Detected ingredients": "Detected ingredients",
			"Patent cases": "Patent cases",
			"International records": "International records",
			"PRIOR-ART TRACE": "PRIOR-ART TRACE",
			"Evidence explorer": "Evidence explorer",
			"Formulation → detected ingredients → TKDL records → patent cases → international records. Select any node to inspect the underlying record.": "Formulation → detected ingredients → TKDL records → patent cases → international records. Select any node to inspect the underlying record.",
			"No prior art graph can be constructed for this query.": "No prior art graph can be constructed for this query.",
			"Case / record number": "Case / record number",
			Outcome: "Outcome",
			"Source date": "Source date",
			Verification: "Verification",
			Authority: "Authority",
			"Open official source": "Open official source",
			"Reports & History — IP-SAKTI Sahayak": "Reports & History — IP-SAKTI Sahayak",
			"Executive Summary": "Executive Summary",
			"Preliminary assessment of protectability and regulatory route for a standardised Ashwagandha stress-support preparation.": "Preliminary assessment of protectability and regulatory route for a standardised Ashwagandha stress-support preparation.",
			"Product Classification": "Product Classification",
			"Patent / proprietary Ayurvedic medicine (preliminary, 81% confidence).": "Patent / proprietary Ayurvedic medicine (preliminary, 81% confidence).",
			"India, with international review for EPO and USPTO designations.": "India, with international review for EPO and USPTO designations.",
			"IP Types": "IP Types",
			"Process patent, composition patent, trade mark, trade secret.": "Process patent, composition patent, trade mark, trade secret.",
			"Prior-Art Findings": "Prior-Art Findings",
			"Documented classical preparations and one granted Indian claim in the same concept space.": "Documented classical preparations and one granted Indian claim in the same concept space.",
			"TKDL Evidence": "TKDL Evidence",
			"TKDL/AY/1284 and TKDL/AY/2210 — documented classical preparations.": "TKDL/AY/1284 and TKDL/AY/2210 — documented classical preparations.",
			"WIPO Evidence": "WIPO Evidence",
			"WO 2023/154872 — combination claim covering Withania with Bacopa.": "WO 2023/154872 — combination claim covering Withania with Bacopa.",
			"ABS Findings": "ABS Findings",
			"Wild-collected material with associated traditional knowledge — documentation likely required.": "Wild-collected material with associated traditional knowledge — documentation likely required.",
			"International Findings": "International Findings",
			"Absolute novelty standard at the EPO increases the weight of documented disclosures.": "Absolute novelty standard at the EPO increases the weight of documented disclosures.",
			"Cost Estimate": "Cost Estimate",
			"Official government fees and professional estimates reported separately.": "Official government fees and professional estimates reported separately.",
			"Risk Indicators": "Risk Indicators",
			"Potential prior-art signal; ABS documentation gap; claim-scope uncertainty.": "Potential prior-art signal; ABS documentation gap; claim-scope uncertainty.",
			"Recommended Next Steps": "Recommended Next Steps",
			"Full prior-art trace, ABS documentation review, human IP review before filing.": "Full prior-art trace, ABS documentation review, human IP review before filing.",
			"88% overall, based on retrieval strength and source agreement.": "88% overall, based on retrieval strength and source agreement.",
			"Reference data; similarity is a retrieval score; no legal conclusion is offered.": "Reference data; similarity is a retrieval score; no legal conclusion is offered.",
			"TKDL, IP India, WIPO, Patents Act 1970, National Biodiversity Authority.": "TKDL, IP India, WIPO, Patents Act 1970, National Biodiversity Authority.",
			"INTELLIGENCE DOSSIER": "INTELLIGENCE DOSSIER",
			Workspace: "Workspace",
			"Generate an IP intelligence report where every source stays attached to the finding it supports, and revisit earlier work.": "Generate an IP intelligence report where every source stays attached to the finding it supports, and revisit earlier work.",
			Preview: "Preview",
			"Download PDF": "Download PDF",
			Share: "Share",
			"Jurisdiction coverage": "Jurisdiction coverage",
			"Source Registry — IP-SAKTI Sahayak": "Source Registry — IP-SAKTI Sahayak",
			"SOURCE REGISTRY": "SOURCE REGISTRY",
			"Source transparency": "Source transparency",
			"Every answer,": "Every answer,",
			"i18nPrefix=\"pg.sources\"": "i18nPrefix=\"pg.sources\"",
			"IP-SAKTI never answers from model memory alone. Each claim cites an official registry, statute, or treaty body listed here — with its last verification date.": "IP-SAKTI never answers from model memory alone. Each claim cites an official registry, statute, or treaty body listed here — with its last verification date.",
			"Across 3 jurisdiction tiers": "Across 3 jurisdiction tiers",
			"Verification cadence": "Verification cadence",
			"Fee schedules & registries re-checked": "Fee schedules & registries re-checked",
			"Citations in answers": "Citations in answers",
			"Unsourced statements are flagged": "Unsourced statements are flagged",
			"Synced Sep 2026": "Synced Sep 2026",
			Verified: "Verified",
			"When a source cannot be reached, the interface marks dependent claims": "When a source cannot be reached, the interface marks dependent claims",
			"instead of guessing.": "instead of guessing.",
			"Coverage currently spans India (TKDL, CGPDTM, Ayush, NBA) and the principal\n            international systems (WIPO, EPO, USPTO, Nagoya Protocol). National-phase detail for\n            other jurisdictions is summarised from WIPO aggregates and may lag local amendments.": "Coverage currently spans India (TKDL, CGPDTM, Ayush, NBA) and the principal\n            international systems (WIPO, EPO, USPTO, Nagoya Protocol). National-phase detail for\n            other jurisdictions is summarised from WIPO aggregates and may lag local amendments."
		} },
		hi: { translation: {
			"Every claim needs a traceable authority": "हर दावे के लिए एक प्रामाणिक स्रोत की आवश्यकता होती है",
			"anchored to an authority.": "एक स्रोत से जुड़ा हुआ।",
			"Registered sources": "पंजीकृत स्रोत",
			"<0>...</0>Synced Sep 2026": "<0>...</0>सितंबर 2026 में सिंक किया गया",
			"<0>...</0>Verified{{var1}}": "<0>...</0>सत्यापित{{var1}}",
			"How verification works": "सत्यापन कैसे काम करता है",
			"Each source is checked against its official publication on a weekly cycle.": "प्रत्येक स्रोत की साप्ताहिक चक्र पर उसके आधिकारिक प्रकाशन से जाँच की जाती है।",
			"Fee schedules and statutory texts are diffed; changes invalidate cached answers.": "शुल्क अनुसूचियों और वैधानिक ग्रंथों की तुलना की जाती है; परिवर्तन कैश किए गए उत्तरों को अमान्य कर देते हैं।",
			"Answers display the verification date of the oldest source they rely on.": "उत्तर उस सबसे पुराने स्रोत की सत्यापन तिथि प्रदर्शित करते हैं जिस पर वे निर्भर करते हैं।",
			"When a source cannot be reached, the interface marks dependent claims{{var0}} <1>...</1>instead of guessing.": "जब किसी स्रोत तक नहीं पहुंचा जा सकता है, तो इंटरफ़ेस अनुमान लगाने के बजाय निर्भर दावों को {{var0}} <1>...</1> चिह्नित करता है।",
			"Coverage boundaries": "कवरेज सीमाएँ",
			"Package findings into a decision-ready report": "निष्कर्षों को एक निर्णय-तैयार रिपोर्ट में पैकेज करें",
			"Reports & history": "रिपोर्ट और इतिहास",
			"<0>...</0>Preview": "<0>...</0>पूर्वावलोकन",
			"<0>...</0>Download PDF": "<0>...</0>पीडीएफ डाउनलोड करें",
			"<0>...</0>Share": "<0>...</0>साझा करें",
			"Generate report": "रिपोर्ट जनरेट करें",
			"Recent activity": "हाल की गतिविधि",
			"Generate IP Intelligence Report": "आईपी इंटेलिजेंस रिपोर्ट जनरेट करें",
			wipo: "वाइपो",
			"Report confidence": "रिपोर्ट का विश्वास स्तर",
			"15 sections": "15 अनुभाग",
			"5 official sources": "5 आधिकारिक स्रोत",
			"Preliminary assessment": "प्रारंभिक मूल्यांकन",
			"Reports summarise retrieved evidence. They are not legal opinions, freedom-to-operate clearances or regulatory approvals.": "रिपोर्ट प्राप्त साक्ष्यों को सारांशित करती हैं। ये कानूनी राय, संचालन-की-स्वतंत्रता मंजूरी या नियामक अनुमोदन नहीं हैं।",
			Item: "वस्तु",
			Type: "प्रकार",
			Date: "तिथि",
			Jurisdiction: "अधिकार क्षेत्र",
			Confidence: "आत्मविश्वास",
			Status: "स्थिति",
			"{{var0}}%": "{{var0}}%",
			"Connect claims to evidence": "दावों को साक्ष्य से जोड़ें",
			"Prior-art trace": "पूर्व-कला (Prior-art) खोज",
			"No prior art found": "कोई पूर्व-कला नहीं मिली",
			"Prior art evidence graph": "पूर्व-कला साक्ष्य ग्राफ",
			"Graph edges show documented relationships in the reference dataset. They do not assert any legal conclusion.": "ग्राफ किनारे संदर्भ डेटासेट में प्रलेखित संबंधों को दिखाते हैं। वे किसी कानूनी निष्कर्ष का दावा नहीं करते हैं।",
			"Evidence node": "साक्ष्य नोड",
			"User submission": "उपयोगकर्ता सबमिशन",
			"Not applicable": "लागू नहीं",
			"Open official source<0>...</0>": "आधिकारिक स्रोत खोलें<0>...</0>",
			"Trace summary": "खोज सारांश",
			"· 2 ingredients detected from the described formulation.": "· वर्णित सूत्रीकरण से 2 सामग्री का पता चला।",
			"· 2 documented traditional knowledge records located.": "· 2 प्रलेखित पारंपरिक ज्ञान रिकॉर्ड मिले।",
			"· 1 granted Indian claim in the same concept space.": "· उसी अवधारणा स्थान में 1 स्वीकृत भारतीय दावा।",
			"· 2 international records requiring review.": "· 2 अंतर्राष्ट्रीय रिकॉर्ड जिनकी समीक्षा आवश्यक है।",
			"Further verification required": "आगे के सत्यापन की आवश्यकता है",
			"Documented prior art does not automatically invalidate any patent. Invalidity and infringement questions require formal legal analysis by a qualified professional.": "प्रलेखित पूर्व-कला स्वचालित रूप से किसी भी पेटेंट को अमान्य नहीं करती है। अमान्यता और उल्लंघन के सवालों के लिए एक योग्य पेशेवर द्वारा औपचारिक कानूनी विश्लेषण की आवश्यकता होती है।",
			"{{var0}}· published{{var1}}": "{{var0}}· प्रकाशित{{var1}}",
			"Why relevant": "प्रासंगिक क्यों",
			"Conceptual similarity": "वैचारिक समानता",
			"Retrieval score — not a legal probability.": "पुनर्प्राप्ति स्कोर - कानूनी संभावना नहीं।",
			Concepts: "अवधारणाएं",
			Sources: "स्रोत",
			"Search the prior landscape": "पूर्व परिदृश्य खोजें",
			"Patent Intelligence": "पेटेंट इंटेलिजेंस",
			"Describe your invention or formulation in your own words": "अपने आविष्कार या सूत्रीकरण का अपने शब्दों में वर्णन करें",
			"Describe your invention or formulation in your own words...": "अपने आविष्कार या सूत्रीकरण का अपने शब्दों में वर्णन करें...",
			"{{var0}}Search": "{{var0}}खोजें",
			"Try:": "प्रयास करें:",
			India: "भारत",
			International: "अंतरराष्ट्रीय",
			Both: "दोनों",
			"Search type": "खोज प्रकार",
			"rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground": "rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground",
			"rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground": "rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
			Plant: "पौधा",
			"All plants": "सभी पौधे",
			"<0>...</0>Sources": "<0>...</0>स्रोत",
			"Retrieving records…": "रिकॉर्ड प्राप्त किए जा रहे हैं…",
			"{{var0}}retrieval ·{{var1}}· sorted by conceptual similarity": "{{var0}}पुनर्प्राप्ति ·{{var1}}· वैचारिक समानता द्वारा क्रमबद्ध",
			"No records match these filters": "इन फ़िल्टरों से कोई रिकॉर्ड मेल नहीं खाता",
			"Reset filters": "फ़िल्टर रीसेट करें",
			"Reading similarity": "समानता पढ़ना",
			"A score such as<0>...</0>describes how closely a record matches your described concept in retrieval space. It is not a measure of infringement, validity or grant probability.": "<0>...</0> जैसा स्कोर बताता है कि पुनर्प्राप्ति स्थान में कोई रिकॉर्ड आपकी वर्णित अवधारणा से कितनी निकटता से मेल खाता है। यह उल्लंघन, वैधता या अनुदान संभावना का माप नहीं है।",
			"Filters applied": "फ़िल्टर लागू किए गए",
			"Jurisdiction ·{{var0}}": "अधिकार क्षेत्र ·{{var0}}",
			"Plant ·{{var0}}": "पौधा ·{{var0}}",
			"Status ·{{var0}}": "स्थिति ·{{var0}}",
			"Sources ·{{var0}}of{{var1}}": "स्रोत ·{{var0}}में से{{var1}}",
			"Evidence level · official records preferred": "साक्ष्य स्तर · आधिकारिक रिकॉर्ड को प्राथमिकता",
			"Results are preliminary signals from a reference dataset. Verify every record against the official register before relying on it.": "परिणाम संदर्भ डेटासेट से प्रारंभिक संकेत हैं। किसी भी रिकॉर्ड पर निर्भर रहने से पहले आधिकारिक रजिस्टर से उसे सत्यापित करें।",
			"{{var0}}related candidates": "{{var0}}संबंधित उम्मीदवार",
			"Map botanical knowledge into defensible evidence": "वानस्पतिक ज्ञान को बचाव योग्य साक्ष्य में मैप करें",
			"Traditional Knowledge Family Explorer": "पारंपरिक ज्ञान परिवार अन्वेषक",
			"rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground": "rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground",
			"rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground": "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground",
			"Genus ·{{var0}}": "जीनस ·{{var0}}",
			"Family ·{{var0}}": "परिवार ·{{var0}}",
			"Evidence level ·{{var0}}": "साक्ष्य स्तर ·{{var0}}",
			"Traditional use": "पारंपरिक उपयोग",
			"Plant part": "पौधे का भाग",
			"Formulation role": "सूत्रीकरण भूमिका",
			"Official source": "आधिकारिक स्रोत",
			"Potential alternative candidates for further research": "आगे के शोध के लिए संभावित वैकल्पिक उम्मीदवार",
			"Evidence ·{{var0}}": "साक्ष्य ·{{var0}}",
			"Load more candidates": "अधिक उम्मीदवार लोड करें",
			"Same family or genus does not establish medicinal equivalence or freedom from patent infringement. Candidates are research leads only, never substitutes.": "समान परिवार या जीनस औषधीय तुल्यता या पेटेंट उल्लंघन से स्वतंत्रता स्थापित नहीं करता है। उम्मीदवार केवल शोध सुराग हैं, कभी भी विकल्प नहीं।",
			"Move from India to the world": "भारत से दुनिया की ओर बढ़ें",
			"International IP intelligence": "अंतर्राष्ट्रीय आईपी इंटेलिजेंस",
			"Supported jurisdictions": "समर्थित अधिकार क्षेत्र",
			"<0>...</0>Global IP coverage": "<0>...</0>वैश्विक आईपी कवरेज",
			"Select a supported jurisdiction": "एक समर्थित अधिकार क्षेत्र चुनें",
			"{{var0}}profiles": "{{var0}}प्रोफाइल",
			"Colourful world map showing IP-SAKTI supported jurisdictions": "आईपी-शक्ति समर्थित अधिकार क्षेत्रों को दर्शाने वाला रंगीन विश्व मानचित्र",
			"<0>...</0>Supported": "<0>...</0>समर्थित",
			"<0>...</0>Selected": "<0>...</0>चयनित",
			"<0>...</0>Network": "<0>...</0>नेटवर्क",
			"<0>...</0>Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.": "<0>...</0>इसके पेटेंट, टीके, एबीएस और प्रकटीकरण प्रोफ़ाइल को खोलने के लिए एक समर्थित अधिकार क्षेत्र मार्कर पर क्लिक करें।",
			"Jurisdiction profile": "अधिकार क्षेत्र प्रोफ़ाइल",
			"Official authority<0>...</0>": "आधिकारिक प्राधिकरण<0>...</0>",
			"Frameworks summarised from official sources in a reference dataset. National practice changes; confirm current requirements with the relevant authority or a local professional.": "एक संदर्भ डेटासेट में आधिकारिक स्रोतों से संक्षेप में रूपरेखा। राष्ट्रीय अभ्यास बदलते हैं; संबंधित प्राधिकरण या स्थानीय पेशेवर के साथ वर्तमान आवश्यकताओं की पुष्टि करें।",
			"<0>...</0>LIVE EVIDENCE ARCHITECTURE": "<0>...</0>लाइव साक्ष्य वास्तुकला",
			"From biological resource to a defensible research trail.": "जैविक संसाधन से एक बचाव योग्य शोध निशान तक।",
			"<0>...</0>Source-linked": "<0>...</0>स्रोत-लिंक किया गया",
			"Jurisdiction aware": "अधिकार क्षेत्र जागरूक",
			"Verification state retained": "सत्यापन स्थिति बरकरार",
			"<0>...</0>ILLUSTRATIVE ASSESSMENT": "<0>...</0>दृष्टांत मूल्यांकन",
			"FORMULATION SIGNAL": "सूत्रीकरण संकेत",
			"Stress-support formulation": "तनाव-समर्थन सूत्रीकरण",
			sources: "स्रोत",
			"Documented traditional records and an overlapping granted claim are visible in the current reference set. This is a research signal, not a legal conclusion.": "प्रलेखित पारंपरिक रिकॉर्ड और एक अतिव्यापी स्वीकृत दावा वर्तमान संदर्भ सेट में दिखाई दे रहे हैं। यह एक शोध संकेत है, कानूनी निष्कर्ष नहीं।",
			"Inspect evidence trail<0>...</0>": "साक्ष्य निशान का निरीक्षण करें<0>...</0>",
			"<0>...</0>INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE": "<0>...</0>भारत का आयुर्वेद + आईपी इंटेलिजेंस कार्यक्षेत्र",
			"Protect Ayurveda.<0>...</0><1>...</1>": "आयुर्वेद की रक्षा करें।<0>...</0><1>...</1>",
			"A structured intelligence workspace for medicinal plants, formulations, traditional knowledge, patents, prior art, ABS and international IP — with the evidence trail kept visible.": "औषधीय पौधों, सूत्रीकरण, पारंपरिक ज्ञान, पेटेंट, पूर्व-कला, एबीएस और अंतर्राष्ट्रीय आईपी के लिए एक संरचित खुफिया कार्यक्षेत्र - जिसमें साक्ष्य का निशान दृश्यमान रखा गया है।",
			"<0>...</0>Start an IP analysis<1>...</1>": "<0>...</0>एक आईपी विश्लेषण शुरू करें<1>...</1>",
			"<0>...</0>Explore patent intelligence": "<0>...</0>पेटेंट इंटेलिजेंस का अन्वेषण करें",
			"Answering for": "के लिए उत्तर देना",
			"Evidence-first intelligence": "साक्ष्य-प्रथम इंटेलिजेंस",
			"Source · jurisdiction · date · verification state stay visible.": "स्रोत · अधिकार क्षेत्र · तिथि · सत्यापन स्थिति दृश्यमान रहती है।",
			"View source registry<0>...</0>": "स्रोत रजिस्ट्री देखें<0>...</0>",
			"THE IP-SAKTI WORKSPACE": "आईपी-शक्ति कार्यक्षेत्र",
			"Six research paths.<0>...</0><1>...</1>": "छह शोध पथ।<0>...</0><1>...</1>",
			"Move from an idea to a research-backed decision without jumping between disconnected tools.": "डिस्कनेक्ट किए गए टूल के बीच जंप किए बिना एक विचार से एक शोध-समर्थित निर्णय की ओर बढ़ें।",
			"Open workspace<0>...</0>": "कार्यक्षेत्र खोलें<0>...</0>",
			"WHY IP-SAKTI": "आईपी-शक्ति क्यों",
			"Evidence is not a footnote.<0>...</0><1>...</1>": "साक्ष्य कोई फ़ुटनोट नहीं है।<0>...</0><1>...</1>",
			"The platform is designed to keep research traceable: what was found, where it applies, which source supports it and when that source was verified.": "प्लेटफ़ॉर्म को शोध को ट्रैक करने योग्य रखने के लिए डिज़ाइन किया गया है: क्या पाया गया, यह कहाँ लागू होता है, कौन सा स्रोत इसका समर्थन करता है और उस स्रोत को कब सत्यापित किया गया था।",
			"Explore the evidence layer<0>...</0>": "साक्ष्य परत का अन्वेषण करें<0>...</0>",
			"Source-linked findings": "स्रोत-लिंक किए गए निष्कर्ष",
			"Every meaningful conclusion can point back to its reference set.": "हर सार्थक निष्कर्ष अपने संदर्भ सेट की ओर इशारा कर सकता है।",
			"Jurisdiction-aware by design": "डिज़ाइन द्वारा अधिकार क्षेत्र-जागरूक",
			"India and international requirements remain clearly separated.": "भारत और अंतर्राष्ट्रीय आवश्यकताएँ स्पष्ट रूप से अलग-अलग रहती हैं।",
			"Human escalation built in": "मानव वृद्धि अंतर्निहित",
			"Uncertain cases can move from automated analysis to expert review.": "अनिश्चित मामले स्वचालित विश्लेषण से विशेषज्ञ समीक्षा तक जा सकते हैं।",
			"START WITH A QUESTION": "एक प्रश्न से शुरू करें",
			"Leave with a research trail.": "एक शोध निशान के साथ छोड़ें।",
			"Ask about a formulation, traditional knowledge record, patent, prior art or international IP route.": "किसी सूत्रीकरण, पारंपरिक ज्ञान रिकॉर्ड, पेटेंट, पूर्व-कला या अंतर्राष्ट्रीय आईपी मार्ग के बारे में पूछें।",
			"Classify the product before filing": "फाइल करने से पहले उत्पाद को वर्गीकृत करें",
			"What are you developing?": "आप क्या विकसित कर रहे हैं?",
			"h-1 flex-1 rounded-full bg-saffron": "h-1 flex-1 rounded-full bg-saffron",
			"h-1 flex-1 rounded-full bg-muted": "h-1 flex-1 rounded-full bg-muted",
			"Step{{var0}}of{{var1}}": "चरण{{var0}}का{{var1}}",
			"Describe the product in one line": "उत्पाद का एक पंक्ति में वर्णन करें",
			"Standardised Ashwagandha capsule for stress support": "तनाव समर्थन के लिए मानकीकृत अश्वगंधा कैप्सूल",
			"<0>...</0>Back": "<0>...</0>पीछे",
			Classify: "वर्गीकृत करें",
			Next: "अगला",
			"Answers recorded": "उत्तर दर्ज किए गए",
			"·{{var0}}": "·{{var0}}",
			"<0>...</0>Start again": "<0>...</0>फिर से शुरू करें",
			"Preliminary classification": "प्रारंभिक वर्गीकरण",
			"Reasoning summary": "तर्क सारांश",
			"Applicable regulatory route": "लागू नियामक मार्ग",
			"Relevant authorities": "संबंधित अधिकारी",
			"Potential IP implications": "संभावित आईपी निहितार्थ",
			"Preliminary classification — professional/regulatory verification may be required.": "प्रारंभिक वर्गीकरण — पेशेवर/नियामक सत्यापन की आवश्यकता हो सकती है।",
			"Continue to ABS check": "एबीएस जांच जारी रखें",
			"Request human review": "मानव समीक्षा का अनुरोध करें",
			"Possible categories": "संभावित श्रेणियां",
			"Classification affects both the regulatory route and the intellectual property strategy. This output is a preliminary assessment and does not constitute regulatory clearance.": "वर्गीकरण नियामक मार्ग और बौद्धिक संपदा रणनीति दोनों को प्रभावित करता है। यह आउटपुट एक प्रारंभिक मूल्यांकन है और नियामक मंजूरी का गठन नहीं करता है।",
			"Know when evidence needs a professional": "जानें कि कब साक्ष्य को एक पेशेवर की आवश्यकता है",
			"a professional begins.": "एक पेशेवर शुरू होता है।",
			"Full name": "पूरा नाम",
			"Dr. A. Researcher": "डॉ. ए. शोधकर्ता",
			"Work email": "कार्य ईमेल",
			"you@institution.in": "you@institution.in",
			Organisation: "संगठन",
			"Institute / company": "संस्थान / कंपनी",
			Topic: "विषय",
			"Select a topic": "एक विषय चुनें",
			"Describe the situation": "स्थिति का वर्णन करें",
			"What are you deciding? Which jurisdictions, formulations, or patents are involved? Include any deadlines.": "आप क्या निर्णय ले रहे हैं? कौन से अधिकार क्षेत्र, सूत्र, या पेटेंट शामिल हैं? कोई भी समय सीमा शामिल करें।",
			"Attach analysis context (optional)": "विश्लेषण संदर्भ संलग्न करें (वैकल्पिक)",
			"Assistant session — “Turmeric curcumin novelty”": "सहायक सत्र — “हल्दी करक्यूमिन नवीनता”",
			"Evidence graph — 8 nodes": "साक्ष्य ग्राफ — 8 नोड्स",
			"ABS risk assessment — Moderate": "एबीएस जोखिम मूल्यांकन — मध्यम",
			"Sharing your in-app analysis lets the professional start from the cited evidence instead of a blank page.": "अपना इन-ऐप विश्लेषण साझा करने से पेशेवर को खाली पृष्ठ के बजाय उद्धृत साक्ष्य से शुरू करने की सुविधा मिलती है।",
			"<0>...</0>Submit request": "<0>...</0>अनुरोध सबमिट करें",
			"Typical response window: 2–3 working days (indicative).": "विशिष्ट प्रतिक्रिया विंडो: 2–3 कार्य दिवस (सांकेतिक)।",
			"<0>...</0>Request captured in this local session. A production build would notify the expert network and open a tracked case.": "<0>...</0>इस स्थानीय सत्र में अनुरोध कैप्चर किया गया। एक उत्पादन निर्माण विशेषज्ञ नेटवर्क को सूचित करेगा और एक ट्रैक किया गया मामला खोलेगा।",
			"When to escalate": "कब आगे बढ़ाना है",
			"What stays automated": "क्या स्वचालित रहता है",
			"Turn filing strategy into a cost plan": "फाइलिंग रणनीति को लागत योजना में बदलें",
			"IP Cost Planner": "आईपी लागत योजनाकार",
			Right: "सही",
			"rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground": "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
			"Applicant type (India)": "आवेदक प्रकार (भारत)",
			"Filing mode": "फाइलिंग मोड",
			"e-filing": "ई-फाइलिंग",
			"physical filing": "भौतिक फाइलिंग",
			"Number of claims ·{{var0}}": "दावों की संख्या ·{{var0}}",
			"Specification pages ·{{var0}}": "विशिष्टता पृष्ठ ·{{var0}}",
			"Early publication": "प्रारंभिक प्रकाशन",
			"Request examination": "परीक्षा का अनुरोध करें",
			"International country": "अंतरराष्ट्रीय देश",
			Currency: "मुद्रा",
			"Designations ·{{var0}}": "पदनाम ·{{var0}}",
			"🇮🇳 India": "🇮🇳 भारत",
			"🌍 International": "🌍 अंतर्राष्ट्रीय",
			"Fees change. Always verify the current official fee schedule before filing. Government fees and professional estimates are separate figures and must not be added together as a single official cost.": "शुल्क बदलते हैं। फाइल करने से पहले हमेशा वर्तमान आधिकारिक शुल्क अनुसूची को सत्यापित करें। सरकारी शुल्क और पेशेवर अनुमान अलग-अलग आंकड़े हैं और उन्हें एक एकल आधिकारिक लागत के रूप में एक साथ नहीं जोड़ा जाना चाहिए।",
			Amount: "राशि",
			Source: "स्रोत",
			Effective: "प्रभावी",
			"Last verified": "अंतिम बार सत्यापित",
			"Save estimate": "अनुमान सहेजें",
			"Export breakdown": "निर्यात विवरण",
			"Ask → analyse → evidence": "पूछें → विश्लेषण करें → साक्ष्य",
			"Ask about protection, classification or compliance": "सुरक्षा, वर्गीकरण या अनुपालन के बारे में पूछें",
			"Your question": "आपका प्रश्न",
			"Describe your Ayurvedic product, formulation or IP concern...": "अपने आयुर्वेदिक उत्पाद, सूत्रीकरण या आईपी चिंता का वर्णन करें...",
			"<0>...</0>Use example": "<0>...</0>उदाहरण का उपयोग करें",
			"<0>...</0>Voice": "<0>...</0>आवाज़",
			"<0>...</0>Document": "<0>...</0>दस्तावेज़",
			"<0>...</0>Image": "<0>...</0>छवि",
			"{{var0}}Analyse": "{{var0}}विश्लेषण करें",
			"Processing route": "प्रसंस्करण मार्ग",
			"{{var0}}.{{var1}}": "{{var0}}.{{var1}}",
			"rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified": "rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified",
			"High-level processing stages only. Internal reasoning is not exposed.": "केवल उच्च-स्तरीय प्रसंस्करण चरण। आंतरिक तर्क उजागर नहीं होता है।",
			"Executive answer": "कार्यकारी उत्तर",
			"⚠️ AI analysis unavailable. Showing retrieved official records below.": "⚠️ एआई विश्लेषण अनुपलब्ध। नीचे प्राप्त आधिकारिक रिकॉर्ड दिखा रहा है।",
			"Applicable IP types": "लागू आईपी प्रकार",
			"Key findings": "प्रमुख निष्कर्ष",
			"Recommended next steps": "अनुशंसित अगले कदम",
			"Sources (4 official records)": "स्रोत (4 आधिकारिक रिकॉर्ड)",
			"Evidence used": "प्रयुक्त साक्ष्य",
			Limitations: "सीमाएँ",
			"· Similarity is a retrieval score, not a legal probability.": "· समानता एक पुनर्प्राप्ति स्कोर है, कानूनी संभावना नहीं।",
			"· Documented prior art does not automatically invalidate any patent.": "· प्रलेखित पूर्व कला स्वचालित रूप से किसी भी पेटेंट को अमान्य नहीं करती है।",
			"· Records reflect a reference dataset snapshot and may not be current.": "· रिकॉर्ड एक संदर्भ डेटासेट स्नैपशॉट को दर्शाते हैं और वर्तमान नहीं हो सकते हैं।",
			"· Claim scope interpretation requires a qualified professional.": "· दावा दायरे की व्याख्या के लिए एक योग्य पेशेवर की आवश्यकता होती है।",
			"Open evidence explorer<0>...</0>": "साक्ष्य एक्सप्लोरर खोलें<0>...</0>",
			"No analysis yet": "अभी तक कोई विश्लेषण नहीं",
			"Try the example question": "उदाहरण प्रश्न का प्रयास करें",
			"Confidence & evidence": "विश्वास और साक्ष्य",
			"Active source set": "सक्रिय स्रोत सेट",
			"Indian and international answer sets are never visually merged.": "भारतीय और अंतर्राष्ट्रीय उत्तर सेट कभी भी दृष्टिगत रूप से विलय नहीं किए जाते हैं।",
			"IP-SAKTI Sahayak provides information and preliminary analysis. Human experts are required for legal advice. Never rely on this output as clearance to file, market or export.": "आईपी-शक्ति सहायक सूचना और प्रारंभिक विश्लेषण प्रदान करता है। कानूनी सलाह के लिए मानव विशेषज्ञों की आवश्यकता होती है। कभी भी इस आउटपुट पर फ़ाइल, मार्केट या निर्यात करने के लिए क्लीयरेंस के रूप में भरोसा न करें।",
			"Check biodiversity obligations early": "जैव विविधता दायित्वों की जल्दी जांच करें",
			"Biodiversity & ABS Check": "जैव विविधता और एबीएस जांच",
			"Resource details": "संसाधन विवरण",
			"Biological resource": "जैविक संसाधन",
			"Country of origin": "मूल देश",
			"Run ABS check": "एबीएस जांच चलाएं",
			"ABS status": "एबीएस स्थिति",
			"Resource origin": "संसाधन मूल",
			"{{var0}}·{{var1}}·{{var2}}": "{{var0}}·{{var1}}·{{var2}}",
			"Associated TK": "संबंधित टीके",
			"Declared as used": "उपयोग किए गए के रूप में घोषित",
			"Not declared": "घोषित नहीं",
			"Applicable jurisdiction": "लागू अधिकार क्षेत्र",
			"India (NBA / SBB)": "भारत (एनबीए / एसबीबी)",
			"Potential documentation": "संभावित दस्तावेज",
			"Access approval, benefit-sharing agreement, source-of-material declaration in the patent specification.": "एक्सेस अनुमोदन, लाभ-साझाकरण समझौता, पेटेंट विनिर्देश में सामग्री के स्रोत की घोषणा।",
			"Relevant legal framework": "प्रासंगिक कानूनी ढांचा",
			"This is not legal clearance. Further verification with the competent national authority is required before commercial use, filing or export.": "यह कानूनी मंजूरी नहीं है। व्यावसायिक उपयोग, फाइलिंग या निर्यात से पहले सक्षम राष्ट्रीय प्राधिकरण के साथ आगे सत्यापन की आवश्यकता है।",
			"Request human review of ABS documentation": "एबीएस दस्तावेज़ीकरण की मानव समीक्षा का अनुरोध करें",
			"What this check looks at": "यह जांच क्या देखती है",
			"· Whether the resource is wild-collected, cultivated or imported.": "· क्या संसाधन जंगली-एकत्रित, खेती या आयातित है।",
			"· Whether associated traditional knowledge is involved.": "· क्या संबंधित पारंपरिक ज्ञान शामिल है।",
			"· Whether commercial use, patenting or export is planned.": "· क्या व्यावसायिक उपयोग, पेटेंटिंग या निर्यात की योजना है।",
			"· Which national framework and authority is likely to apply.": "· कौन सा राष्ट्रीय ढांचा और प्राधिकरण लागू होने की संभावना है।",
			"ABS outcomes depend on facts that cannot be verified automatically, including collection records and community consent. No definitive legal clearance is given here.": "एबीएस परिणाम उन तथ्यों पर निर्भर करते हैं जिन्हें स्वचालित रूप से सत्यापित नहीं किया जा सकता है, जिसमें संग्रह रिकॉर्ड और सामुदायिक सहमति शामिल है। यहां कोई निश्चित कानूनी मंजूरी नहीं दी गई है।",
			"Page not found": "पृष्ठ नहीं मिला",
			"The page you're looking for doesn't exist or has been moved.": "आप जिस पृष्ठ को खोज रहे हैं वह मौजूद नहीं है या ले जाया गया है।",
			"Go home": "घर जाएं",
			"This page didn't load": "यह पृष्ठ लोड नहीं हुआ",
			"Something went wrong on our end. You can try refreshing or head back home.": "हमारी ओर से कुछ गलत हो गया। आप रीफ्रेश करने का प्रयास कर सकते हैं या घर वापस जा सकते हैं।",
			"Try again": "पुनः प्रयास करें",
			Sidebar: "साइडबार",
			"Displays the mobile sidebar.": "मोबाइल साइडबार प्रदर्शित करता है।",
			"Toggle Sidebar": "टॉगल साइडबार",
			Close: "बंद करें",
			pagination: "पेजिनेशन",
			page: "पृष्ठ",
			"Go to previous page": "पिछले पृष्ठ पर जाएं",
			Previous: "पिछला",
			"Go to next page": "अगले पृष्ठ पर जाएं",
			"More pages": "अधिक पृष्ठ",
			"Previous slide": "पिछली स्लाइड",
			"Next slide": "अगली स्लाइड",
			breadcrumb: "ब्रेडक्रंब",
			More: "अधिक",
			"<0>...</0>LIVE WORKSPACE": "<0>...</0>लाइव कार्यक्षेत्र",
			"evidence-first workflow": "साक्ष्य-प्रथम वर्कफ़्लो",
			"{{var0}}·{{var1}}· last verified{{var2}}": "{{var0}}·{{var1}}· अंतिम बार सत्यापित{{var2}}",
			"Reference data": "संदर्भ डेटा",
			"IP-SAKTI Sahayak home": "आईपी-शक्ति सहायक होम",
			"IP-SAKTI Sahayak": "आईपी-शक्ति सहायक",
			"IP-SAKTI": "आईपी-शक्ति",
			Sahayak: "सहायक",
			"Government of India 🟡 Ayurveda 🟡 Intellectual Property": "भारत सरकार 🟡 आयुर्वेद 🟡 बौद्धिक संपदा",
			"🟡 Evidence-first research workspace": "🟡 साक्ष्य-प्रथम अनुसंधान कार्यक्षेत्र",
			Primary: "प्राथमिक",
			"⌘K": "⌘K",
			Language: "भाषा",
			"Source status": "स्रोत स्थिति",
			"verified 28 Aug 2026": "28 अगस्त 2026 को सत्यापित",
			"IP India fee schedule": "आईपी इंडिया शुल्क अनुसूची",
			"verified 02 Sep 2026": "02 सितंबर 2026 को सत्यापित",
			"Espacenet index": "एस्पेसनेट इंडेक्स",
			"re-verification due": "पुन: सत्यापन देय",
			"Open source registry →": "स्रोत रजिस्ट्री खोलें →",
			"Open navigation": "नेविगेशन खोलें",
			"All sections": "सभी अनुभाग",
			"Evidence-first decision support for Ayurvedic medicinal plants, formulations, traditional knowledge and intellectual-property research.": "आयुर्वेदिक औषधीय पौधों, योगों, पारंपरिक ज्ञान और बौद्धिक-संपदा अनुसंधान के लिए साक्ष्य-प्रथम निर्णय समर्थन।",
			Research: "अनुसंधान",
			Compliance: "अनुपालन",
			Governance: "शासन",
			"Quick navigation": "त्वरित नेविगेशन",
			"<0>...</0>Search": "<0>...</0>खोजें",
			"No matching workspace or reference.": "कोई मिलान कार्यक्षेत्र या संदर्भ नहीं।",
			"<0>...</0>Source registry": "<0>...</0>स्रोत रजिस्ट्री",
			"nav.home": "होम",
			"nav.assistant": "एआई सहायक",
			"nav.patents": "पेटेंट इंटेलिजेंस",
			"nav.priorArt": "पूर्व कला",
			"nav.formulation": "सूत्रीकरण",
			"nav.abs": "एबीएस जांच",
			"nav.cost": "लागत योजनाकार",
			"nav.knowledge": "ज्ञान एक्सप्लोरर",
			"nav.international": "अंतरराष्ट्रीय",
			"nav.reports": "रिपोर्ट",
			"nav.expert": "विशेषज्ञ सहायता",
			"shell.search": "सब कुछ खोजें",
			"shell.interfaceLanguage": "इंटरफ़ेस भाषा",
			"shell.commandMenu": "कमांड मेनू",
			"shell.menu": "मेनू",
			"shell.tagline": "भारतीय और अंतर्राष्ट्रीय अधिकार क्षेत्रों में आयुर्वेद बौद्धिक संपदा और नियामक प्रश्नों के लिए बहुभाषी, उद्धरण-आधारित निर्णय समर्थन।",
			"shell.colWorkspaces": "कार्यक्षेत्र",
			"shell.colCompliance": "अनुपालन",
			"shell.colTransparency": "पारदर्शिता",
			"shell.disclaimer": "जानकारी, कानूनी सलाह नहीं। आधिकारिक स्रोतों के साथ सत्यापित करें और कार्य करने से पहले एक योग्य आईपी पेशेवर से परामर्श करें।",
			"shell.sourceRegistry": "स्रोत रजिस्ट्री",
			"shell.humanReview": "मानव आईपी समीक्षा",
			"shell.reportsHistory": "रिपोर्ट और इतिहास",
			"shell.knowledgeExplorer": "ज्ञान एक्सप्लोरर",
			"shell.groupResearch": "शोध",
			"shell.groupCompliance": "सूत्रीकरण और अनुपालन",
			"shell.groupKnowledge": "ज्ञान और साक्ष्य",
			"shell.groupGlobal": "वैश्विक आईपी",
			"shell.groupSupport": "रिपोर्ट और समर्थन",
			"pg.assistant.eyebrow": "एआई कार्यक्षेत्र",
			"pg.assistant.title": "सुरक्षा, वर्गीकरण या अनुपालन के बारे में पूछें",
			"pg.assistant.subtitle": "उत्तर आधिकारिक रिकॉर्ड से इकट्ठे किए गए हैं और हमेशा अधिकार क्षेत्र, साक्ष्य और सीमाएँ ले जाते हैं। जानकारी, कानूनी सलाह नहीं।",
			"pg.patents.eyebrow": "अवधारणा पुनर्प्राप्ति",
			"pg.patents.title": "पेटेंट इंटेलिजेंस",
			"pg.patents.subtitle": "केवल कीवर्ड द्वारा नहीं, बल्कि अवधारणा द्वारा पेटेंट और पूर्व कला खोजें।",
			"pg.priorArt.eyebrow": "साक्ष्य एक्सप्लोरर",
			"pg.priorArt.title": "पूर्व-कला (Prior-art) खोज",
			"pg.priorArt.subtitle": "सूत्रीकरण → पता चला सामग्री → टीकेडीएल रिकॉर्ड → पेटेंट मामले → अंतर्राष्ट्रीय रिकॉर्ड। अंतर्निहित रिकॉर्ड का निरीक्षण करने के लिए किसी भी नोड का चयन करें।",
			"pg.formulation.eyebrow": "निर्देशित विज़ार्ड",
			"pg.formulation.title": "आप क्या विकसित कर रहे हैं?",
			"pg.formulation.subtitle": "चार छोटे प्रश्न तर्क, अधिकारियों और उद्धृत स्रोतों के साथ एक प्रारंभिक नियामक वर्गीकरण उत्पन्न करते हैं।",
			"pg.abs.eyebrow": "अनुपालन वर्कफ़्लो",
			"pg.abs.title": "जैव विविधता और एबीएस जांच",
			"pg.abs.subtitle": "जैविक संसाधन, उसके मूल और किसी भी संबंधित पारंपरिक ज्ञान के लिए पहुंच और लाभ-साझाकरण संकेत।",
			"pg.cost.eyebrow": "अनुमानक",
			"pg.cost.title": "आईपी लागत योजनाकार",
			"pg.cost.subtitle": "आधिकारिक सरकारी शुल्क और पेशेवर/सेवा अनुमान हमेशा अलग-अलग दिखाए जाते हैं, प्रत्येक एक स्रोत और एक प्रभावी तिथि के साथ।",
			"pg.knowledge.eyebrow": "वानस्पतिक इंटेलिजेंस",
			"pg.knowledge.title": "पारंपरिक ज्ञान परिवार अन्वेषक",
			"pg.knowledge.subtitle": "वानस्पतिक परिवार, जीनस, प्रलेखित पारंपरिक उपयोग और संबंधित अनुसंधान उम्मीदवार — प्रत्येक दावे के पीछे आधिकारिक रिकॉर्ड के साथ।",
			"pg.international.eyebrow": "अधिकार क्षेत्र मानचित्र",
			"pg.international.title": "अंतर्राष्ट्रीय आईपी इंटेलिजेंस",
			"pg.international.subtitle": "इसके पेटेंट और व्यापार चिह्न ढांचे, पारंपरिक ज्ञान उपचार, एबीएस शासन और प्रकटीकरण आवश्यकताओं को देखने के लिए एक अधिकार क्षेत्र का चयन करें।",
			"pg.reports.eyebrow": "कार्यक्षेत्र",
			"pg.reports.title": "रिपोर्ट और इतिहास",
			"pg.reports.subtitle": "एक आईपी इंटेलिजेंस रिपोर्ट तैयार करें जहां प्रत्येक स्रोत उस खोज से जुड़ा रहता है जिसका वह समर्थन करता है, और पहले के काम को फिर से देखें।",
			"pg.expert.eyebrow": "विशेषज्ञ वृद्धि",
			"pg.expert.title": "जब साक्ष्य समाप्त होता है, तो एक पेशेवर शुरू होता है।",
			"pg.expert.subtitle": "आईपी-शक्ति जानकारी प्रदान करती है, कानूनी सलाह नहीं। बाध्यकारी निर्णयों के लिए, एक योग्य आईपी पेशेवर के पास जाएं — आपके विश्लेषण संदर्भ संलग्न होने के साथ।",
			"pg.sources.eyebrow": "स्रोत पारदर्शिता",
			"pg.sources.title": "हर उत्तर, एक प्रामाणिक स्रोत से जुड़ा हुआ।",
			"pg.sources.subtitle": "आईपी-शक्ति कभी भी अकेले मॉडल मेमोरी से जवाब नहीं देती है। प्रत्येक दावा यहां सूचीबद्ध एक आधिकारिक रजिस्ट्री, क़ानून या संधि निकाय का हवाला देता है — इसकी अंतिम सत्यापन तिथि के साथ।",
			"guide.home.title": "आईपी-शक्ति सहायक क्या है?",
			"guide.home.body": "आयुर्वेद बौद्धिक संपदा के लिए एक निर्णय-समर्थन कार्यक्षेत्र। यह पेटेंट की जांच करता है, पूर्व कला को ट्रैक करता है, फॉर्मूलेशन को वर्गीकृत करता है, एबीएस दायित्वों की जांच करता है, फाइलिंग लागत का अनुमान लगाता है और हर कथन के पीछे आधिकारिक रिकॉर्ड का हवाला देता है।\nकार्यक्षेत्र खोलने के लिए ऊपर नेविगेशन का उपयोग करें; प्रत्येक पृष्ठ इस तरह के बैनर में खुद को समझाता है।",
			"guide.assistant.title": "एआई सहायक कैसे काम करता है",
			"guide.assistant.body": "आयुर्वेद सूत्रीकरण की रक्षा या वर्गीकरण के बारे में एक प्रश्न टाइप करें। सहायक आधिकारिक रिकॉर्ड (टीकेडीएल, पेटेंट कार्यालय, नियामक) से मेल खाता है, एक उत्तर इकट्ठा करता है, और अपना विश्वास, प्रयुक्त स्रोत और उत्तर की सीमाएं दिखाता है।\nयदि प्रश्न के कानूनी या वित्तीय परिणाम हैं, तो एक मानव पेशेवर को समान संदर्भ सौंपने के लिए वृद्धि लिंक का उपयोग करें।",
			"guide.patents.title": "पेटेंट इंटेलिजेंस कैसे काम करता है",
			"guide.patents.body": "अपने सूत्रीकरण का वर्णन सरल शब्दों में करें। खोज अवधारणा और घटक (सिमेंटिक) द्वारा मेल खाती है, केवल सटीक कीवर्ड द्वारा नहीं, भारतीय और अंतर्राष्ट्रीय पेटेंट कार्यालयों में।\nफ़िल्टर अधिकार क्षेत्र, संयंत्र, स्थिति और स्रोत द्वारा संकीर्ण होते हैं। प्रत्येक परिणाम एक समानता स्कोर दिखाता है और आधिकारिक रजिस्टर से जुड़ता है ताकि आप इसे स्वयं सत्यापित कर सकें।",
			"guide.priorArt.title": "पूर्व-कला प्रवाह कैसे काम करता है",
			"guide.priorArt.body": "यह पृष्ठ एक प्रश्न का उत्तर देता है: “क्या यह पहले से ही प्रलेखित या पेटेंट किया गया है?” ग्राफ साक्ष्य की एक श्रृंखला के रूप में बाएं से दाएं पढ़ता है:\n1. सूत्रीकरण — आपके उत्पाद विचार को तोड़ दिया गया है।\n2. सामग्री — प्रत्येक पता लगाया गया पौधा/खनिज घटक।\n3. टीकेडीएल रिकॉर्ड — भारत की पारंपरिक ज्ञान डिजिटल लाइब्रेरी (पूर्व कला जो पेटेंट को रोक सकती है) में मेल खाता है।\n4. पेटेंट मामले — समान विषय वस्तु का दावा करने वाले मौजूदा आवेदन/अनुदान।\n5. अंतर्राष्ट्रीय रिकॉर्ड — विदेशों में संबंधित WIPO/EPO/USPTO फाइलिंग।\nइसके अंतर्निहित रिकॉर्ड को खोलने के लिए किसी भी नोड का चयन करें: प्राधिकरण, अंश, तिथियां और आधिकारिक स्रोत लिंक। किनारे की मोटाई मैच की ताकत को दर्शाती है।",
			"guide.formulation.title": "वर्गीकरण विज़ार्ड कैसे काम करता है",
			"guide.formulation.body": "चार छोटे सवालों के जवाब दें (इच्छित उपयोग, दावे, सामग्री, प्रस्तुति)। विज़ार्ड एक प्रारंभिक नियामक श्रेणी उत्पन्न करता है - जैसे शास्त्रीय आयुर्वेदिक चिकित्सा बनाम मालिकाना दवा बनाम पूरक - तर्क, जिम्मेदार अधिकारियों और उद्धृत स्रोतों के साथ।\nयह एक छंटाई कदम है: एक मानव पेशेवर को कुछ भी दाखिल करने से पहले वर्गीकरण की पुष्टि करनी चाहिए।",
			"guide.abs.title": "एबीएस जांच कैसे काम करती है",
			"guide.abs.body": "दर्ज करें कि जैविक संसाधन कहां से आता है और आप इसका उपयोग कैसे करना चाहते हैं। यह जांच पारंपरिक ज्ञान संघ, व्यावसायिक उपयोग, पेटेंट इरादे और निर्यात का मूल्यांकन करके एक्सेस और बेनिफिट-शेयरिंग जोखिम स्तर का अनुमान लगाती है।\nयह तब उस ढांचे को इंगित करता है जो लागू होता है (भारत में एनबीए / एसबीबी, विदेशों में नागोया प्रोटोकॉल) और आपको आवश्यक दस्तावेज़ीकरण — फाइलिंग या व्यापार के लिए प्रतिबद्ध होने से पहले।",
			"guide.cost.title": "कॉस्ट प्लानर कैसे काम करता है",
			"guide.cost.body": "एक आईपी साधन (पेटेंट, व्यापार चिह्न, डिजाइन, पीसीटी, मैड्रिड) और आवेदक प्रकार चुनें। आधिकारिक सरकारी शुल्क और पेशेवर/सेवा अनुमान हमेशा अलग-अलग सूचीबद्ध होते हैं, प्रत्येक अपने स्रोत और प्रभावी तिथि के साथ।\nस्लाइडर्स आपको पैमाने (दावे, कक्षाएं, देश) को मॉडल करने देते हैं। दिखाए गए शुल्क अनुसूची संस्करण के विरुद्ध संख्याएं अपडेट होती हैं, इसलिए आपको हमेशा पता चलता है कि किस संशोधन ने अनुमान उत्पन्न किया।",
			"guide.knowledge.title": "नॉलेज एक्सप्लोरर कैसे काम करता है",
			"guide.knowledge.body": "इसके वनस्पति परिवार और जीनस, प्रलेखित पारंपरिक उपयोगों, और आगे शोध करने लायक संबंधित पौधों को देखने के लिए एक औषधीय पौधे का चयन करें।\nप्रत्येक उपयोग का दावा एक टीकेडीएल या आधिकारिक रिकॉर्ड से जुड़ा हुआ है — यह प्रलेखित ज्ञान का एक नक्शा है, प्रभावकारिता की सिफारिश नहीं।",
			"guide.international.title": "अधिकार क्षेत्र का नक्शा कैसे काम करता है",
			"guide.international.body": "इसके आईपी सिस्टम को प्रोफ़ाइल करने के लिए एक देश या क्षेत्र का चयन करें: पेटेंट और ट्रेड मार्क ढांचा, पारंपरिक ज्ञान का इलाज कैसे किया जाता है, एबीएस शासन, और प्रकटीकरण-की-उत्पत्ति आवश्यकताएं।\nप्रत्येक प्रोफ़ाइल आधिकारिक प्राधिकरण से जुड़ती है ताकि आप विदेश में फाइल करने से पहले वर्तमान नियमों की पुष्टि कर सकें।",
			"guide.reports.title": "रिपोर्ट कैसे काम करती हैं",
			"guide.reports.body": "रिपोर्ट्स अन्य कार्यक्षेत्रों से निष्कर्षों को एक दस्तावेज़ में बंडल करती हैं जहाँ प्रत्येक स्रोत उस खोज से जुड़ा रहता है जिसका वह समर्थन करता है।\nयहां संरचना का पूर्वावलोकन करें, फिर निर्यात या साझा करें। इतिहास सूची आपको पहले के सत्रों और रिपोर्टों को फिर से खोलने की सुविधा देती है।",
			"guide.expert.title": "विशेषज्ञ एस्केलेशन कैसे काम करता है",
			"guide.expert.body": "स्वचालित विश्लेषण वहीं रुक जाता है जहां बाध्यकारी निर्णय शुरू होते हैं। अपनी स्थिति का वर्णन करें, एक विषय चुनें, और वैकल्पिक रूप से अपना इन-ऐप विश्लेषण संलग्न करें (सहायक सत्र, साक्ष्य ग्राफ, एबीएस मूल्यांकन)।\nएक योग्य आईपी पेशेवर को वही उद्धृत संदर्भ प्राप्त होता है — ताकि बातचीत शून्य से नहीं, बल्कि सबूत से शुरू हो।",
			"guide.sources.title": "स्रोत रजिस्ट्री कैसे काम करती है",
			"guide.sources.body": "यह उन अधिकारियों की पूरी सूची है जिनका आईपी-शक्ति हवाला देती है। प्रत्येक प्रविष्टि यह दिखाती है कि इसे कौन बनाए रखता है, यह किस अधिकार क्षेत्र को कवर करता है, उपयोग में डेटा संस्करण, और अंतिम बार इसे कब सत्यापित किया गया था।\nयदि किसी स्रोत को पुनः सत्यापित नहीं किया जा सकता है, तो उस पर निर्भर उत्तरों को तथ्य के रूप में प्रस्तुत किए जाने के बजाय \"समीक्षा आवश्यक\" के रूप में चिह्नित किया जाता है।",
			"Evidence brief": "साक्ष्य संक्षिप्त",
			"Source-linked": "स्रोत-लिंक्ड",
			"Image upload is not connected in this build.": "Image upload is not connected in this build.",
			"View source registry": "स्रोत रजिस्ट्री देखें",
			"ILLUSTRATIVE ASSESSMENT": "दृष्टांत मूल्यांकन",
			"LIVE EVIDENCE ARCHITECTURE": "लाइव साक्ष्य वास्तुकला",
			"Start an IP analysis": "आईपी विश्लेषण शुरू करें",
			"(": "(",
			All: "All",
			"content-type": "content-type",
			"Evidence linked": "साक्ष्य लिंक्ड",
			"One evidence system.": "एक साक्ष्य प्रणाली।",
			Knowledge: "ज्ञान",
			"Share links are not connected to a sharing service in this build.": "Share links are not connected to a sharing service in this build.",
			"Inspect evidence trail": "साक्ष्य ट्रेल का निरीक्षण करें",
			"Voice capture is not connected in this build.": "Voice capture is not connected in this build.",
			"Open workspace": "कार्यक्षेत्र खोलें",
			Patent: "पेटेंट",
			"Navigate IP with evidence.": "साक्ष्य के साथ आईपी नेविगेट करें।",
			"Claim / filing": "दावा / फाइलिंग",
			"Six research paths.": "छह शोध पथ।",
			"@tanstack/react-start/server-entry": "@tanstack/react-start/server-entry",
			Decision: "निर्णय",
			"Traditional record": "पारंपरिक रिकॉर्ड",
			"INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE": "भारत का आयुर्वेद + आईपी इंटेलिजेंस वर्कस्पेस",
			Rule: "नियम",
			"Document upload is not connected in this build.": "Document upload is not connected in this build.",
			"Withania somnifera": "विथानिया सोम्निफेरा (अश्वगंधा)",
			"PDF export is not connected to a document service in this build.": "PDF export is not connected to a document service in this build.",
			"Explore patent intelligence": "पेटेंट इंटेलिजेंस का अन्वेषण करें",
			"Protect Ayurveda.": "आयुर्वेद की रक्षा करें।",
			"TKDL records": "टीकेडीएल रिकॉर्ड",
			"Patent records": "पेटेंट रिकॉर्ड",
			Jurisdictions: "अधिकार क्षेत्र",
			"Official sources": "आधिकारिक स्रोत",
			"Potential prior-art signal": "संभावित पूर्व-कला संकेत",
			"Traditional Knowledge Digital Library": "पारंपरिक ज्ञान डिजिटल लाइब्रेरी",
			"Intellectual Property India": "बौद्धिक संपदा भारत",
			"WIPO PATENTSCOPE": "वाइपो पेटेंटस्कोप",
			"AI RESEARCH": "एआई अनुसंधान",
			"AI IP Sahayak": "एआई आईपी सहायक",
			"Ask a question and receive a structured answer with jurisdiction, evidence and source context.": "एक प्रश्न पूछें और अधिकार क्षेत्र, साक्ष्य और स्रोत संदर्भ के साथ एक संरचित उत्तर प्राप्त करें।",
			DISCOVERY: "खोज",
			"Search concepts, claims and jurisdictions without losing the evidence behind each result.": "प्रत्येक परिणाम के पीछे के साक्ष्य को खोए बिना अवधारणाओं, दावों और अधिकार क्षेत्रों की खोज करें।",
			TRACE: "अनुरेखण",
			"Prior-Art Trace": "पूर्व-कला अनुरेखण",
			"Connect formulations, ingredients, traditional records and patent claims in one research trail.": "एक शोध निशान में योगों, अवयवों, पारंपरिक रिकॉर्ड और पेटेंट दावों को कनेक्ट करें।",
			FORMULATION: "सूत्रीकरण",
			"Formulation Intelligence": "सूत्रीकरण इंटेलिजेंस",
			"Screen the likely product category before investing in a filing or market route.": "फाइलिंग या बाजार मार्ग में निवेश करने से पहले संभावित उत्पाद श्रेणी की जांच करें।",
			"TRADITIONAL KNOWLEDGE": "पारंपरिक ज्ञान",
			"Knowledge Explorer": "ज्ञान अन्वेषक",
			"Explore documented Ayurvedic plant knowledge and the records behind traditional-use claims.": "प्रलेखित आयुर्वेदिक पौधों के ज्ञान और पारंपरिक-उपयोग के दावों के पीछे के रिकॉर्ड का अन्वेषण करें।",
			"GLOBAL IP": "वैश्विक आईपी",
			"International IP": "अंतर्राष्ट्रीय आईपी",
			"Compare selected jurisdictions, disclosure expectations and traditional-knowledge treatment.": "चयनित अधिकार क्षेत्रों, प्रकटीकरण अपेक्षाओं और पारंपरिक-ज्ञान उपचार की तुलना करें।",
			"Evidence is not a footnote.": "साक्ष्य कोई फुटनोट नहीं है।",
			"It is the product.": "यह उत्पाद है।",
			"Explore the evidence layer": "साक्ष्य परत का अन्वेषण करें",
			"AI Assistant": "एआई सहायक",
			"Prior Art": "पूर्व-कला",
			"ABS Check": "एबीएस चेक",
			"Cost Planner": "लागत योजनाकार",
			"Source registry": "स्रोत रजिस्ट्री",
			"Human review": "मानव समीक्षा",
			"last verified": "अंतिम सत्यापित",
			Home: "मुखपृष्ठ",
			Formulation: "सूत्रीकरण",
			Reports: "रिपोर्ट",
			"Expert Help": "विशेषज्ञ सहायता",
			"Formulation & Compliance": "सूत्रीकरण और अनुपालन",
			"Knowledge & Evidence": "ज्ञान और साक्ष्य",
			"Global IP": "वैश्विक आईपी",
			"Reports & Support": "रिपोर्ट और समर्थन",
			Assistant: "सहायक",
			Patents: "पेटेंट",
			"TKDL reference set": "टीकेडीएल संदर्भ सेट",
			Search: "खोज",
			"LIVE WORKSPACE": "लाइव कार्यक्षेत्र",
			"Documented evidence": "प्रलेखित साक्ष्य",
			"Review required": "समीक्षा आवश्यक",
			Informational: "सूचनात्मक",
			"group-[.toast]:text-muted-foreground": "group-[.toast]:text-muted-foreground",
			English: "English",
			हिन्दी: "हिन्दी",
			मराठी: "मराठी",
			"Standardised Withania somnifera root extract composition for stress modulation": "तनाव मॉड्यूलेशन के लिए मानकीकृत विथानिया सोम्निफेरा (अश्वगंधा) जड़ निकालने की संरचना",
			"Synergistic botanical composition comprising Withania and Bacopa for cognitive support": "संज्ञानात्मक समर्थन के लिए विथानिया और बाकोपा युक्त सहक्रियात्मक वनस्पति संरचना",
			"Ashwagandha churna preparation described in classical Ayurvedic literature": "शास्त्रीय आयुर्वेदिक साहित्य में वर्णित अश्वगंधा चूर्ण निर्माण",
			"Curcuminoid-neem composition with enhanced dermal bioavailability": "बढ़ी हुई त्वचीय जैव उपलब्धता के साथ करक्यूमिनोइड-नीम संरचना",
			"Process for preparing Emblica officinalis polyphenol concentrate": "एम्ब्लिका ऑफिसिनैलिस पॉलीफेनोल सांद्रण तैयार करने की प्रक्रिया",
			"Giloy–Tulsi decoction granule with improved shelf stability": "बेहतर शेल्फ स्थिरता के साथ गिलोय-तुलसी काढ़ा ग्रेन्युल",
			"Glycyrrhiza glabra extract for mucosal soothing compositions": "म्यूकोसल सुखदायक रचनाओं के लिए ग्लइसीरिज़ा ग्लबरा अर्क",
			"Haridra–Nimba lepa for skin disorders in classical formularies": "शास्त्रीय योगों में त्वचा विकारों के लिए हरिद्रा-निंबा लेप",
			"Ashwagandha stress-support capsule": "अश्वगंधा तनाव-समर्थन कैप्सूल",
			"Withania somnifera (root)": "विथानिया सोम्निफेरा (जड़)",
			"Bacopa monnieri (whole plant)": "बाकोपा मोननेरी (संपूर्ण पौधा)",
			"TKDL/AY/1284": "TKDL/AY/1284",
			"TKDL/AY/2210": "TKDL/AY/2210",
			"IN 384512": "IN 384512",
			"WO 2023/154872": "WO 2023/154872",
			"EP 3 921 044 B1": "EP 3 921 044 B1",
			"Ashwagandha stress formulation — India & EU protectability": "अश्वगंधा तनाव निर्माण - भारत और यूरोपीय संघ की सुरक्षा",
			"IP intelligence report — Haridra–Nimba topical": "आईपी इंटेलिजेंस रिपोर्ट - हरिद्रा-निंबा सामयिक",
			"Semantic search — turmeric + neem skin inflammation": "सिमेंटिक खोज - हल्दी + नीम त्वचा की सूजन",
			"Startup patent filing + PCT designation plan": "स्टार्टअप पेटेंट फाइलिंग + पीसीटी पदनाम योजना",
			"ABS documentation review — wild-collected Giloy": "एबीएस दस्तावेज़ीकरण समीक्षा - जंगली एकत्रित गिलोय",
			"Amla polyphenol concentrate — freedom-to-operate questions": "आंवला पॉलीफेनोल सांद्रण - संचालन की स्वतंत्रता के प्रश्न",
			"IP-SAKTI Sahayak — Ayurveda IP & Regulatory Intelligence": "आईपी-शक्ति सहायक - आयुर्वेद आईपी और नियामक इंटेलिजेंस",
			"Biodiversity & ABS Check — IP-SAKTI Sahayak": "जैव विविधता और एबीएस चेक - आईपी-शक्ति सहायक",
			"High — documentation likely required": "उच्च — दस्तावेज़ीकरण संभवतः आवश्यक है",
			"Medium — review required": "मध्यम — समीक्षा आवश्यक",
			"Low — limited signals detected": "कम — सीमित संकेत मिले",
			"ABS RISK RADAR": "एबीएस जोखिम रडार",
			"Compliance workflow": "अनुपालन वर्कफ़्लो",
			"Access and benefit-sharing signals for the biological resource, its origin and any associated traditional knowledge.": "जैविक संसाधन, उसकी उत्पत्ति और किसी भी जुड़े पारंपरिक ज्ञान के लिए पहुंच और लाभ-साझाकरण संकेत।",
			"Botanical name, e.g. Withania somnifera": "वानस्पतिक नाम, उदाहरण के लिए विथानिया सोम्निफेरा",
			"Associated traditional knowledge used?": "जुड़े पारंपरिक ज्ञान का उपयोग किया गया?",
			"Commercial use intended?": "व्यावसायिक उपयोग का इरादा?",
			"Patent protection planned?": "पेटेंट संरक्षण की योजना बनाई?",
			"Export market planned?": "निर्यात बाजार की योजना बनाई?",
			"AI Assistant — IP-SAKTI Sahayak": "एआई सहायक — आईपी-शक्ति सहायक",
			"AI RESEARCH COMMAND": "एआई अनुसंधान कमांड",
			"AI workspace": "एआई कार्यक्षेत्र",
			"Answers are assembled from official records and always carry jurisdiction, evidence and limitations. Information, not legal advice.": "उत्तर आधिकारिक रिकॉर्ड से एकत्र किए गए हैं और हमेशा अधिकार क्षेत्र, साक्ष्य और सीमाएँ रखते हैं। जानकारी, कानूनी सलाह नहीं।",
			"Use example": "उदाहरण का प्रयोग करें",
			Voice: "आवाज़",
			Document: "दस्तावेज़",
			Image: "छवि",
			Analyse: "विश्लेषण करें",
			"Retrieval + agreement score": "पुनर्प्राप्ति + सहमति स्कोर",
			Evidence: "साक्ष्य",
			"All official records": "सभी आधिकारिक रिकॉर्ड",
			"Answer sets kept apart": "उत्तर सेट अलग रखे गए",
			"Open evidence explorer": "साक्ष्य एक्सप्लोरर खोलें",
			"Describe a formulation, product or IP concern. The assistant will retrieve official records before offering any assessment.": "किसी सूत्रीकरण, उत्पाद या आईपी चिंता का वर्णन करें। मूल्यांकन प्रस्तुत करने से पहले सहायक आधिकारिक रिकॉर्ड प्राप्त करेगा।",
			"Source agreement": "स्रोत समझौता",
			"Coverage of jurisdiction": "अधिकार क्षेत्र की कवरेज",
			"IP Cost Planner — IP-SAKTI Sahayak": "आईपी लागत योजनाकार — आईपी-शक्ति सहायक",
			Individual: "व्यक्तिगत",
			Startup: "स्टार्टअप",
			"Small Enterprise": "छोटा उद्यम",
			"Educational Institution": "शैक्षणिक संस्थान",
			"Other (large entity)": "अन्य (बड़ी इकाई)",
			"Request for early publication": "शीघ्र प्रकाशन के लिए अनुरोध",
			"Request for examination": "परीक्षा के लिए अनुरोध",
			"Drafting and filing (professional)": "प्रारूपण और दाखिल करना (पेशेवर)",
			"Prosecution and response handling (professional)": "मुकदमा और प्रतिक्रिया प्रबंधन (पेशेवर)",
			"PCT international filing fee": "पीसीटी अंतर्राष्ट्रीय फाइलिंग शुल्क",
			"Local agent fees": "स्थानीय एजेंट शुल्क",
			"Translation of specification": "विनिर्देश का अनुवाद",
			"FILING ECONOMICS": "फाइलिंग अर्थशास्त्र",
			Estimator: "अनुमानक",
			"Official government fees and professional/service estimates are always shown separately, each with a source and an effective date.": "आधिकारिक सरकारी शुल्क और पेशेवर/सेवा अनुमान हमेशा अलग-अलग दिखाए जाते हैं, प्रत्येक एक स्रोत और प्रभावी तिथि के साथ।",
			"Number of claims ·": "दावों की संख्या ·",
			"Specification pages ·": "विनिर्देश पृष्ठ ·",
			"Designations ·": "पदनाम ·",
			"Official government fee": "आधिकारिक सरकारी शुल्क",
			"Professional/service estimate": "पेशेवर/सेवा अनुमान",
			"Market range, not an official fee": "बाजार सीमा, आधिकारिक शुल्क नहीं",
			"Estimated total": "अनुमानित कुल",
			"Official government fees": "आधिकारिक सरकारी शुल्क",
			"Professional/service estimates": "पेशेवर/सेवा अनुमान",
			"Expert Escalation — IP-SAKTI Sahayak": "विशेषज्ञ वृद्धि — आईपी-शक्ति सहायक",
			"Time-critical filings": "समय-महत्वपूर्ण फाइलिंग",
			"An opposition window, examination deadline, or priority date is approaching and automated guidance is not sufficient.": "विरोध की खिड़की, परीक्षा की समय सीमा, या प्राथमिकता तिथि आ रही है और स्वचालित मार्गदर्शन पर्याप्त नहीं है।",
			"Binding decisions": "बाध्यकारी निर्णय",
			"You are about to sign a licence, file an application, or export a formulation — anything with legal or financial consequence.": "आप एक लाइसेंस पर हस्ताक्षर करने, एक आवेदन दाखिल करने, या एक फॉर्मूलेशन का निर्यात करने वाले हैं — कानूनी या वित्तीय परिणाम के साथ कुछ भी।",
			"Conflicting signals": "परस्पर विरोधी संकेत",
			"The evidence graph shows prior-art risk or a jurisdiction profile conflicts with your plans. A professional must weigh in.": "साक्ष्य ग्राफ पूर्व-कला जोखिम को दर्शाता है या एक अधिकार क्षेत्र प्रोफ़ाइल आपकी योजनाओं के साथ संघर्ष करता है। एक पेशेवर को विचार करना चाहिए।",
			"EXPERT ESCALATION": "विशेषज्ञ वृद्धि",
			"Expert escalation": "विशेषज्ञ वृद्धि",
			"When the evidence ends,": "जब साक्ष्य समाप्त हो जाता है,",
			"IP-SAKTI provides information, not legal advice. For binding decisions, escalate to a qualified IP professional — with your analysis context attached.": "आईपी-शक्ति जानकारी प्रदान करता है, कानूनी सलाह नहीं। बाध्यकारी निर्णयों के लिए, एक योग्य आईपी पेशेवर के पास जाएँ — अपने विश्लेषण संदर्भ के साथ।",
			"In production this would route to a vetted IP professional.": "उत्पादन में यह एक जांचे गए आईपी पेशेवर को भेजा जाएगा।",
			"Submit request": "अनुरोध सबमिट करें",
			"Request captured in this local session. A production build would notify the\n              expert network and open a tracked case.": "अनुरोध इस स्थानीय सत्र में कैप्चर किया गया। उत्पादन निर्माण विशेषज्ञ नेटवर्क को सूचित करेगा और एक ट्रैक किया गया मामला खोलेगा।",
			"Patent screening, TKDL cross-referencing, fee estimation, and jurisdictional\n              orientation remain automated and citation-grounded. Escalation is additive — it\n              never replaces the transparent evidence layer.": "पेटेंट स्क्रीनिंग, टीकेडीएल क्रॉस-रेफ़रेंसिंग, शुल्क अनुमान और क्षेत्राधिकार अभिविन्यास स्वचालित और उद्धरण-आधारित बने हुए हैं। वृद्धि योगात्मक है - यह कभी भी पारदर्शी साक्ष्य परत को प्रतिस्थापित नहीं करता है।",
			"Automated + cited": "स्वचालित + उद्धृत",
			"Human review for binding steps": "बाध्यकारी चरणों के लिए मानव समीक्षा",
			"Formulation Classification — IP-SAKTI Sahayak": "सूत्रीकरण वर्गीकरण — आईपी-शक्ति सहायक",
			Cosmetic: "प्रसाधन सामग्री",
			Phytopharmaceutical: "फाइटोफार्मास्युटिकल",
			"Ayurveda-Aahar / nutraceutical": "आयुर्वेद-आहार / न्यूट्रास्युटिकल",
			"Classical / generic Ayurvedic medicine": "शास्त्रीय / जेनेरिक आयुर्वेदिक चिकित्सा",
			"Patent / proprietary medicine": "पेटेंट / मालिकाना चिकित्सा",
			"New / non-classical drug": "नई / गैर-शास्त्रीय दवा",
			"FORMULATION LAB": "सूत्रीकरण लैब",
			"Guided wizard": "निर्देशित विज़ार्ड",
			"Four short questions produce a preliminary regulatory classification with reasoning, authorities and cited sources.": "चार छोटे प्रश्न तर्क, अधिकारियों और उद्धृत स्रोतों के साथ प्रारंभिक नियामक वर्गीकरण उत्पन्न करते हैं।",
			Step: "चरण",
			of: "का",
			Back: "पीछे",
			"Start again": "फिर से शुरू करें",
			"IP-SAKTI Sahayak — Ayurvedic IP Intelligence": "आईपी-शक्ति सहायक — आयुर्वेदिक आईपी इंटेलिजेंस",
			"International IP Intelligence — IP-SAKTI Sahayak": "अंतर्राष्ट्रीय आईपी इंटेलिजेंस — आईपी-शक्ति सहायक",
			"GLOBAL IP ATLAS": "वैश्विक आईपी एटलस",
			"Jurisdiction map": "अधिकार क्षेत्र मानचित्र",
			"Select a jurisdiction to see its patent and trade mark framework, traditional knowledge treatment, ABS regime and disclosure requirements.": "इसके पेटेंट और व्यापार चिह्न ढांचे, पारंपरिक ज्ञान उपचार, एबीएस शासन और प्रकटीकरण आवश्यकताओं को देखने के लिए एक अधिकार क्षेत्र का चयन करें।",
			"Global IP coverage": "वैश्विक आईपी कवरेज",
			profiles: "प्रोफ़ाइल",
			Supported: "समर्थित",
			Selected: "चयनित",
			Network: "नेटवर्क",
			"Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.": "इसके पेटेंट, टीके, एबीएस और प्रकटीकरण प्रोफ़ाइल को खोलने के लिए एक समर्थित अधिकार क्षेत्र मार्कर पर क्लिक करें।",
			Trademark: "ट्रेडमार्क",
			"Traditional knowledge": "पारंपरिक ज्ञान",
			ABS: "एबीएस",
			"Disclosure requirements": "प्रकटीकरण आवश्यकताएं",
			"Official authority": "आधिकारिक प्राधिकरण",
			"Traditional Knowledge Family Explorer — IP-SAKTI Sahayak": "पारंपरिक ज्ञान परिवार अन्वेषक — आईपी-शक्ति सहायक",
			"related candidates": "संबंधित उम्मीदवार",
			"KNOWLEDGE GRAPH": "ज्ञान ग्राफ",
			"Botanical intelligence": "वानस्पतिक इंटेलिजेंस",
			"Botanical family, genus, documented traditional use and related research candidates — with the official record behind each claim.": "वानस्पतिक परिवार, जीनस, प्रलेखित पारंपरिक उपयोग और संबंधित अनुसंधान उम्मीदवार — प्रत्येक दावे के पीछे आधिकारिक रिकॉर्ड के साथ।",
			"Genus ·": "जीनस ·",
			"Family ·": "परिवार ·",
			"Evidence level ·": "साक्ष्य स्तर ·",
			"Evidence ·": "साक्ष्य ·",
			"Patent Intelligence — IP-SAKTI Sahayak": "पेटेंट इंटेलिजेंस — IP-SAKTI सहायक",
			"PATENT DISCOVERY": "पेटेंट खोज",
			"Concept retrieval": "अवधारणा पुनर्प्राप्ति",
			"Find patents and prior art by concept, not just keywords.": "केवल कीवर्ड द्वारा नहीं, अवधारणा द्वारा पेटेंट और पूर्व-कला खोजें।",
			"retrieval ·": "पुनर्प्राप्ति ·",
			"Widen the jurisdiction, clear the plant filter, or try a hybrid search to recover borderline matches.": "सीमावर्ती मैचों को पुनर्प्राप्त करने के लिए अधिकार क्षेत्र को चौड़ा करें, प्लांट फ़िल्टर साफ़ करें, या हाइब्रिड खोज का प्रयास करें।",
			"A score such as": "एक स्कोर जैसे",
			"describes how\n              closely a record matches your described concept in retrieval space. It is not a measure\n              of infringement, validity or grant probability.": "वर्णन करता है कि पुनर्प्राप्ति स्थान में आपके वर्णित अवधारणा से रिकॉर्ड कितनी बारीकी से मेल खाता है। यह उल्लंघन, वैधता या अनुदान संभावना का माप नहीं है।",
			"Jurisdiction ·": "अधिकार क्षेत्र ·",
			"Plant ·": "पौधा ·",
			"Status ·": "स्थिति ·",
			"Sources ·": "स्रोत ·",
			"Evidence Explorer — Prior Art | IP-SAKTI Sahayak": "साक्ष्य एक्सप्लोरर — पूर्व-कला | आईपी-शक्ति सहायक",
			"Your formulation": "आपका सूत्रीकरण",
			"Detected ingredients": "पाए गए तत्व",
			"Patent cases": "पेटेंट मामले",
			"International records": "अंतर्राष्ट्रीय रिकॉर्ड",
			"PRIOR-ART TRACE": "पूर्व-कला अनुरेखण",
			"Evidence explorer": "साक्ष्य एक्सप्लोरर",
			"Formulation → detected ingredients → TKDL records → patent cases → international records. Select any node to inspect the underlying record.": "सूत्रीकरण → पाए गए तत्व → टीकेडीएल रिकॉर्ड → पेटेंट मामले → अंतर्राष्ट्रीय रिकॉर्ड। अंतर्निहित रिकॉर्ड का निरीक्षण करने के लिए किसी भी नोड का चयन करें।",
			"No prior art graph can be constructed for this query.": "इस क्वेरी के लिए कोई पूर्व कला ग्राफ नहीं बनाया जा सकता है।",
			"Case / record number": "मामला / रिकॉर्ड संख्या",
			Outcome: "परिणाम",
			"Source date": "स्रोत तिथि",
			Verification: "सत्यापन",
			Authority: "प्राधिकरण",
			"Open official source": "आधिकारिक स्रोत खोलें",
			"Reports & History — IP-SAKTI Sahayak": "रिपोर्ट और इतिहास — आईपी-शक्ति सहायक",
			"Executive Summary": "कार्यकारी सारांश",
			"Preliminary assessment of protectability and regulatory route for a standardised Ashwagandha stress-support preparation.": "मानकीकृत अश्वगंधा तनाव-समर्थन तैयारी के लिए सुरक्षा और नियामक मार्ग का प्रारंभिक मूल्यांकन।",
			"Product Classification": "उत्पाद वर्गीकरण",
			"Patent / proprietary Ayurvedic medicine (preliminary, 81% confidence).": "पेटेंट / मालिकाना आयुर्वेदिक चिकित्सा (प्रारंभिक, 81% विश्वास)।",
			"India, with international review for EPO and USPTO designations.": "ईपीओ और यूएसपीटीओ पदनामों के लिए अंतरराष्ट्रीय समीक्षा के साथ भारत।",
			"IP Types": "आईपी प्रकार",
			"Process patent, composition patent, trade mark, trade secret.": "प्रक्रिया पेटेंट, संरचना पेटेंट, ट्रेड मार्क, व्यापार रहस्य।",
			"Prior-Art Findings": "पूर्व-कला निष्कर्ष",
			"Documented classical preparations and one granted Indian claim in the same concept space.": "उसी अवधारणा अंतरिक्ष में प्रलेखित शास्त्रीय तैयारी और एक अनुदानित भारतीय दावा।",
			"TKDL Evidence": "टीकेडीएल साक्ष्य",
			"TKDL/AY/1284 and TKDL/AY/2210 — documented classical preparations.": "TKDL/AY/1284 और TKDL/AY/2210 - प्रलेखित शास्त्रीय तैयारी।",
			"WIPO Evidence": "वाइपो साक्ष्य",
			"WO 2023/154872 — combination claim covering Withania with Bacopa.": "WO 2023/154872 — संयोजन दावा जो विथानिया को बाकोपा के साथ कवर करता है।",
			"ABS Findings": "एबीएस निष्कर्ष",
			"Wild-collected material with associated traditional knowledge — documentation likely required.": "जुड़े पारंपरिक ज्ञान के साथ जंगली-एकत्रित सामग्री - दस्तावेज़ीकरण की आवश्यकता हो सकती है।",
			"International Findings": "अंतर्राष्ट्रीय निष्कर्ष",
			"Absolute novelty standard at the EPO increases the weight of documented disclosures.": "ईपीओ में पूर्ण नवीनता मानक प्रलेखित खुलासे का वजन बढ़ाता है।",
			"Cost Estimate": "लागत अनुमान",
			"Official government fees and professional estimates reported separately.": "आधिकारिक सरकारी शुल्क और पेशेवर अनुमान अलग-अलग बताए गए हैं।",
			"Risk Indicators": "जोखिम संकेतक",
			"Potential prior-art signal; ABS documentation gap; claim-scope uncertainty.": "संभावित पूर्व-कला संकेत; एबीएस प्रलेखन अंतराल; दावा-दायरा अनिश्चितता।",
			"Recommended Next Steps": "अनुशंसित अगले चरण",
			"Full prior-art trace, ABS documentation review, human IP review before filing.": "फाइलिंग से पहले पूर्ण पूर्व-कला ट्रेस, एबीएस प्रलेखन समीक्षा, मानव आईपी समीक्षा।",
			"88% overall, based on retrieval strength and source agreement.": "पुनर्प्राप्ति शक्ति और स्रोत समझौते के आधार पर 88% समग्र।",
			"Reference data; similarity is a retrieval score; no legal conclusion is offered.": "संदर्भ डेटा; समानता एक पुनर्प्राप्ति स्कोर है; कोई कानूनी निष्कर्ष पेश नहीं किया जाता है।",
			"TKDL, IP India, WIPO, Patents Act 1970, National Biodiversity Authority.": "टीकेडीएल, आईपी इंडिया, वाइपो, पेटेंट अधिनियम 1970, राष्ट्रीय जैव विविधता प्राधिकरण।",
			"INTELLIGENCE DOSSIER": "इंटेलिजेंस डोजियर",
			Workspace: "कार्यक्षेत्र",
			"Generate an IP intelligence report where every source stays attached to the finding it supports, and revisit earlier work.": "एक आईपी खुफिया रिपोर्ट तैयार करें जहां प्रत्येक स्रोत उस खोज से जुड़ा रहता है जिसका वह समर्थन करता है, और पहले के काम पर फिर से विचार करें।",
			Preview: "पूर्वावलोकन",
			"Download PDF": "पीडीएफ डाउनलोड करें",
			Share: "साझा करें",
			"Jurisdiction coverage": "अधिकार क्षेत्र कवरेज",
			"Source Registry — IP-SAKTI Sahayak": "स्रोत रजिस्ट्री — आईपी-शक्ति सहायक",
			"SOURCE REGISTRY": "स्रोत रजिस्ट्री",
			"Source transparency": "स्रोत पारदर्शिता",
			"Every answer,": "प्रत्येक उत्तर,",
			"i18nPrefix=\"pg.sources\"": "i18nPrefix=\"pg.sources\"",
			"IP-SAKTI never answers from model memory alone. Each claim cites an official registry, statute, or treaty body listed here — with its last verification date.": "आईपी-शक्ति कभी भी केवल मॉडल मेमोरी से उत्तर नहीं देता है। प्रत्येक दावा यहां सूचीबद्ध एक आधिकारिक रजिस्ट्री, क़ानून या संधि निकाय का हवाला देता है - इसकी अंतिम सत्यापन तिथि के साथ।",
			"Across 3 jurisdiction tiers": "3 अधिकार क्षेत्र स्तरों के पार",
			"Verification cadence": "सत्यापन ताल",
			"Fee schedules & registries re-checked": "शुल्क अनुसूचियों और रजिस्ट्रियों की फिर से जाँच की गई",
			"Citations in answers": "उत्तरों में उद्धरण",
			"Unsourced statements are flagged": "बिना स्रोत वाले बयानों को चिह्नित किया गया है",
			"Synced Sep 2026": "सितंबर 2026 समन्वयित",
			Verified: "सत्यापित",
			"When a source cannot be reached, the interface marks dependent claims": "जब किसी स्रोत तक नहीं पहुंचा जा सकता है, तो इंटरफ़ेस आश्रित दावों को चिह्नित करता है",
			"instead of guessing.": "अनुमान लगाने के बजाय।",
			"Coverage currently spans India (TKDL, CGPDTM, Ayush, NBA) and the principal\n            international systems (WIPO, EPO, USPTO, Nagoya Protocol). National-phase detail for\n            other jurisdictions is summarised from WIPO aggregates and may lag local amendments.": "कवरेज वर्तमान में भारत (TKDL, CGPDTM, आयुष, NBA) और प्रमुख अंतर्राष्ट्रीय प्रणालियों (WIPO, EPO, USPTO, नागोया प्रोटोकॉल) तक फैला हुआ है। अन्य न्यायालयों के लिए राष्ट्रीय-चरण विवरण WIPO समुच्चय से संक्षेपित किया गया है और स्थानीय संशोधनों से पिछड़ सकता है।"
		} },
		mr: { translation: {
			"Every claim needs a traceable authority": "प्रत्येक दाव्याला शोधता येण्याजोग्या अधिकाराची आवश्यकता असते",
			"anchored to an authority.": "एका अधिकाराशी जोडलेले.",
			"Registered sources": "नोंदणीकृत स्रोत",
			"<0>...</0>Synced Sep 2026": "<0>...</0>सप्टेंबर 2026 मध्ये सिंक केले",
			"<0>...</0>Verified{{var1}}": "<0>...</0>सत्यापित केले{{var1}}",
			"How verification works": "सत्यापन कसे कार्य करते",
			"Each source is checked against its official publication on a weekly cycle.": "साप्ताहिक चक्रावर प्रत्येक स्रोताची त्याच्या अधिकृत प्रकाशनाशी पडताळणी केली जाते.",
			"Fee schedules and statutory texts are diffed; changes invalidate cached answers.": "शुल्क वेळापत्रक आणि वैधानिक ग्रंथांची तुलना केली जाते; बदल कॅशे केलेली उत्तरे अवैध ठरवतात.",
			"Answers display the verification date of the oldest source they rely on.": "उत्तरे ज्या सर्वात जुन्या स्रोतावर अवलंबून असतात त्याची पडताळणी तारीख प्रदर्शित करतात.",
			"When a source cannot be reached, the interface marks dependent claims{{var0}} <1>...</1>instead of guessing.": "जेव्हा एखाद्या स्रोतापर्यंत पोहोचता येत नाही, तेव्हा इंटरफेस अंदाज लावण्याऐवजी अवलंबून असलेल्या दाव्यांना {{var0}} <1>...</1> चिन्हांकित करतो.",
			"Coverage boundaries": "कव्हरेज सीमा",
			"Package findings into a decision-ready report": "निष्कर्ष निर्णय-तयार अहवालात पॅकेज करा",
			"Reports & history": "अहवाल आणि इतिहास",
			"<0>...</0>Preview": "<0>...</0>पूर्वावलोकन",
			"<0>...</0>Download PDF": "<0>...</0>पीडीएफ डाउनलोड करा",
			"<0>...</0>Share": "<0>...</0>सामायिक करा",
			"Generate report": "अहवाल तयार करा",
			"Recent activity": "अलीकडील क्रियाकलाप",
			"Generate IP Intelligence Report": "आयपी इंटेलिजेंस अहवाल तयार करा",
			wipo: "वाइपो",
			"Report confidence": "अहवाल विश्वास",
			"15 sections": "15 विभाग",
			"5 official sources": "5 अधिकृत स्रोत",
			"Preliminary assessment": "प्राथमिक मूल्यांकन",
			"Reports summarise retrieved evidence. They are not legal opinions, freedom-to-operate clearances or regulatory approvals.": "अहवाल प्राप्त झालेल्या पुराव्यांचा सारांश देतात. ही कायदेशीर मते, कार्य करण्याचे स्वातंत्र्य किंवा नियामक मान्यता नाहीत.",
			Item: "आयटम",
			Type: "प्रकार",
			Date: "तारीख",
			Jurisdiction: "अधिकार क्षेत्र",
			Confidence: "आत्मविश्वास",
			Status: "स्थिती",
			"{{var0}}%": "{{var0}}%",
			"Connect claims to evidence": "दाव्यांना पुराव्यांशी जोडा",
			"Prior-art trace": "पूर्व-कला (Prior-art) शोध",
			"No prior art found": "कोणतीही पूर्व-कला आढळली नाही",
			"Prior art evidence graph": "पूर्व-कला पुरावा आलेख",
			"Graph edges show documented relationships in the reference dataset. They do not assert any legal conclusion.": "ग्राफ कडा संदर्भ डेटासेटमधील दस्तऐवजीकरण केलेले संबंध दर्शवतात. ते कोणताही कायदेशीर निष्कर्ष काढत नाहीत.",
			"Evidence node": "पुरावा नोड",
			"User submission": "वापरकर्ता सबमिशन",
			"Not applicable": "लागू नाही",
			"Open official source<0>...</0>": "अधिकृत स्रोत उघडा<0>...</0>",
			"Trace summary": "शोध सारांश",
			"· 2 ingredients detected from the described formulation.": "· वर्णन केलेल्या सूत्रीकरणातून 2 घटकांचा शोध लागला.",
			"· 2 documented traditional knowledge records located.": "· 2 दस्तऐवजीकरण केलेले पारंपारिक ज्ञान रेकॉर्ड सापडले.",
			"· 1 granted Indian claim in the same concept space.": "· समान संकल्पना जागेत 1 मंजूर केलेला भारतीय दावा.",
			"· 2 international records requiring review.": "· पुनरावलोकनाची आवश्यकता असलेले 2 आंतरराष्ट्रीय रेकॉर्ड.",
			"Further verification required": "पुढील पडताळणी आवश्यक आहे",
			"Documented prior art does not automatically invalidate any patent. Invalidity and infringement questions require formal legal analysis by a qualified professional.": "दस्तऐवजीकरण केलेली पूर्व-कला आपोआप कोणतेही पेटंट अवैध ठरवत नाही. अवैधता आणि उल्लंघनाच्या प्रश्नांसाठी पात्र व्यावसायिकाद्वारे औपचारिक कायदेशीर विश्लेषण आवश्यक आहे.",
			"{{var0}}· published{{var1}}": "{{var0}}· प्रकाशित{{var1}}",
			"Why relevant": "का संबंधित",
			"Conceptual similarity": "वैचारिक समानता",
			"Retrieval score — not a legal probability.": "पुनर्प्राप्ती स्कोअर - कायदेशीर संभाव्यता नाही.",
			Concepts: "संकल्पना",
			Sources: "स्रोत",
			"Search the prior landscape": "पूर्वीचे लँडस्केप शोधा",
			"Patent Intelligence": "पेटंट इंटेलिजेंस",
			"Describe your invention or formulation in your own words": "तुमचा शोध किंवा सूत्रीकरण तुमच्या स्वतःच्या शब्दात सांगा",
			"Describe your invention or formulation in your own words...": "तुमचा शोध किंवा सूत्रीकरण तुमच्या स्वतःच्या शब्दात सांगा...",
			"{{var0}}Search": "{{var0}}शोधा",
			"Try:": "प्रयत्न करा:",
			India: "भारत",
			International: "आंतरराष्ट्रीय",
			Both: "दोन्ही",
			"Search type": "शोध प्रकार",
			"rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground": "rounded px-3 py-1.5 text-xs font-semibold bg-saffron text-saffron-foreground",
			"rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground": "rounded px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
			Plant: "वनस्पती",
			"All plants": "सर्व वनस्पती",
			"<0>...</0>Sources": "<0>...</0>स्रोत",
			"Retrieving records…": "रेकॉर्ड प्राप्त करत आहे…",
			"{{var0}}retrieval ·{{var1}}· sorted by conceptual similarity": "{{var0}}पुनर्प्राप्ती ·{{var1}}· वैचारिक समानतेनुसार क्रमवारी लावलेले",
			"No records match these filters": "कोणतेही रेकॉर्ड या फिल्टरशी जुळत नाहीत",
			"Reset filters": "फिल्टर रीसेट करा",
			"Reading similarity": "समानता वाचन",
			"A score such as<0>...</0>describes how closely a record matches your described concept in retrieval space. It is not a measure of infringement, validity or grant probability.": "<0>...</0> सारखा स्कोअर हे स्पष्ट करतो की पुनर्प्राप्ती क्षेत्रात एखादा रेकॉर्ड तुमच्या वर्णन केलेल्या संकल्पनेशी किती जवळून जुळतो. हे उल्लंघन, वैधता किंवा अनुदान संभाव्यतेचे मोजमाप नाही.",
			"Filters applied": "फिल्टर लागू केले",
			"Jurisdiction ·{{var0}}": "अधिकार क्षेत्र ·{{var0}}",
			"Plant ·{{var0}}": "वनस्पती ·{{var0}}",
			"Status ·{{var0}}": "स्थिती ·{{var0}}",
			"Sources ·{{var0}}of{{var1}}": "स्रोत ·{{var1}} पैकी {{var0}}",
			"Evidence level · official records preferred": "पुराव्याची पातळी · अधिकृत रेकॉर्डला प्राधान्य",
			"Results are preliminary signals from a reference dataset. Verify every record against the official register before relying on it.": "परिणाम हे संदर्भ डेटासेटमधील प्राथमिक संकेत आहेत. कोणत्याही रेकॉर्डवर अवलंबून राहण्यापूर्वी त्याची अधिकृत नोंदणीशी पडताळणी करा.",
			"{{var0}}related candidates": "{{var0}}संबंधित उमेदवार",
			"Map botanical knowledge into defensible evidence": "वनस्पति ज्ञानाचा बचाव करण्यायोग्य पुराव्यात नकाशा तयार करा",
			"Traditional Knowledge Family Explorer": "पारंपारिक ज्ञान कुटुंब अन्वेषक",
			"rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground": "rounded-md bg-saffron px-3 py-1.5 text-xs font-semibold text-saffron-foreground",
			"rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground": "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-saffron/40 hover:text-foreground",
			"Genus ·{{var0}}": "जीनस ·{{var0}}",
			"Family ·{{var0}}": "कुटुंब ·{{var0}}",
			"Evidence level ·{{var0}}": "पुराव्याची पातळी ·{{var0}}",
			"Traditional use": "पारंपारिक वापर",
			"Plant part": "वनस्पतीचा भाग",
			"Formulation role": "सूत्रीकरण भूमिका",
			"Official source": "अधिकृत स्रोत",
			"Potential alternative candidates for further research": "पुढील संशोधनासाठी संभाव्य पर्यायी उमेदवार",
			"Evidence ·{{var0}}": "पुरावा ·{{var0}}",
			"Load more candidates": "अधिक उमेदवार लोड करा",
			"Same family or genus does not establish medicinal equivalence or freedom from patent infringement. Candidates are research leads only, never substitutes.": "समान कुटुंब किंवा वंश औषधी समतुल्यता किंवा पेटंट उल्लंघनापासून स्वातंत्र्य स्थापित करत नाही. उमेदवार केवळ संशोधन लीड्स आहेत, कधीही पर्याय नाहीत.",
			"Move from India to the world": "भारतातून जगाकडे जा",
			"International IP intelligence": "आंतरराष्ट्रीय आयपी इंटेलिजेंस",
			"Supported jurisdictions": "समर्थित अधिकार क्षेत्रे",
			"<0>...</0>Global IP coverage": "<0>...</0>जागतिक आयपी कव्हरेज",
			"Select a supported jurisdiction": "समर्थित अधिकार क्षेत्र निवडा",
			"{{var0}}profiles": "{{var0}}प्रोफाइल",
			"Colourful world map showing IP-SAKTI supported jurisdictions": "आयपी-सक्ती समर्थित अधिकार क्षेत्रे दर्शवणारा रंगीत जगाचा नकाशा",
			"<0>...</0>Supported": "<0>...</0>समर्थित",
			"<0>...</0>Selected": "<0>...</0>निवडलेले",
			"<0>...</0>Network": "<0>...</0>नेटवर्क",
			"<0>...</0>Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.": "<0>...</0>त्याचे पेटंट, टीके, एबीएस आणि प्रकटीकरण प्रोफाइल उघडण्यासाठी समर्थित अधिकार क्षेत्र मार्करवर क्लिक करा.",
			"Jurisdiction profile": "अधिकार क्षेत्र प्रोफाइल",
			"Official authority<0>...</0>": "अधिकृत प्राधिकरण<0>...</0>",
			"Frameworks summarised from official sources in a reference dataset. National practice changes; confirm current requirements with the relevant authority or a local professional.": "संदर्भ डेटासेटमधील अधिकृत स्रोतांमधून सारांशित केलेली फ्रेमवर्क. राष्ट्रीय सराव बदलतात; संबंधित प्राधिकरणासह किंवा स्थानिक व्यावसायिकांसह वर्तमान आवश्यकतांची पुष्टी करा.",
			"<0>...</0>LIVE EVIDENCE ARCHITECTURE": "<0>...</0>थेट पुरावा वास्तुकला",
			"From biological resource to a defensible research trail.": "जैविक संसाधनापासून बचाव करण्यायोग्य संशोधन मार्गापर्यंत.",
			"<0>...</0>Source-linked": "<0>...</0>स्रोताशी जोडलेले",
			"Jurisdiction aware": "अधिकार क्षेत्राबद्दल जागरूक",
			"Verification state retained": "सत्यापन स्थिती कायम ठेवली",
			"<0>...</0>ILLUSTRATIVE ASSESSMENT": "<0>...</0>स्पष्टीकरणात्मक मूल्यांकन",
			"FORMULATION SIGNAL": "सूत्रीकरण संकेत",
			"Stress-support formulation": "तणाव-समर्थन सूत्रीकरण",
			sources: "स्रोत",
			"Documented traditional records and an overlapping granted claim are visible in the current reference set. This is a research signal, not a legal conclusion.": "दस्तऐवजीकरण केलेले पारंपारिक रेकॉर्ड आणि एक अतिव्यापी मंजूर दावा सध्याच्या संदर्भ सेटमध्ये दृश्यमान आहेत. हा एक संशोधन संकेत आहे, कायदेशीर निष्कर्ष नाही.",
			"Inspect evidence trail<0>...</0>": "पुराव्याच्या मार्गाची तपासणी करा<0>...</0>",
			"<0>...</0>INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE": "<0>...</0>भारताचे आयुर्वेद + आयपी इंटेलिजेंस कार्यक्षेत्र",
			"Protect Ayurveda.<0>...</0><1>...</1>": "आयुर्वेदाचे रक्षण करा.<0>...</0><1>...</1>",
			"A structured intelligence workspace for medicinal plants, formulations, traditional knowledge, patents, prior art, ABS and international IP — with the evidence trail kept visible.": "औषधी वनस्पती, सूत्रीकरण, पारंपारिक ज्ञान, पेटंट, पूर्व-कला, एबीएस आणि आंतरराष्ट्रीय आयपी साठी एक संरचित इंटेलिजेंस कार्यक्षेत्र — पुराव्याचा मार्ग दृश्यमान ठेवलेला आहे.",
			"<0>...</0>Start an IP analysis<1>...</1>": "<0>...</0>आयपी विश्लेषण सुरू करा<1>...</1>",
			"<0>...</0>Explore patent intelligence": "<0>...</0>पेटंट इंटेलिजेंस एक्सप्लोर करा",
			"Answering for": "यासाठी उत्तर देत आहे",
			"Evidence-first intelligence": "पुरावा-प्रथम इंटेलिजेंस",
			"Source · jurisdiction · date · verification state stay visible.": "स्रोत · अधिकार क्षेत्र · तारीख · सत्यापन स्थिती दृश्यमान राहते.",
			"View source registry<0>...</0>": "स्रोत रजिस्ट्री पहा<0>...</0>",
			"THE IP-SAKTI WORKSPACE": "आयपी-शक्ती कार्यक्षेत्र",
			"Six research paths.<0>...</0><1>...</1>": "सहा संशोधन मार्ग.<0>...</0><1>...</1>",
			"Move from an idea to a research-backed decision without jumping between disconnected tools.": "डिस्कनेक्ट केलेल्या साधनांमध्ये न उडी मारता एका कल्पनेपासून संशोधन-समर्थित निर्णयाकडे जा.",
			"Open workspace<0>...</0>": "कार्यक्षेत्र उघडा<0>...</0>",
			"WHY IP-SAKTI": "आयपी-शक्ती का",
			"Evidence is not a footnote.<0>...</0><1>...</1>": "पुरावा ही तळटीप नाही.<0>...</0><1>...</1>",
			"The platform is designed to keep research traceable: what was found, where it applies, which source supports it and when that source was verified.": "प्लॅटफॉर्म संशोधन शोधण्यायोग्य ठेवण्यासाठी डिझाइन केले आहे: काय सापडले, ते कोठे लागू होते, कोणता स्रोत त्याचे समर्थन करतो आणि त्या स्रोताची पडताळणी कधी केली गेली.",
			"Explore the evidence layer<0>...</0>": "पुराव्याचा स्तर एक्सप्लोर करा<0>...</0>",
			"Source-linked findings": "स्रोताशी जोडलेले निष्कर्ष",
			"Every meaningful conclusion can point back to its reference set.": "प्रत्येक अर्थपूर्ण निष्कर्ष त्याच्या संदर्भ सेटकडे परत निर्देश करू शकतो.",
			"Jurisdiction-aware by design": "डिझाइननुसार अधिकार क्षेत्र-जागरूक",
			"India and international requirements remain clearly separated.": "भारत आणि आंतरराष्ट्रीय आवश्यकता स्पष्टपणे वेगळ्या राहतात.",
			"Human escalation built in": "ह्युमन एस्केलेशन बिल्ट-इन",
			"Uncertain cases can move from automated analysis to expert review.": "अनिश्चित प्रकरणे स्वयंचलित विश्लेषणातून तज्ञांच्या पुनरावलोकनाकडे जाऊ शकतात.",
			"START WITH A QUESTION": "प्रश्नाने सुरुवात करा",
			"Leave with a research trail.": "संशोधन मार्गासह सोडा.",
			"Ask about a formulation, traditional knowledge record, patent, prior art or international IP route.": "सूत्रीकरण, पारंपारिक ज्ञान रेकॉर्ड, पेटंट, पूर्व-कला किंवा आंतरराष्ट्रीय आयपी मार्गाबद्दल विचारा.",
			"Classify the product before filing": "फाइल करण्यापूर्वी उत्पादनाचे वर्गीकरण करा",
			"What are you developing?": "तुम्ही काय विकसित करत आहात?",
			"h-1 flex-1 rounded-full bg-saffron": "h-1 flex-1 rounded-full bg-saffron",
			"h-1 flex-1 rounded-full bg-muted": "h-1 flex-1 rounded-full bg-muted",
			"Step{{var0}}of{{var1}}": "पायरी {{var0}} पैकी {{var1}}",
			"Describe the product in one line": "उत्पादनाचे एका ओळीत वर्णन करा",
			"Standardised Ashwagandha capsule for stress support": "तणाव समर्थनासाठी प्रमाणित अश्वगंधा कॅप्सूल",
			"<0>...</0>Back": "<0>...</0>मागे",
			Classify: "वर्गीकरण करा",
			Next: "पुढील",
			"Answers recorded": "उत्तरे नोंदवली",
			"·{{var0}}": "·{{var0}}",
			"<0>...</0>Start again": "<0>...</0>पुन्हा सुरू करा",
			"Preliminary classification": "प्राथमिक वर्गीकरण",
			"Reasoning summary": "तर्क सारांश",
			"Applicable regulatory route": "लागू नियामक मार्ग",
			"Relevant authorities": "संबंधित अधिकारी",
			"Potential IP implications": "संभाव्य आयपी परिणाम",
			"Preliminary classification — professional/regulatory verification may be required.": "प्राथमिक वर्गीकरण - व्यावसायिक/नियामक पडताळणी आवश्यक असू शकते.",
			"Continue to ABS check": "एबीएस तपासणी सुरू ठेवा",
			"Request human review": "मानवी पुनरावलोकनाची विनंती करा",
			"Possible categories": "संभाव्य श्रेणी",
			"Classification affects both the regulatory route and the intellectual property strategy. This output is a preliminary assessment and does not constitute regulatory clearance.": "वर्गीकरण नियामक मार्ग आणि बौद्धिक संपदा धोरण या दोन्हीवर परिणाम करते. हे आउटपुट एक प्राथमिक मूल्यांकन आहे आणि ते नियामक मंजुरी देत नाही.",
			"Know when evidence needs a professional": "जेव्हा पुराव्याला व्यावसायिकाची आवश्यकता असते तेव्हा जाणून घ्या",
			"a professional begins.": "एक व्यावसायिक सुरू होतो.",
			"Full name": "पूर्ण नाव",
			"Dr. A. Researcher": "डॉ. ए. संशोधक",
			"Work email": "कार्य ईमेल",
			"you@institution.in": "you@institution.in",
			Organisation: "संस्था",
			"Institute / company": "संस्था / कंपनी",
			Topic: "विषय",
			"Select a topic": "विषय निवडा",
			"Describe the situation": "परिस्थितीचे वर्णन करा",
			"What are you deciding? Which jurisdictions, formulations, or patents are involved? Include any deadlines.": "तुम्ही काय ठरवत आहात? कोणती अधिकार क्षेत्रे, सूत्रे किंवा पेटंट्स समाविष्ट आहेत? कोणत्याही मुदतीचा समावेश करा.",
			"Attach analysis context (optional)": "विश्लेषण संदर्भ जोडा (पर्यायी)",
			"Assistant session — “Turmeric curcumin novelty”": "सहाय्यक सत्र — “हळद कर्क्युमिन नवीनता”",
			"Evidence graph — 8 nodes": "पुरावा आलेख — 8 नोड्स",
			"ABS risk assessment — Moderate": "एबीएस जोखीम मूल्यांकन — मध्यम",
			"Sharing your in-app analysis lets the professional start from the cited evidence instead of a blank page.": "तुमचे इन-अॅप विश्लेषण सामायिक केल्याने व्यावसायिकांना कोऱ्या पृष्ठाऐवजी उद्धृत केलेल्या पुराव्यांपासून सुरुवात करता येते.",
			"<0>...</0>Submit request": "<0>...</0>विनंती सबमिट करा",
			"Typical response window: 2–3 working days (indicative).": "ठराविक प्रतिसाद विंडो: २-३ कामकाजाचे दिवस (सूचक).",
			"<0>...</0>Request captured in this local session. A production build would notify the expert network and open a tracked case.": "<0>...</0>या स्थानिक सत्रात विनंती कॅप्चर केली. प्रॉडक्शन बिल्ड तज्ञ नेटवर्कला सूचित करेल आणि ट्रॅक केलेले केस उघडेल.",
			"When to escalate": "कधी वाढवायचे",
			"What stays automated": "काय स्वयंचलित राहते",
			"Turn filing strategy into a cost plan": "फायलिंग रणनीतीला खर्च योजनेत बदला",
			"IP Cost Planner": "आयपी खर्च योजनाकार",
			Right: "उजवे",
			"rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground": "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
			"Applicant type (India)": "आवेदक प्रकार (भारत)",
			"Filing mode": "फायलिंग मोड",
			"e-filing": "ई-फायलिंग",
			"physical filing": "भौतिक फायलिंग",
			"Number of claims ·{{var0}}": "दाव्यांची संख्या ·{{var0}}",
			"Specification pages ·{{var0}}": "तपशील पृष्ठे ·{{var0}}",
			"Early publication": "लवकर प्रकाशन",
			"Request examination": "तपासणीची विनंती करा",
			"International country": "आंतरराष्ट्रीय देश",
			Currency: "चलन",
			"Designations ·{{var0}}": "पदनाम ·{{var0}}",
			"🇮🇳 India": "🇮🇳 भारत",
			"🌍 International": "🌍 आंतरराष्ट्रीय",
			"Fees change. Always verify the current official fee schedule before filing. Government fees and professional estimates are separate figures and must not be added together as a single official cost.": "शुल्क बदलतात. दाखल करण्यापूर्वी नेहमी वर्तमान अधिकृत शुल्क वेळापत्रक सत्यापित करा. सरकारी शुल्क आणि व्यावसायिक अंदाज हे वेगळे आकडे आहेत आणि एकाच अधिकृत खर्चाच्या रूपात एकत्र जोडले जाऊ नयेत.",
			Amount: "रक्कम",
			Source: "स्रोत",
			Effective: "प्रभावी",
			"Last verified": "शेवटचे सत्यापित",
			"Save estimate": "अंदाज जतन करा",
			"Export breakdown": "निर्यात ब्रेकडाउन",
			"Ask → analyse → evidence": "विचारा → विश्लेषण करा → पुरावा",
			"Ask about protection, classification or compliance": "संरक्षण, वर्गीकरण किंवा अनुपालनाबद्दल विचारा",
			"Your question": "तुमचा प्रश्न",
			"Describe your Ayurvedic product, formulation or IP concern...": "तुमच्या आयुर्वेदिक उत्पादनाचे, सूत्रीकरणाचे किंवा आयपी समस्येचे वर्णन करा...",
			"<0>...</0>Use example": "<0>...</0>उदाहरणाचा वापर करा",
			"<0>...</0>Voice": "<0>...</0>आवाज",
			"<0>...</0>Document": "<0>...</0>कागदपत्र",
			"<0>...</0>Image": "<0>...</0>प्रतिमा",
			"{{var0}}Analyse": "{{var0}}विश्लेषण करा",
			"Processing route": "प्रक्रिया मार्ग",
			"{{var0}}.{{var1}}": "{{var0}}.{{var1}}",
			"rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified": "rounded-md border border-verified/40 bg-verified/10 px-3 py-2 text-xs text-verified",
			"High-level processing stages only. Internal reasoning is not exposed.": "फक्त उच्च-स्तरीय प्रक्रिया टप्पे. अंतर्गत तर्क उघड होत नाही.",
			"Executive answer": "कार्यकारी उत्तर",
			"⚠️ AI analysis unavailable. Showing retrieved official records below.": "⚠️ एआय विश्लेषण अनुपलब्ध. खाली पुनर्प्राप्त केलेले अधिकृत रेकॉर्ड दर्शवित आहे.",
			"Applicable IP types": "लागू आयपी प्रकार",
			"Key findings": "प्रमुख निष्कर्ष",
			"Recommended next steps": "शिफारस केलेली पुढील पायरी",
			"Sources (4 official records)": "स्रोत (४ अधिकृत रेकॉर्ड)",
			"Evidence used": "वापरलेला पुरावा",
			Limitations: "मर्यादा",
			"· Similarity is a retrieval score, not a legal probability.": "· समानता ही एक पुनर्प्राप्ती धावसंख्या आहे, कायदेशीर संभाव्यता नाही.",
			"· Documented prior art does not automatically invalidate any patent.": "· दस्तऐवजीकरण केलेली पूर्व कला आपोआप कोणतेही पेटंट अवैध करत नाही.",
			"· Records reflect a reference dataset snapshot and may not be current.": "· रेकॉर्ड संदर्भ डेटासेट स्नॅपशॉट प्रतिबिंबित करतात आणि वर्तमान नसू शकतात.",
			"· Claim scope interpretation requires a qualified professional.": "· दावा व्याप्ती अर्थ लावण्यासाठी पात्र व्यावसायिकाची आवश्यकता आहे.",
			"Open evidence explorer<0>...</0>": "पुरावा एक्सप्लोरर उघडा<0>...</0>",
			"No analysis yet": "अद्याप कोणतेही विश्लेषण नाही",
			"Try the example question": "उदाहरण प्रश्न वापरून पहा",
			"Confidence & evidence": "विश्वास आणि पुरावा",
			"Active source set": "सक्रिय स्रोत संच",
			"Indian and international answer sets are never visually merged.": "भारतीय आणि आंतरराष्ट्रीय उत्तर संच कधीही दृश्यरूपात विलीन केले जात नाहीत.",
			"IP-SAKTI Sahayak provides information and preliminary analysis. Human experts are required for legal advice. Never rely on this output as clearance to file, market or export.": "आयपी-सक्ती सहाय्यक माहिती आणि प्राथमिक विश्लेषण प्रदान करते. कायदेशीर सल्ल्यासाठी मानवी तज्ञांची आवश्यकता आहे. फाईल, बाजार किंवा निर्यात करण्यासाठी क्लिअरन्स म्हणून या आउटपुटवर कधीही विसंबून राहू नका.",
			"Check biodiversity obligations early": "जैवविविधता दायित्वे लवकर तपासा",
			"Biodiversity & ABS Check": "जैवविविधता आणि एबीएस तपासणी",
			"Resource details": "संसाधन तपशील",
			"Biological resource": "जैविक संसाधन",
			"Country of origin": "मूळ देश",
			"Run ABS check": "एबीएस तपासणी चालवा",
			"ABS status": "एबीएस स्थिती",
			"Resource origin": "संसाधन मूळ",
			"{{var0}}·{{var1}}·{{var2}}": "{{var0}}·{{var1}}·{{var2}}",
			"Associated TK": "संबंधित टीके",
			"Declared as used": "वापरल्याप्रमाणे घोषित केले",
			"Not declared": "घोषित केलेले नाही",
			"Applicable jurisdiction": "लागू अधिकार क्षेत्र",
			"India (NBA / SBB)": "भारत (एनबीए / एसबीबी)",
			"Potential documentation": "संभाव्य दस्तऐवजीकरण",
			"Access approval, benefit-sharing agreement, source-of-material declaration in the patent specification.": "प्रवेश मान्यता, लाभ-वाटप करार, पेटंट तपशीलामध्ये सामग्रीच्या स्रोताची घोषणा.",
			"Relevant legal framework": "संबंधित कायदेशीर चौकट",
			"This is not legal clearance. Further verification with the competent national authority is required before commercial use, filing or export.": "ही कायदेशीर मंजुरी नाही. व्यावसायिक वापर, फाइलिंग किंवा निर्यातीपूर्वी सक्षम राष्ट्रीय प्राधिकरणाकडे पुढील पडताळणी आवश्यक आहे.",
			"Request human review of ABS documentation": "एबीएस दस्तऐवजीकरणाच्या मानवी पुनरावलोकनाची विनंती करा",
			"What this check looks at": "ही तपासणी काय पाहते",
			"· Whether the resource is wild-collected, cultivated or imported.": "· संसाधन जंगली गोळा केलेले, लागवड केलेले किंवा आयात केलेले आहे का.",
			"· Whether associated traditional knowledge is involved.": "· संबंधित पारंपारिक ज्ञान समाविष्ट आहे का.",
			"· Whether commercial use, patenting or export is planned.": "· व्यावसायिक वापर, पेटंटिंग किंवा निर्यातीचे नियोजन आहे का.",
			"· Which national framework and authority is likely to apply.": "· कोणती राष्ट्रीय चौकट आणि प्राधिकरण लागू होण्याची शक्यता आहे.",
			"ABS outcomes depend on facts that cannot be verified automatically, including collection records and community consent. No definitive legal clearance is given here.": "एबीएस परिणाम अशा तथ्यांवर अवलंबून असतात जे स्वयंचलितपणे सत्यापित केले जाऊ शकत नाहीत, ज्यामध्ये संकलन रेकॉर्ड आणि समुदाय संमतीचा समावेश आहे. येथे कोणतीही निश्चित कायदेशीर मंजुरी दिलेली नाही.",
			"Page not found": "पृष्ठ आढळले नाही",
			"The page you're looking for doesn't exist or has been moved.": "तुम्ही शोधत असलेले पृष्ठ अस्तित्वात नाही किंवा हलविले गेले आहे.",
			"Go home": "होम पेजवर जा",
			"This page didn't load": "हे पृष्ठ लोड झाले नाही",
			"Something went wrong on our end. You can try refreshing or head back home.": "आमच्या बाजूने काहीतरी चूक झाली. तुम्ही रिफ्रेश करण्याचा प्रयत्न करू शकता किंवा होम पेजवर परत जाऊ शकता.",
			"Try again": "पुन्हा प्रयत्न करा",
			Sidebar: "साइडबार",
			"Displays the mobile sidebar.": "मोबाइल साइडबार प्रदर्शित करते.",
			"Toggle Sidebar": "टॉगल साइडबार",
			Close: "बंद करा",
			pagination: "पेजिनेशन",
			page: "पृष्ठ",
			"Go to previous page": "मागील पृष्ठावर जा",
			Previous: "मागील",
			"Go to next page": "पुढील पृष्ठावर जा",
			"More pages": "अधिक पृष्ठे",
			"Previous slide": "मागील स्लाइड",
			"Next slide": "पुढील स्लाइड",
			breadcrumb: "ब्रेडक्रंब",
			More: "अधिक",
			"<0>...</0>LIVE WORKSPACE": "<0>...</0>थेट कार्यक्षेत्र",
			"evidence-first workflow": "पुरावा-प्रथम कार्यप्रवाह",
			"{{var0}}·{{var1}}· last verified{{var2}}": "{{var0}}·{{var1}}· शेवटची पडताळणी{{var2}}",
			"Reference data": "संदर्भ डेटा",
			"IP-SAKTI Sahayak home": "आयपी-शक्ती सहाय्यक होम",
			"IP-SAKTI Sahayak": "आयपी-शक्ती सहाय्यक",
			"IP-SAKTI": "आयपी-शक्ती",
			Sahayak: "सहाय्यक",
			"Government of India 🟡 Ayurveda 🟡 Intellectual Property": "भारत सरकार 🟡 आयुर्वेद 🟡 बौद्धिक संपदा",
			"🟡 Evidence-first research workspace": "🟡 पुरावा-प्रथम संशोधन कार्यक्षेत्र",
			Primary: "प्राथमिक",
			"⌘K": "⌘K",
			Language: "भाषा",
			"Source status": "स्रोत स्थिती",
			"verified 28 Aug 2026": "२८ ऑगस्ट २०२६ रोजी सत्यापित",
			"IP India fee schedule": "आयपी इंडिया शुल्क वेळापत्रक",
			"verified 02 Sep 2026": "०२ सप्टेंबर २०२६ रोजी सत्यापित",
			"Espacenet index": "एस्पेसनेट इंडेक्स",
			"re-verification due": "पुन्हा पडताळणी देय",
			"Open source registry →": "स्रोत रजिस्ट्री उघडा →",
			"Open navigation": "नेव्हिगेशन उघडा",
			"All sections": "सर्व विभाग",
			"Evidence-first decision support for Ayurvedic medicinal plants, formulations, traditional knowledge and intellectual-property research.": "आयुर्वेदिक औषधी वनस्पती, फॉर्म्युलेशन, पारंपारिक ज्ञान आणि बौद्धिक-संपत्ती संशोधनासाठी पुरावा-प्रथम निर्णय समर्थन.",
			Research: "संशोधन",
			Compliance: "अनुपालन",
			Governance: "प्रशासन",
			"Quick navigation": "त्वरित नेव्हिगेशन",
			"<0>...</0>Search": "<0>...</0>शोधा",
			"No matching workspace or reference.": "कोणतेही जुळणारे कार्यक्षेत्र किंवा संदर्भ नाही.",
			"<0>...</0>Source registry": "<0>...</0>स्रोत रजिस्ट्री",
			"nav.home": "होम",
			"nav.assistant": "एआय सहाय्यक",
			"nav.patents": "पेटंट इंटेलिजेंस",
			"nav.priorArt": "पूर्व कला",
			"nav.formulation": "सूत्रीकरण",
			"nav.abs": "एबीएस तपासणी",
			"nav.cost": "खर्च योजनाकार",
			"nav.knowledge": "ज्ञान अन्वेषक",
			"nav.international": "आंतरराष्ट्रीय",
			"nav.reports": "अहवाल",
			"nav.expert": "तज्ञ मदत",
			"shell.search": "सर्वकाही शोधा",
			"shell.interfaceLanguage": "इंटरफेस भाषा",
			"shell.commandMenu": "कमांड मेनू",
			"shell.menu": "मेनू",
			"shell.tagline": "भारतीय आणि आंतरराष्ट्रीय अधिकार क्षेत्रांमध्ये आयुर्वेद बौद्धिक संपदा आणि नियामक प्रश्नांसाठी बहुभाषिक, उद्धरण-आधारित निर्णय समर्थन.",
			"shell.colWorkspaces": "कार्यक्षेत्रे",
			"shell.colCompliance": "अनुपालन",
			"shell.colTransparency": "पारदर्शकता",
			"shell.disclaimer": "माहिती, कायदेशीर सल्ला नाही. अधिकृत स्रोतांसह सत्यापित करा आणि कारवाई करण्यापूर्वी योग्य आयपी व्यावसायिकांचा सल्ला घ्या.",
			"shell.sourceRegistry": "स्रोत रजिस्ट्री",
			"shell.humanReview": "मानवी आयपी पुनरावलोकन",
			"shell.reportsHistory": "अहवाल आणि इतिहास",
			"shell.knowledgeExplorer": "ज्ञान अन्वेषक",
			"shell.groupResearch": "संशोधन",
			"shell.groupCompliance": "सूत्रीकरण आणि अनुपालन",
			"shell.groupKnowledge": "ज्ञान आणि पुरावा",
			"shell.groupGlobal": "जागतिक आयपी",
			"shell.groupSupport": "अहवाल आणि समर्थन",
			"pg.assistant.eyebrow": "एआय कार्यक्षेत्र",
			"pg.assistant.title": "संरक्षण, वर्गीकरण किंवा अनुपालनाबद्दल विचारा",
			"pg.assistant.subtitle": "उत्तरे अधिकृत नोंदींमधून एकत्र केली जातात आणि नेहमी अधिकार क्षेत्र, पुरावे आणि मर्यादा घेऊन जातात. माहिती, कायदेशीर सल्ला नाही.",
			"pg.patents.eyebrow": "संकल्पना पुनर्प्राप्ती",
			"pg.patents.title": "पेटंट इंटेलिजेंस",
			"pg.patents.subtitle": "फक्त कीवर्डद्वारेच नव्हे तर संकल्पनेनुसार पेटंट आणि पूर्व-कला शोधा.",
			"pg.priorArt.eyebrow": "पुरावा अन्वेषक",
			"pg.priorArt.title": "पूर्व-कला (Prior-art) शोध",
			"pg.priorArt.subtitle": "सूत्रीकरण → आढळलेले घटक → टीकेडीएल रेकॉर्ड → पेटंट प्रकरणे → आंतरराष्ट्रीय रेकॉर्ड. अंतर्निहित रेकॉर्ड तपासण्यासाठी कोणताही नोड निवडा.",
			"pg.formulation.eyebrow": "मार्गदर्शित विझार्ड",
			"pg.formulation.title": "तुम्ही काय विकसित करत आहात?",
			"pg.formulation.subtitle": "चार छोटे प्रश्न तर्कशास्त्र, अधिकारी आणि उद्धृत स्रोतांसह एक प्राथमिक नियामक वर्गीकरण तयार करतात.",
			"pg.abs.eyebrow": "अनुपालन कार्यप्रवाह",
			"pg.abs.title": "जैवविविधता आणि एबीएस तपासणी",
			"pg.abs.subtitle": "जैविक संसाधन, त्याचे मूळ आणि कोणत्याही संबंधित पारंपारिक ज्ञानासाठी प्रवेश आणि लाभ-वाटप संकेत.",
			"pg.cost.eyebrow": "अंदाजकर्ता",
			"pg.cost.title": "आयपी खर्च योजनाकार",
			"pg.cost.subtitle": "अधिकृत सरकारी शुल्क आणि व्यावसायिक/सेवा अंदाज नेहमी स्वतंत्रपणे दाखवले जातात, प्रत्येकाचा स्रोत आणि प्रभावी तारीख असते.",
			"pg.knowledge.eyebrow": "वानस्पतिक इंटेलिजेंस",
			"pg.knowledge.title": "पारंपारिक ज्ञान कुटुंब अन्वेषक",
			"pg.knowledge.subtitle": "वानस्पतिक कुटुंब, वंश, दस्तऐवजीकरण केलेले पारंपारिक उपयोग आणि संबंधित संशोधन उमेदवार - प्रत्येक दाव्याच्या मागे अधिकृत रेकॉर्डसह.",
			"pg.international.eyebrow": "अधिकार क्षेत्र नकाशा",
			"pg.international.title": "आंतरराष्ट्रीय आयपी इंटेलिजेंस",
			"pg.international.subtitle": "पेटंट आणि ट्रेडमार्क फ्रेमवर्क, पारंपारिक ज्ञान उपचार, एबीएस व्यवस्था आणि प्रकटीकरण आवश्यकता पाहण्यासाठी अधिकार क्षेत्र निवडा.",
			"pg.reports.eyebrow": "कार्यक्षेत्र",
			"pg.reports.title": "अहवाल आणि इतिहास",
			"pg.reports.subtitle": "एका आयपी इंटेलिजेंस अहवालाची निर्मिती करा जिथे प्रत्येक स्रोत त्याच्या समर्थित निष्कर्षाशी जोडलेला राहतो आणि पूर्वीच्या कामाची पुन्हा तपासणी करा.",
			"pg.expert.eyebrow": "तज्ञ एस्केलेशन",
			"pg.expert.title": "जेव्हा पुरावे संपतात, तेव्हा एक व्यावसायिक सुरू होतो.",
			"pg.expert.subtitle": "आयपी-शक्ती माहिती देते, कायदेशीर सल्ला नाही. बंधनकारक निर्णयांसाठी, योग्य आयपी व्यावसायिकाकडे जा - तुमचा विश्लेषण संदर्भ संलग्न करून.",
			"pg.sources.eyebrow": "स्रोत पारदर्शकता",
			"pg.sources.title": "प्रत्येक उत्तर, एका प्राधिकरणाशी जोडलेले.",
			"pg.sources.subtitle": "आयपी-शक्ती केवळ मॉडेल मेमरीवरून कधीही उत्तर देत नाही. प्रत्येक दावा येथे सूचीबद्ध अधिकृत रजिस्ट्री, कायदा किंवा करार संस्थेचा संदर्भ देतो - त्याच्या शेवटच्या पडताळणी तारखेसह.",
			"guide.home.title": "आयपी-शक्ती सहाय्यक काय आहे?",
			"guide.home.body": "आयुर्वेद बौद्धिक संपदेसाठी निर्णय-समर्थन कार्यक्षेत्र. हे पेटंट्सची तपासणी करते, पूर्व कलेचा मागोवा घेते, सूत्रीकरणांचे वर्गीकरण करते, एबीएस दायित्वे तपासते, फाइलिंग खर्चाचा अंदाज घेते आणि प्रत्येक विधानामागील अधिकृत रेकॉर्डचा संदर्भ देते.\nकार्यक्षेत्र उघडण्यासाठी वरील नेव्हिगेशन वापरा; प्रत्येक पृष्ठ यासारख्या बॅनरमध्ये स्वतःचे स्पष्टीकरण देते.",
			"guide.assistant.title": "एआय सहाय्यक कसे कार्य करते",
			"guide.assistant.body": "आयुर्वेद सूत्रीकरणाच्या संरक्षणाबद्दल किंवा वर्गीकरणाबद्दल प्रश्न टाइप करा. सहाय्यक जुळणारे अधिकृत रेकॉर्ड (टीकेडीएल, पेटंट कार्यालये, नियामक) पुनर्प्राप्त करतो, एक उत्तर एकत्र करतो आणि त्याचा आत्मविश्वास, वापरलेले स्रोत आणि उत्तराच्या मर्यादा दर्शवितो.\nजर प्रश्नाला कायदेशीर किंवा आर्थिक परिणाम असतील, तर तोच संदर्भ एखाद्या मानवी व्यावसायिकाला सुपूर्द करण्यासाठी एस्केलेशन लिंकचा वापर करा.",
			"guide.patents.title": "पेटंट इंटेलिजेंस कसे कार्य करते",
			"guide.patents.body": "तुमच्या सूत्रीकरणाचे साध्या शब्दात वर्णन करा. भारतीय आणि आंतरराष्ट्रीय पेटंट कार्यालयांमध्ये शोध फक्त अचूक कीवर्डद्वारे नाही तर संकल्पना आणि घटक (अर्थपूर्ण) द्वारे जुळतो.\nअधिकार क्षेत्र, वनस्पती, स्थिती आणि स्रोत द्वारे फिल्टर करा. प्रत्येक परिणाम एक समानता स्कोअर दर्शवितो आणि अधिकृत रजिस्टरशी जोडला जातो जेणेकरून आपण स्वतः त्याची पडताळणी करू शकता.",
			"guide.priorArt.title": "पूर्व-कला प्रवाह कसा कार्य करतो",
			"guide.priorArt.body": "हे पृष्ठ एका प्रश्नाचे उत्तर देते: \"याचे दस्तऐवजीकरण किंवा पेटंट आधीच झाले आहे का?\" आलेख पुराव्याची साखळी म्हणून डावीकडून उजवीकडे वाचला जातो:\n१. सूत्रीकरण - आपल्या उत्पादनाची कल्पना विभागली आहे.\n२. घटक - प्रत्येक शोधलेला वनस्पती/खनिज घटक.\n३. टीकेडीएल रेकॉर्ड्स - भारताच्या ट्रॅडिशनल नॉलेज डिजिटल लायब्ररीमधील सामने (पूर्व कला जी पेटंट्स रोखू शकते).\n४. पेटंट प्रकरणे - समान विषयाचा दावा करणारे विद्यमान अनुप्रयोग/अनुदान.\n५. आंतरराष्ट्रीय रेकॉर्ड्स - परदेशात संबंधित WIPO/EPO/USPTO फाइलिंग.\nकोणत्याही नोडचा अंतर्निहित रेकॉर्ड उघडण्यासाठी तो निवडा: अधिकार, उतारा, तारखा आणि अधिकृत स्रोत दुवा. कडा जाडी जुळणीची ताकद दर्शवते.",
			"guide.formulation.title": "वर्गीकरण विझार्ड कसे कार्य करते",
			"guide.formulation.body": "चार लहान प्रश्नांची उत्तरे द्या (उद्दिष्ट वापर, दावे, घटक, सादरीकरण). विझार्ड तर्कशास्त्र, जबाबदार अधिकारी आणि उद्धृत स्रोतांसह एक प्राथमिक नियामक श्रेणी तयार करतो - उदा. शास्त्रीय आयुर्वेदिक औषध विरुद्ध मालकीचे औषध विरुद्ध पूरक.\nही एक वर्गीकरण पायरी आहे: आपण काहीही दाखल करण्यापूर्वी मानवी व्यावसायिकाने वर्गीकरणाची पुष्टी केली पाहिजे.",
			"guide.abs.title": "एबीएस तपासणी कशी कार्य करते",
			"guide.abs.body": "जैविक संसाधन कुठून येते आणि आपण त्याचा कसा वापर करू इच्छिता ते प्रविष्ट करा. तपासणी पारंपारिक-ज्ञान सहवास, व्यावसायिक वापर, पेटंट हेतू आणि प्रवेश आणि लाभ-वाटप (ABS) जोखीम पातळीचा अंदाज घेण्यासाठी निर्यातीचे मूल्यमापन करते.\nत्यानंतर ते लागू होणाऱ्या फ्रेमवर्ककडे निर्देश करते (भारतात NBA/SBB, परदेशात नागोया प्रोटोकॉल) आणि आपल्याला आवश्यक असलेले दस्तऐवजीकरण — तुम्ही फाइलिंग किंवा व्यापारासाठी कटिबद्ध होण्यापूर्वी.",
			"guide.cost.title": "कॉस्ट प्लॅनर कसे कार्य करते",
			"guide.cost.body": "एक आयपी साधन (पेटंट, ट्रेड मार्क, डिझाइन, पीसीटी, माद्रिद) आणि अर्जदार प्रकार निवडा. अधिकृत सरकारी शुल्क आणि व्यावसायिक/सेवा अंदाज नेहमी स्वतंत्रपणे सूचीबद्ध केले जातात, प्रत्येकाचा स्रोत आणि प्रभावी तारीख असते.\nस्लायडर्स तुम्हाला प्रमाण (दावे, वर्ग, देश) मॉडेल करू देतात. दाखवलेल्या शुल्क वेळापत्रक आवृत्तीच्या विरूद्ध संख्या अद्यतनित होतात, त्यामुळे तुम्हाला नेहमी माहिती असते की कोणत्या पुनरावृत्तीने अंदाज तयार केला.",
			"guide.knowledge.title": "नॉलेज एक्सप्लोरर कसे कार्य करते",
			"guide.knowledge.body": "एखाद्या औषधी वनस्पतीचे वनस्पति कुटुंब आणि वंश, दस्तऐवजीकरण केलेले पारंपारिक उपयोग आणि पुढील संशोधनासाठी संबंधित वनस्पती पाहण्यासाठी ती निवडा.\nप्रत्येक वापराचा दावा टीकेडीएल किंवा अधिकृत रेकॉर्डशी जोडलेला असतो — हा दस्तऐवजीकरण केलेल्या ज्ञानाचा नकाशा आहे, कार्यक्षमतेची शिफारस नाही.",
			"guide.international.title": "अधिकार क्षेत्र नकाशा कसा कार्य करतो",
			"guide.international.body": "एखाद्या देशाची किंवा प्रदेशाची आयपी प्रणाली प्रोफाईल करण्यासाठी निवडा: पेटंट आणि ट्रेड मार्क फ्रेमवर्क, पारंपारिक ज्ञानावर कशी प्रक्रिया केली जाते, एबीएस व्यवस्था आणि प्रकटीकरण आवश्यकता.\nप्रत्येक प्रोफाइल अधिकृत प्राधिकरणाशी जोडलेले असते जेणेकरून तुम्ही परदेशात दाखल करण्यापूर्वी वर्तमान नियमांची पुष्टी करू शकता.",
			"guide.reports.title": "अहवाल कसे कार्य करतात",
			"guide.reports.body": "अहवाल इतर कार्यक्षेत्रांमधील निष्कर्ष एका दस्तऐवजात बंडल करतात जेथे प्रत्येक स्रोत त्याच्या समर्थित निष्कर्षाशी जोडलेला राहतो.\nयेथे संरचनेचे पूर्वावलोकन करा, नंतर निर्यात करा किंवा सामायिक करा. इतिहास सूची तुम्हाला पूर्वीची सत्रे आणि अहवाल पुन्हा उघडण्याची परवानगी देते.",
			"guide.expert.title": "तज्ञ एस्केलेशन कसे कार्य करते",
			"guide.expert.body": "जिथे बंधनकारक निर्णय सुरू होतात तिथे स्वयंचलित विश्लेषण थांबते. तुमच्या परिस्थितीचे वर्णन करा, विषय निवडा आणि वैकल्पिकरित्या तुमचे इन-अॅप विश्लेषण (सहाय्यक सत्र, पुरावा आलेख, एबीएस मूल्यांकन) संलग्न करा.\nएका पात्र आयपी व्यावसायिकाला तोच उद्धृत केलेला संदर्भ प्राप्त होतो — जेणेकरून संभाषण शून्यापासून नाही तर पुराव्यांपासून सुरू होईल.",
			"guide.sources.title": "स्रोत रजिस्ट्री कशी कार्य करते",
			"guide.sources.body": "ही आयपी-शक्तीने उद्धृत केलेल्या अधिकाऱ्यांची संपूर्ण यादी आहे. प्रत्येक नोंद दर्शवते की ते कोण राखते, ते कोणत्या अधिकार क्षेत्राला व्यापते, वापरात असलेली डेटा आवृत्ती आणि ती शेवटची कधी सत्यापित केली गेली.\nजर एखाद्या स्रोताची पुन्हा पडताळणी केली जाऊ शकत नसेल, तर त्यावर अवलंबून असलेली उत्तरे तथ्य म्हणून सादर करण्याऐवजी \"पुनरावलोकन आवश्यक\" म्हणून चिन्हांकित केली जातात.",
			"Evidence brief": "पुरावा संक्षिप्त",
			"Source-linked": "स्रोत-लिंक केलेले",
			"Image upload is not connected in this build.": "Image upload is not connected in this build.",
			"View source registry": "स्रोत नोंदणी पहा",
			"ILLUSTRATIVE ASSESSMENT": "स्पष्टीकरणात्मक मूल्यांकन",
			"LIVE EVIDENCE ARCHITECTURE": "थेट पुरावा आर्किटेक्चर",
			"Start an IP analysis": "आयपी विश्लेषण सुरू करा",
			"(": "(",
			All: "All",
			"content-type": "content-type",
			"Evidence linked": "पुरावा लिंक केलेला",
			"One evidence system.": "एक पुरावा प्रणाली.",
			Knowledge: "ज्ञान",
			"Share links are not connected to a sharing service in this build.": "Share links are not connected to a sharing service in this build.",
			"Inspect evidence trail": "पुरावा ट्रेलची तपासणी करा",
			"Voice capture is not connected in this build.": "Voice capture is not connected in this build.",
			"Open workspace": "कार्यक्षेत्र उघडा",
			Patent: "पेटंट",
			"Navigate IP with evidence.": "पुराव्यासह आयपी नेव्हिगेट करा.",
			"Claim / filing": "दावा / फाइलिंग",
			"Six research paths.": "सहा संशोधन मार्ग.",
			"@tanstack/react-start/server-entry": "@tanstack/react-start/server-entry",
			Decision: "निर्णय",
			"Traditional record": "पारंपारिक रेकॉर्ड",
			"INDIA'S AYURVEDA + IP INTELLIGENCE WORKSPACE": "भारताचा आयुर्वेद + आयपी इंटेलिजेंस वर्कस्पेस",
			Rule: "नियम",
			"Document upload is not connected in this build.": "Document upload is not connected in this build.",
			"Withania somnifera": "विथानिया सोम्निफेरा (अश्वगंधा)",
			"PDF export is not connected to a document service in this build.": "PDF export is not connected to a document service in this build.",
			"Explore patent intelligence": "पेटंट इंटेलिजेंस एक्सप्लोर करा",
			"Protect Ayurveda.": "आयुर्वेदाचे रक्षण करा.",
			"TKDL records": "टीकेडीएल नोंदी",
			"Patent records": "पेटंट रेकॉर्ड",
			Jurisdictions: "अधिकार क्षेत्रे",
			"Official sources": "अधिकृत स्रोत",
			"Potential prior-art signal": "संभाव्य पूर्व-कला संकेत",
			"Traditional Knowledge Digital Library": "पारंपारिक ज्ञान डिजिटल लायब्ररी",
			"Intellectual Property India": "बौद्धिक संपदा भारत",
			"WIPO PATENTSCOPE": "विपो पेटेंटस्कोप",
			"AI RESEARCH": "एआय संशोधन",
			"AI IP Sahayak": "एआय आयपी सहाय्यक",
			"Ask a question and receive a structured answer with jurisdiction, evidence and source context.": "प्रश्न विचारा आणि अधिकार क्षेत्र, पुरावा आणि स्रोत संदर्भासह संरचित उत्तर प्राप्त करा.",
			DISCOVERY: "शोध",
			"Search concepts, claims and jurisdictions without losing the evidence behind each result.": "प्रत्येक निकालामागील पुरावे न गमावता संकल्पना, दावे आणि अधिकार क्षेत्र शोधा.",
			TRACE: "माग",
			"Prior-Art Trace": "पूर्व-कला माग",
			"Connect formulations, ingredients, traditional records and patent claims in one research trail.": "एका संशोधन मार्गावर फॉर्म्युलेशन, घटक, पारंपारिक नोंदी आणि पेटंट दावे जोडा.",
			FORMULATION: "सूत्रीकरण",
			"Formulation Intelligence": "सूत्रीकरण इंटेलिजेंस",
			"Screen the likely product category before investing in a filing or market route.": "फाइलिंग किंवा बाजार मार्गामध्ये गुंतवणूक करण्यापूर्वी संभाव्य उत्पादन श्रेणी तपासा.",
			"TRADITIONAL KNOWLEDGE": "पारंपारिक ज्ञान",
			"Knowledge Explorer": "ज्ञान अन्वेषक",
			"Explore documented Ayurvedic plant knowledge and the records behind traditional-use claims.": "दस्तऐवजीकरण केलेले आयुर्वेदिक वनस्पती ज्ञान आणि पारंपारिक वापराच्या दाव्यांमागील नोंदी एक्सप्लोर करा.",
			"GLOBAL IP": "जागतिक आयपी",
			"International IP": "आंतरराष्ट्रीय आयपी",
			"Compare selected jurisdictions, disclosure expectations and traditional-knowledge treatment.": "निवडलेले अधिकार क्षेत्र, प्रकटीकरण अपेक्षा आणि पारंपारिक-ज्ञान उपचारांची तुलना करा.",
			"Evidence is not a footnote.": "पुरावा हा फुटनोट नाही.",
			"It is the product.": "हे उत्पादन आहे.",
			"Explore the evidence layer": "पुरावा स्तर एक्सप्लोर करा",
			"AI Assistant": "एआय सहाय्यक",
			"Prior Art": "पूर्व-कला",
			"ABS Check": "एबीएस चेक",
			"Cost Planner": "खर्च नियोजक",
			"Source registry": "स्रोत नोंदणी",
			"Human review": "मानवी पुनरावलोकन",
			"last verified": "शेवटचे सत्यापित",
			Home: "मुख्यपृष्ठ",
			Formulation: "सूत्रीकरण",
			Reports: "अहवाल",
			"Expert Help": "विशेषज्ञ मदत",
			"Formulation & Compliance": "सूत्रीकरण आणि अनुपालन",
			"Knowledge & Evidence": "ज्ञान आणि पुरावा",
			"Global IP": "जागतिक आयपी",
			"Reports & Support": "अहवाल आणि समर्थन",
			Assistant: "सहाय्यक",
			Patents: "पेटंट",
			"TKDL reference set": "टीकेडीएल संदर्भ संच",
			Search: "शोधा",
			"LIVE WORKSPACE": "थेट कार्यक्षेत्र",
			"Documented evidence": "दस्तऐवजीकरण केलेले पुरावे",
			"Review required": "पुनरावलोकन आवश्यक",
			Informational: "माहितीपूर्ण",
			"group-[.toast]:text-muted-foreground": "group-[.toast]:text-muted-foreground",
			English: "English",
			हिन्दी: "हिन्दी",
			मराठी: "मराठी",
			"Standardised Withania somnifera root extract composition for stress modulation": "तणाव नियमनासाठी प्रमाणित विथानिया सोम्निफेरा (अश्वगंधा) मूळ अर्काची रचना",
			"Synergistic botanical composition comprising Withania and Bacopa for cognitive support": "संज्ञानात्मक समर्थनासाठी विथानिया आणि बाकोपा समाविष्ट असलेली सिनेर्जिस्टिक वनस्पति रचना",
			"Ashwagandha churna preparation described in classical Ayurvedic literature": "शास्त्रीय आयुर्वेदिक साहित्यात वर्णन केलेली अश्वगंधा चूर्ण तयारी",
			"Curcuminoid-neem composition with enhanced dermal bioavailability": "वाढलेली त्वचीय जैवउपलब्धतेसह कर्क्यूमिनोइड-कडुनिंब रचना",
			"Process for preparing Emblica officinalis polyphenol concentrate": "एम्ब्लिका ऑफिसिनॅलिस (आवळा) पॉलीफेनोल सांद्र तयार करण्याची प्रक्रिया",
			"Giloy–Tulsi decoction granule with improved shelf stability": "Giloy–Tulsi decoction granule with improved shelf stability",
			"Glycyrrhiza glabra extract for mucosal soothing compositions": "म्यूकोसल सुखदायक रचनांसाठी जेष्ठमध अर्क",
			"Haridra–Nimba lepa for skin disorders in classical formularies": "त्वचेच्या विकारांसाठी शास्त्रीय फॉर्म्युलरीमध्ये हरिद्रा-निंबा (हळद-कडुनिंब) लेप",
			"Ashwagandha stress-support capsule": "अश्वगंधा तणाव-समर्थन कॅप्सूल",
			"Withania somnifera (root)": "विथानिया सोम्निफेरा (मूळ)",
			"Bacopa monnieri (whole plant)": "बाकोपा मोननेरी (संपूर्ण वनस्पती)",
			"TKDL/AY/1284": "TKDL/AY/1284",
			"TKDL/AY/2210": "TKDL/AY/2210",
			"IN 384512": "IN 384512",
			"WO 2023/154872": "WO 2023/154872",
			"EP 3 921 044 B1": "EP 3 921 044 B1",
			"Ashwagandha stress formulation — India & EU protectability": "अश्वगंधा ताण रचना — भारत आणि युरोपियन युनियन संरक्षणयोग्यता",
			"IP intelligence report — Haridra–Nimba topical": "आयपी इंटेलिजेंस अहवाल - हरिद्रा-निंबा स्थानिक",
			"Semantic search — turmeric + neem skin inflammation": "सिमेंटिक शोध - हळद + कडुनिंब त्वचेची जळजळ",
			"Startup patent filing + PCT designation plan": "स्टार्टअप पेटंट फाइलिंग + पीसीटी पदनाम योजना",
			"ABS documentation review — wild-collected Giloy": "एबीएस दस्तऐवजीकरण पुनरावलोकन — वन्य-गोळा गुळवेल",
			"Amla polyphenol concentrate — freedom-to-operate questions": "आवळा पॉलीफेनोल सांद्र — कार्य-करण्याचे-स्वातंत्र्य प्रश्न",
			"IP-SAKTI Sahayak — Ayurveda IP & Regulatory Intelligence": "आयपी-सक्ती सहाय्यक — आयुर्वेद आयपी आणि नियामक इंटेलिजेंस",
			"Biodiversity & ABS Check — IP-SAKTI Sahayak": "जैवविविधता आणि एबीएस चेक — आयपी-सक्ती सहाय्यक",
			"High — documentation likely required": "उच्च — दस्तऐवजीकरण बहुधा आवश्यक आहे",
			"Medium — review required": "मध्यम — पुनरावलोकन आवश्यक आहे",
			"Low — limited signals detected": "कमी — मर्यादित संकेत आढळले",
			"ABS RISK RADAR": "एबीएस जोखीम रडार",
			"Compliance workflow": "अनुपालन वर्कफ्लो",
			"Access and benefit-sharing signals for the biological resource, its origin and any associated traditional knowledge.": "जैविक संसाधन, त्याचे मूळ आणि कोणत्याही संबंधित पारंपारिक ज्ञानासाठी प्रवेश आणि लाभ-सामायिकरण संकेत.",
			"Botanical name, e.g. Withania somnifera": "वनस्पति नाव, उदा. विथानिया सोम्निफेरा",
			"Associated traditional knowledge used?": "संबंधित पारंपारिक ज्ञान वापरले?",
			"Commercial use intended?": "व्यावसायिक वापर अभिप्रेत आहे?",
			"Patent protection planned?": "पेटंट संरक्षणाची योजना आहे?",
			"Export market planned?": "निर्यात बाजाराची योजना आहे?",
			"AI Assistant — IP-SAKTI Sahayak": "एआय सहाय्यक — आयपी-सक्ती सहाय्यक",
			"AI RESEARCH COMMAND": "एआय संशोधन आदेश",
			"AI workspace": "एआय कार्यक्षेत्र",
			"Answers are assembled from official records and always carry jurisdiction, evidence and limitations. Information, not legal advice.": "उत्तरे अधिकृत रेकॉर्डवरून एकत्र केली जातात आणि नेहमी अधिकार क्षेत्र, पुरावे आणि मर्यादा घेऊन जातात. माहिती, कायदेशीर सल्ला नाही.",
			"Use example": "उदाहरण वापरा",
			Voice: "आवाज",
			Document: "दस्तऐवज",
			Image: "प्रतिमा",
			Analyse: "विश्लेषण करा",
			"Retrieval + agreement score": "पुनर्प्राप्ती + करार गुण",
			Evidence: "पुरावा",
			"All official records": "सर्व अधिकृत रेकॉर्ड",
			"Answer sets kept apart": "उत्तर संच वेगळे ठेवले",
			"Open evidence explorer": "पुरावा एक्सप्लोरर उघडा",
			"Describe a formulation, product or IP concern. The assistant will retrieve official records before offering any assessment.": "एखाद्या फॉर्म्युलेशन, उत्पादनाची किंवा आयपी चिंतेचे वर्णन करा. कोणतेही मूल्यांकन देण्यापूर्वी सहाय्यक अधिकृत रेकॉर्ड पुनर्प्राप्त करेल.",
			"Source agreement": "स्रोत करार",
			"Coverage of jurisdiction": "अधिकार क्षेत्राचे कव्हरेज",
			"IP Cost Planner — IP-SAKTI Sahayak": "आयपी खर्च नियोजक — आयपी-सक्ती सहाय्यक",
			Individual: "वैयक्तिक",
			Startup: "स्टार्टअप",
			"Small Enterprise": "लहान उपक्रम",
			"Educational Institution": "शैक्षणिक संस्था",
			"Other (large entity)": "इतर (मोठी संस्था)",
			"Request for early publication": "लवकर प्रकाशनासाठी विनंती",
			"Request for examination": "परीक्षेसाठी विनंती",
			"Drafting and filing (professional)": "मसुदा आणि दाखल करणे (व्यावसायिक)",
			"Prosecution and response handling (professional)": "खटला आणि प्रतिसाद हाताळणी (व्यावसायिक)",
			"PCT international filing fee": "पीसीटी आंतरराष्ट्रीय फाइलिंग शुल्क",
			"Local agent fees": "स्थानिक एजंट शुल्क",
			"Translation of specification": "विशिष्टतेचे भाषांतर",
			"FILING ECONOMICS": "फाइलिंग अर्थशास्त्र",
			Estimator: "अंदाजकर्ता",
			"Official government fees and professional/service estimates are always shown separately, each with a source and an effective date.": "अधिकृत सरकारी शुल्क आणि व्यावसायिक/सेवा अंदाज नेहमी स्वतंत्रपणे दाखवले जातात, प्रत्येक एक स्रोत आणि प्रभावी तारखेसह.",
			"Number of claims ·": "दाव्यांची संख्या ·",
			"Specification pages ·": "तपशील पृष्ठे ·",
			"Designations ·": "पदनाम ·",
			"Official government fee": "अधिकृत सरकारी फी",
			"Professional/service estimate": "व्यावसायिक/सेवा अंदाज",
			"Market range, not an official fee": "बाजार श्रेणी, अधिकृत फी नाही",
			"Estimated total": "अंदाजे एकूण",
			"Official government fees": "अधिकृत सरकारी शुल्क",
			"Professional/service estimates": "व्यावसायिक/सेवा अंदाज",
			"Expert Escalation — IP-SAKTI Sahayak": "तज्ञ वाढ — आयपी-सक्ती सहाय्यक",
			"Time-critical filings": "वेळ-गंभीर फाइलिंग",
			"An opposition window, examination deadline, or priority date is approaching and automated guidance is not sufficient.": "विरोधाची खिडकी, परीक्षेची अंतिम मुदत किंवा प्राधान्य तारीख जवळ येत आहे आणि स्वयंचलित मार्गदर्शन पुरेसे नाही.",
			"Binding decisions": "बंधनकारक निर्णय",
			"You are about to sign a licence, file an application, or export a formulation — anything with legal or financial consequence.": "तुम्ही परवान्यावर स्वाक्षरी करणार आहात, अर्ज दाखल करणार आहात किंवा फॉर्म्युलेशनची निर्यात करणार आहात — कायदेशीर किंवा आर्थिक परिणामांसह काहीही.",
			"Conflicting signals": "विरोधाभासी संकेत",
			"The evidence graph shows prior-art risk or a jurisdiction profile conflicts with your plans. A professional must weigh in.": "पुरावा आलेख पूर्वीचा धोका दर्शवतो किंवा अधिकार क्षेत्र प्रोफाइल आपल्या योजनांशी संघर्ष करतो. एका व्यावसायिकाने विचार केला पाहिजे.",
			"EXPERT ESCALATION": "तज्ञ वाढ",
			"Expert escalation": "तज्ञ वाढ",
			"When the evidence ends,": "जेव्हा पुरावा संपतो,",
			"IP-SAKTI provides information, not legal advice. For binding decisions, escalate to a qualified IP professional — with your analysis context attached.": "आयपी-सक्ती माहिती प्रदान करते, कायदेशीर सल्ला नाही. बंधनकारक निर्णयांसाठी, एका पात्र आयपी व्यावसायिकाकडे वाढवा — तुमच्या विश्लेषण संदर्भासह.",
			"In production this would route to a vetted IP professional.": "उत्पादनात हे तपासलेल्या आयपी व्यावसायिकाकडे जाईल.",
			"Submit request": "विनंती सबमिट करा",
			"Request captured in this local session. A production build would notify the\n              expert network and open a tracked case.": "या स्थानिक सत्रात विनंती कॅप्चर केली गेली. उत्पादन बिल्ड तज्ञ नेटवर्कला सूचित करेल आणि ट्रॅक केलेला केस उघडेल.",
			"Patent screening, TKDL cross-referencing, fee estimation, and jurisdictional\n              orientation remain automated and citation-grounded. Escalation is additive — it\n              never replaces the transparent evidence layer.": "पेटंट स्क्रीनिंग, टीकेडीएल क्रॉस-रेफरेंसिंग, फी अंदाज आणि अधिकार क्षेत्राभिमुखता स्वयंचलित आणि उद्धरण-आधारित राहते. वाढ अतिरिक्त आहे — ती कधीही पारदर्शक पुरावा स्तर बदलत नाही.",
			"Automated + cited": "स्वयंचलित + उद्धृत",
			"Human review for binding steps": "बंधनकारक चरणांसाठी मानवी पुनरावलोकन",
			"Formulation Classification — IP-SAKTI Sahayak": "सूत्रीकरण वर्गीकरण — आयपी-सक्ती सहाय्यक",
			Cosmetic: "सौंदर्य प्रसाधने",
			Phytopharmaceutical: "फायटोफार्मास्युटिकल",
			"Ayurveda-Aahar / nutraceutical": "आयुर्वेद-आहार / न्यूट्रास्युटिकल",
			"Classical / generic Ayurvedic medicine": "शास्त्रीय / जेनेरिक आयुर्वेदिक औषध",
			"Patent / proprietary medicine": "पेटंट / मालकीचे औषध",
			"New / non-classical drug": "नवीन / गैर-शास्त्रीय औषध",
			"FORMULATION LAB": "सूत्रीकरण प्रयोगशाळा",
			"Guided wizard": "मार्गदर्शित विझार्ड",
			"Four short questions produce a preliminary regulatory classification with reasoning, authorities and cited sources.": "चार छोटे प्रश्न तर्क, अधिकारी आणि उद्धृत स्रोतांसह प्राथमिक नियामक वर्गीकरण तयार करतात.",
			Step: "पायरी",
			of: "पैकी",
			Back: "मागे",
			"Start again": "पुन्हा सुरू करा",
			"IP-SAKTI Sahayak — Ayurvedic IP Intelligence": "आयपी-सक्ती सहाय्यक — आयुर्वेदिक आयपी इंटेलिजेंस",
			"International IP Intelligence — IP-SAKTI Sahayak": "आंतरराष्ट्रीय आयपी इंटेलिजेंस — आयपी-सक्ती सहाय्यक",
			"GLOBAL IP ATLAS": "जागतिक आयपी ऍटलस",
			"Jurisdiction map": "अधिकार क्षेत्र नकाशा",
			"Select a jurisdiction to see its patent and trade mark framework, traditional knowledge treatment, ABS regime and disclosure requirements.": "पेटंट आणि ट्रेडमार्क फ्रेमवर्क, पारंपारिक ज्ञान उपचार, एबीएस शासन आणि प्रकटीकरण आवश्यकता पाहण्यासाठी अधिकार क्षेत्र निवडा.",
			"Global IP coverage": "जागतिक आयपी कव्हरेज",
			profiles: "प्रोफाइल",
			Supported: "समर्थित",
			Selected: "निवडलेले",
			Network: "नेटवर्क",
			"Click a supported jurisdiction marker to open its patent, TK, ABS and disclosure profile.": "त्याचे पेटंट, टीके, एबीएस आणि प्रकटीकरण प्रोफाइल उघडण्यासाठी समर्थित अधिकार क्षेत्र मार्करवर क्लिक करा.",
			Trademark: "ट्रेडमार्क",
			"Traditional knowledge": "पारंपारिक ज्ञान",
			ABS: "एबीएस",
			"Disclosure requirements": "प्रकटीकरण आवश्यकता",
			"Official authority": "अधिकृत प्राधिकरण",
			"Traditional Knowledge Family Explorer — IP-SAKTI Sahayak": "पारंपारिक ज्ञान कुटुंब अन्वेषक — आयपी-सक्ती सहाय्यक",
			"related candidates": "संबंधित उमेदवार",
			"KNOWLEDGE GRAPH": "ज्ञान आलेख",
			"Botanical intelligence": "वनस्पति बुद्धिमत्ता",
			"Botanical family, genus, documented traditional use and related research candidates — with the official record behind each claim.": "वनस्पति कुटुंब, जीनस, दस्तऐवजीकरण केलेला पारंपारिक वापर आणि संबंधित संशोधन उमेदवार — प्रत्येक दाव्यामागील अधिकृत नोंदीसह.",
			"Genus ·": "जीनस ·",
			"Family ·": "कुटुंब ·",
			"Evidence level ·": "पुराव्याची पातळी ·",
			"Evidence ·": "पुरावा ·",
			"Patent Intelligence — IP-SAKTI Sahayak": "Patent Intelligence — IP-SAKTI Sahayak",
			"PATENT DISCOVERY": "पेटंट शोध",
			"Concept retrieval": "संकल्पना पुनर्प्राप्ती",
			"Find patents and prior art by concept, not just keywords.": "केवळ कीवर्डद्वारे नाही तर संकल्पनेनुसार पेटंट आणि पूर्व कला शोधा.",
			"retrieval ·": "पुनर्प्राप्ती ·",
			"Widen the jurisdiction, clear the plant filter, or try a hybrid search to recover borderline matches.": "सीमावर्ती जुळण्या पुनर्प्राप्त करण्यासाठी अधिकार क्षेत्र रुंद करा, वनस्पती फिल्टर साफ करा किंवा हायब्रिड शोध वापरून पहा.",
			"A score such as": "जसे की स्कोअर",
			"describes how\n              closely a record matches your described concept in retrieval space. It is not a measure\n              of infringement, validity or grant probability.": "वर्णन करते की रेकॉर्ड पुनर्प्राप्ती जागेत तुमच्या वर्णन केलेल्या संकल्पनेशी किती जवळून जुळते. हे उल्लंघन, वैधता किंवा अनुदान संभाव्यतेचे मोजमाप नाही.",
			"Jurisdiction ·": "अधिकार क्षेत्र ·",
			"Plant ·": "वनस्पती ·",
			"Status ·": "स्थिती ·",
			"Sources ·": "स्रोत ·",
			"Evidence Explorer — Prior Art | IP-SAKTI Sahayak": "पुरावा एक्सप्लोरर — पूर्व कला | आयपी-सक्ती सहाय्यक",
			"Your formulation": "तुमची निर्मिती",
			"Detected ingredients": "आढळलेले घटक",
			"Patent cases": "पेटंट प्रकरणे",
			"International records": "आंतरराष्ट्रीय नोंदी",
			"PRIOR-ART TRACE": "पूर्व-कला माग",
			"Evidence explorer": "पुरावा एक्सप्लोरर",
			"Formulation → detected ingredients → TKDL records → patent cases → international records. Select any node to inspect the underlying record.": "सूत्रीकरण → शोधलेले घटक → टीकेडीएल रेकॉर्ड → पेटंट प्रकरणे → आंतरराष्ट्रीय नोंदी. अंतर्निहित रेकॉर्डची तपासणी करण्यासाठी कोणतेही नोड निवडा.",
			"No prior art graph can be constructed for this query.": "या प्रश्नासाठी कोणताही पूर्व कला ग्राफ तयार केला जाऊ शकत नाही.",
			"Case / record number": "केस / रेकॉर्ड नंबर",
			Outcome: "परिणाम",
			"Source date": "स्रोत तारीख",
			Verification: "पडताळणी",
			Authority: "प्राधिकरण",
			"Open official source": "अधिकृत स्रोत उघडा",
			"Reports & History — IP-SAKTI Sahayak": "अहवाल आणि इतिहास — आयपी-सक्ती सहाय्यक",
			"Executive Summary": "कार्यकारी सारांश",
			"Preliminary assessment of protectability and regulatory route for a standardised Ashwagandha stress-support preparation.": "प्रमाणित अश्वगंधा ताण-समर्थन तयारीसाठी संरक्षणीयता आणि नियामक मार्गाचे प्राथमिक मूल्यांकन.",
			"Product Classification": "उत्पादन वर्गीकरण",
			"Patent / proprietary Ayurvedic medicine (preliminary, 81% confidence).": "पेटंट / मालकीचे आयुर्वेदिक औषध (प्राथमिक, 81% आत्मविश्वास).",
			"India, with international review for EPO and USPTO designations.": "ईपीओ आणि यूएसपीटीओ पदनामांसाठी आंतरराष्ट्रीय पुनरावलोकनासह भारत.",
			"IP Types": "आयपी प्रकार",
			"Process patent, composition patent, trade mark, trade secret.": "प्रक्रिया पेटंट, रचना पेटंट, ट्रेड मार्क, व्यापार रहस्य.",
			"Prior-Art Findings": "पूर्व-कला निष्कर्ष",
			"Documented classical preparations and one granted Indian claim in the same concept space.": "त्याच संकल्पना जागेत दस्तऐवजीकरण केलेली शास्त्रीय तयारी आणि एक मंजूर भारतीय दावा.",
			"TKDL Evidence": "टीकेडीएल पुरावा",
			"TKDL/AY/1284 and TKDL/AY/2210 — documented classical preparations.": "TKDL/AY/1284 आणि TKDL/AY/2210 - दस्तऐवजीकरण केलेली शास्त्रीय तयारी.",
			"WIPO Evidence": "वाइपो पुरावा",
			"WO 2023/154872 — combination claim covering Withania with Bacopa.": "WO 2023/154872 — बाकोपासह विथानिया कव्हर करणारा संयोजन दावा.",
			"ABS Findings": "एबीएस निष्कर्ष",
			"Wild-collected material with associated traditional knowledge — documentation likely required.": "संबंधित पारंपारिक ज्ञानासह वन्य-संकलित साहित्य - दस्तऐवजीकरण आवश्यक असण्याची शक्यता आहे.",
			"International Findings": "आंतरराष्ट्रीय निष्कर्ष",
			"Absolute novelty standard at the EPO increases the weight of documented disclosures.": "ईपीओमधील परिपूर्ण नवीनता मानक दस्तऐवजीकरण केलेल्या प्रकटीकरणाचे वजन वाढवते.",
			"Cost Estimate": "खर्च अंदाज",
			"Official government fees and professional estimates reported separately.": "अधिकृत सरकारी फी आणि व्यावसायिक अंदाज स्वतंत्रपणे नोंदवले गेले.",
			"Risk Indicators": "जोखिम दर्शक",
			"Potential prior-art signal; ABS documentation gap; claim-scope uncertainty.": "संभाव्य पूर्व-कला सिग्नल; एबीएस दस्तऐवज अंतर; दावा-व्याप्ती अनिश्चितता.",
			"Recommended Next Steps": "शिफारस केलेली पुढील पायरी",
			"Full prior-art trace, ABS documentation review, human IP review before filing.": "दाखल करण्यापूर्वी पूर्ण पूर्व-कला ट्रेस, एबीएस दस्तऐवजीकरण पुनरावलोकन, मानवी आयपी पुनरावलोकन.",
			"88% overall, based on retrieval strength and source agreement.": "पुनर्प्राप्ती सामर्थ्य आणि स्रोत करारावर आधारित एकूण 88%.",
			"Reference data; similarity is a retrieval score; no legal conclusion is offered.": "संदर्भ डेटा; समानता हा पुनर्प्राप्ती स्कोअर आहे; कोणताही कायदेशीर निष्कर्ष दिला जात नाही.",
			"TKDL, IP India, WIPO, Patents Act 1970, National Biodiversity Authority.": "टीकेडीएल, आयपी इंडिया, वाइपो, पेटंट कायदा 1970, राष्ट्रीय जैवविविधता प्राधिकरण.",
			"INTELLIGENCE DOSSIER": "इंटेलिजेंस डोजियर",
			Workspace: "कार्यक्षेत्र",
			"Generate an IP intelligence report where every source stays attached to the finding it supports, and revisit earlier work.": "एका आयपी बुद्धिमत्ता अहवाल व्युत्पन्न करा जेथे प्रत्येक स्रोत तो समर्थन करत असलेल्या शोधाशी संलग्न राहील आणि पूर्वीच्या कामाची पुन्हा भेट घ्या.",
			Preview: "पूर्वावलोकन",
			"Download PDF": "पीडीएफ डाउनलोड करा",
			Share: "सामायिक करा",
			"Jurisdiction coverage": "अधिकार क्षेत्र कव्हरेज",
			"Source Registry — IP-SAKTI Sahayak": "स्रोत नोंदणी — आयपी-सक्ती सहाय्यक",
			"SOURCE REGISTRY": "स्रोत नोंदणी",
			"Source transparency": "स्रोत पारदर्शकता",
			"Every answer,": "प्रत्येक उत्तर,",
			"i18nPrefix=\"pg.sources\"": "i18nPrefix=\"pg.sources\"",
			"IP-SAKTI never answers from model memory alone. Each claim cites an official registry, statute, or treaty body listed here — with its last verification date.": "आयपी-सक्ती कधीही मॉडेल मेमरीवरून उत्तर देत नाही. प्रत्येक दावा येथे सूचीबद्ध अधिकृत नोंदणी, कायदा किंवा करार संस्थेचा हवाला देतो — त्याच्या शेवटच्या पडताळणी तारखेसह.",
			"Across 3 jurisdiction tiers": "3 अधिकार क्षेत्र स्तरांवर",
			"Verification cadence": "पडताळणी ताल",
			"Fee schedules & registries re-checked": "फी वेळापत्रक आणि नोंदणी पुन्हा तपासली गेली",
			"Citations in answers": "उत्तरांमध्ये उद्धरणे",
			"Unsourced statements are flagged": "बिना स्रोताची विधाने चिन्हांकित केली आहेत",
			"Synced Sep 2026": "सप्टेंबर 2026 मध्ये समक्रमित केले",
			Verified: "सत्यापित",
			"When a source cannot be reached, the interface marks dependent claims": "जेव्हा एखाद्या स्रोतापर्यंत पोहोचता येत नाही, तेव्हा इंटरफेस अवलंबून असलेल्या दाव्यांना चिन्हांकित करतो",
			"instead of guessing.": "अंदाज लावण्याऐवजी.",
			"Coverage currently spans India (TKDL, CGPDTM, Ayush, NBA) and the principal\n            international systems (WIPO, EPO, USPTO, Nagoya Protocol). National-phase detail for\n            other jurisdictions is summarised from WIPO aggregates and may lag local amendments.": "कव्हरेज सध्या भारत (TKDL, CGPDTM, Ayush, NBA) आणि प्रमुख आंतरराष्ट्रीय प्रणाली (WIPO, EPO, USPTO, Nagoya Protocol) पर्यंत पसरलेले आहे. इतर अधिकार क्षेत्रांसाठी राष्ट्रीय-टप्प्याचे तपशील WIPO समुच्चयांवरून संक्षेपित केले आहेत आणि स्थानिक दुरुस्त्या मागे राहू शकतात.",
			"Giloy–Tulsi decoction granule granules with improved shelf stability": "सुधारित शेल्फ स्थिरतेसह गुळवेल-तुळस डिकोक्शन ग्रॅन्युल"
		} }
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false }
});
var i18n_default = instance;
var styles_default = "/assets/styles-COqgnOZ1.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		ref,
		className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: t("Close")
			})]
		})]
	})] });
});
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Command$2 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$2.displayName = _e.displayName;
var CommandDialog = ({ children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command$2, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			})
		})
	});
};
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Popover = Root2$1;
var PopoverTrigger = Trigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2$1.displayName;
var navItems = [
	{
		to: "/",
		label: "Home",
		key: "nav.home",
		icon: House
	},
	{
		to: "/assistant",
		label: "AI Assistant",
		key: "nav.assistant",
		icon: Bot
	},
	{
		to: "/patents",
		label: "Patent Intelligence",
		key: "nav.patents",
		icon: ScanSearch
	},
	{
		to: "/prior-art",
		label: "Prior Art",
		key: "nav.priorArt",
		icon: Network
	},
	{
		to: "/formulation",
		label: "Formulation",
		key: "nav.formulation",
		icon: FlaskConical
	},
	{
		to: "/abs",
		label: "ABS Check",
		key: "nav.abs",
		icon: ShieldCheck
	},
	{
		to: "/cost",
		label: "Cost Planner",
		key: "nav.cost",
		icon: Calculator
	},
	{
		to: "/knowledge",
		label: "Knowledge Explorer",
		key: "nav.knowledge",
		icon: Leaf
	},
	{
		to: "/international",
		label: "International",
		key: "nav.international",
		icon: Earth
	},
	{
		to: "/reports",
		label: "Reports",
		key: "nav.reports",
		icon: FileText
	},
	{
		to: "/expert",
		label: "Expert Help",
		key: "nav.expert",
		icon: LifeBuoy
	}
];
var navGroups = [
	{
		label: "Research",
		key: "shell.groupResearch",
		items: [
			navItems[1],
			navItems[2],
			navItems[3]
		]
	},
	{
		label: "Formulation & Compliance",
		key: "shell.groupCompliance",
		items: [
			navItems[4],
			navItems[5],
			navItems[6]
		]
	},
	{
		label: "Knowledge & Evidence",
		key: "shell.groupKnowledge",
		items: [navItems[7]]
	},
	{
		label: "Global IP",
		key: "shell.groupGlobal",
		items: [navItems[8]]
	},
	{
		label: "Reports & Support",
		key: "shell.groupSupport",
		items: [navItems[9], navItems[10]]
	}
];
var mobileNav = [
	{
		to: "/",
		label: "Home",
		key: "nav.home",
		icon: House
	},
	{
		to: "/assistant",
		label: "Assistant",
		key: "nav.assistant",
		icon: Bot
	},
	{
		to: "/patents",
		label: "Patents",
		key: "nav.patents",
		icon: ScanSearch
	},
	{
		to: "/reports",
		label: "Reports",
		key: "nav.reports",
		icon: FileText
	}
];
function Wordmark() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "group flex shrink-0 items-center gap-3",
		"aria-label": t("IP-SAKTI Sahayak home"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid size-10 place-items-center overflow-hidden rounded-xl border border-botanical/20 bg-botanical/10 shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.png",
				alt: t("IP-SAKTI Sahayak"),
				className: "size-full object-contain p-1"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-[1.02rem] font-semibold tracking-tight text-foreground",
				children: t("IP-SAKTI")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground",
				children: t("Sahayak")
			})]
		})]
	});
}
function AppShell({ children }) {
	const [paletteOpen, setPaletteOpen] = (0, import_react.useState)(false);
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	const { language, setLanguage } = useJurisdiction();
	const { lang, t } = useI18n();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setPaletteOpen((open) => !open);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => setDrawerOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "site-header sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gov-strip",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Government of India 🟡 Ayurveda 🟡 Intellectual Property") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gov-strip-right",
								children: t("🟡 Evidence-first research workspace")
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "site-header-main mx-auto flex h-[4.7rem] max-w-[1500px] items-center gap-4 px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "site-nav ml-5 hidden min-w-0 flex-1 items-center gap-1 xl:flex",
								"aria-label": t("Primary"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: cn("rounded-lg px-3 py-2 text-[0.76rem] font-semibold transition-colors", pathname === "/" ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
									children: t("nav.home")
								}), navGroups.map((group) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: cn("inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.76rem] font-semibold transition-colors", group.items.some((item) => pathname.startsWith(item.to)) ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
											children: [t(group.key), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												className: "text-[0.65rem] opacity-60",
												children: "⌄"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "start",
										className: "w-64 p-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
												className: "px-2 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground",
												children: t(group.key)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											group.items.map((item) => {
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
													asChild: true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: item.to,
														className: "flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
															className: "size-4 text-botanical",
															"aria-hidden": true
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(item.key) })]
													})
												}, item.to);
											})
										]
									})] }, group.label);
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "header-actions ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => setPaletteOpen(true),
										className: "hidden h-9 gap-2 border-border bg-card px-3 text-muted-foreground shadow-none md:inline-flex lg:min-w-48 lg:justify-start",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
												className: "size-3.5",
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden text-xs lg:inline",
												children: t("shell.search")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
												className: "ml-auto hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.58rem] text-muted-foreground lg:inline",
												children: t("⌘K")
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionSwitch, {
										size: "sm",
										className: "hidden sm:inline-flex"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "text-muted-foreground",
											"aria-label": t("Language"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
												className: "size-4",
												"aria-hidden": true
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "end",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
												className: "text-xs",
												children: t("shell.interfaceLanguage")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onSelect: () => setLanguage(l),
												children: [l, l === language ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "ml-auto size-3.5 text-primary" }) : null]
											}, l))
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "ghost",
											size: "icon",
											"aria-label": t("Source status"),
											className: "relative text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
												className: "size-4",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 size-1.5 rounded-full bg-botanical" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
										align: "end",
										className: "w-80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-eyebrow",
												children: t("Source status")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "mt-3 space-y-3 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-center justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground",
															children: t("TKDL reference set")
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-verified",
															children: t("verified 28 Aug 2026")
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-center justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground",
															children: t("IP India fee schedule")
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-verified",
															children: t("verified 02 Sep 2026")
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-center justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground",
															children: t("Espacenet index")
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-review",
															children: t("re-verification due")
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/sources",
												className: "mt-4 inline-block text-xs font-semibold text-primary hover:underline",
												children: t("Open source registry →")
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "xl:hidden",
										"aria-label": t("Open navigation"),
										onClick: () => setDrawerOpen((open) => !open),
										children: drawerOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
									})
								]
							})
						]
					}),
					drawerOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mobile-drawer border-t border-border bg-card px-4 pb-5 pt-4 shadow-lg xl:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionSwitch, { className: "w-full sm:w-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "w-full gap-2 sm:w-auto",
								onClick: () => setPaletteOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t("shell.search")
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
							"aria-label": t("All sections"),
							children: navItems.map((item) => {
								const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									className: cn("flex items-center gap-2.5 rounded-xl border px-3 py-3 text-sm font-medium transition-colors", active ? "border-primary/20 bg-secondary text-primary" : "border-border bg-background text-foreground hover:bg-muted"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "size-4",
										"aria-hidden": true
									}), t(item.key)]
								}, item.to);
							})
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pb-24 xl:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "site-footer border-t border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1480px] px-4 py-10 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-10 lg:flex-row lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: t("Evidence-first decision support for Ayurvedic medicinal plants, formulations, traditional knowledge and intellectual-property research.")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
									title: t("Research"),
									links: [
										{
											to: "/assistant",
											label: t("AI Assistant")
										},
										{
											to: "/patents",
											label: t("Patent Intelligence")
										},
										{
											to: "/prior-art",
											label: t("Prior Art")
										},
										{
											to: "/knowledge",
											label: t("Knowledge Explorer")
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
									title: t("Compliance"),
									links: [
										{
											to: "/formulation",
											label: t("Formulation")
										},
										{
											to: "/abs",
											label: t("ABS Check")
										},
										{
											to: "/international",
											label: t("International IP")
										},
										{
											to: "/cost",
											label: t("Cost Planner")
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
									title: t("Governance"),
									links: [
										{
											to: "/sources",
											label: t("Source registry")
										},
										{
											to: "/reports",
											label: t("Reports & history")
										},
										{
											to: "/expert",
											label: t("Human review")
										}
									]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": t("Quick navigation"),
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-xl xl:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mx-auto flex max-w-md items-stretch",
					children: [mobileNav.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex flex-col items-center gap-1 py-2.5 text-[0.62rem] font-medium", active ? "text-primary" : "text-muted-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-5",
									"aria-hidden": true
								}), t(item.key)]
							})
						}, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPaletteOpen(true),
							className: "flex w-full flex-col items-center gap-1 py-2.5 text-[0.62rem] font-medium text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, {
								className: "size-5",
								"aria-hidden": true
							}), t("Search")]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandDialog, {
				open: paletteOpen,
				onOpenChange: setPaletteOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: t("shell.search") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: t("No matching workspace or reference.") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
						heading: t("shell.colWorkspaces"),
						children: navItems.map((item) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
								value: item.label,
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									onClick: () => setPaletteOpen(false),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "size-4",
										"aria-hidden": true
									}), t(item.key)]
								})
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
						heading: t("shell.colTransparency"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
							value: "Source registry",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sources",
								onClick: () => setPaletteOpen(false),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-4",
									"aria-hidden": true
								}), t("Source registry")]
							})
						})
					})
				] })]
			})
		]
	});
}
function FooterCol({ title, links }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-eyebrow",
		children: t(title)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 space-y-2 text-xs",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			className: "text-muted-foreground transition-colors hover:text-foreground",
			children: t(l.label)
		}) }, l.to))
	})] });
}
function NotFoundComponent() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: t("Page not found")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("The page you're looking for doesn't exist or has been moved.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("Go home")
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const { t } = useTranslation();
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error("IP-SAKTI route error", error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: t("This page didn't load")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("Something went wrong on our end. You can try refreshing or head back home.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("Try again")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: t("Go home")
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "IP-SAKTI Sahayak — Ayurveda IP & Regulatory Intelligence" },
			{
				name: "description",
				content: "Evidence-first intellectual property and regulatory research for Ayurvedic plants, formulations, traditional knowledge and international jurisdictions."
			},
			{
				name: "author",
				content: "IP-SAKTI Sahayak"
			},
			{
				property: "og:title",
				content: "IP-SAKTI Sahayak"
			},
			{
				property: "og:description",
				content: "Protect Ayurveda. Navigate IP with evidence."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nextProvider, {
		i18n: i18n_default,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
			client: queryClient,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
				delayDuration: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
		})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-CkZqLMwS.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "IP-SAKTI Sahayak — Ayurvedic IP Intelligence" },
		{
			name: "description",
			content: "Evidence-first intellectual property and regulatory intelligence for Ayurvedic plants, formulations, traditional knowledge and international filing strategy."
		},
		{
			property: "og:title",
			content: "IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Protect Ayurveda. Navigate IP with evidence."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./abs-8Rg1BUoQ.mjs");
var Route$9 = createFileRoute("/abs")({
	head: () => ({ meta: [
		{ title: "Biodiversity & ABS Check — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Assess access and benefit-sharing signals for a biological resource, its origin and any associated traditional knowledge."
		},
		{
			property: "og:title",
			content: "Biodiversity & ABS Check — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Preliminary ABS status with applicable frameworks and documentation pointers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./assistant-DTZhU6Al.mjs");
var Route$8 = createFileRoute("/assistant")({
	head: () => ({ meta: [
		{ title: "AI Assistant — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Describe an Ayurvedic formulation and receive a citation-grounded preliminary IP and regulatory assessment with confidence, evidence and limitations."
		},
		{
			property: "og:title",
			content: "AI Assistant — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Citation-grounded preliminary IP assessment for Ayurvedic formulations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./cost-C21yZB_y.mjs");
var Route$7 = createFileRoute("/cost")({
	head: () => ({ meta: [
		{ title: "IP Cost Planner — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Estimate official government fees and professional costs separately for patents, trade marks, designs, PCT and Madrid filings."
		},
		{
			property: "og:title",
			content: "IP Cost Planner — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Official fees and professional estimates, never combined, with effective dates."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./expert-mwf8fLLA.mjs");
var Route$6 = createFileRoute("/expert")({
	head: () => ({ meta: [
		{ title: "Expert Escalation — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Request a human IP professional review for Ayurveda patent, ABS compliance, and regulatory questions that exceed automated guidance."
		},
		{
			property: "og:title",
			content: "Expert Escalation — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Human review for complex Ayurveda IP questions."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./formulation-BdjoQ2Eo.mjs");
var Route$5 = createFileRoute("/formulation")({
	head: () => ({ meta: [
		{ title: "Formulation Classification — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "A guided wizard that gives a preliminary regulatory classification for an Ayurvedic product, with reasoning, authorities and sources."
		},
		{
			property: "og:title",
			content: "Formulation Classification — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Preliminary regulatory classification for Ayurvedic formulations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./international-DFTVNhdE.mjs");
var Route$4 = createFileRoute("/international")({
	head: () => ({ meta: [
		{ title: "International IP Intelligence — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Jurisdiction-by-jurisdiction view of patent, trade mark, traditional knowledge, ABS and disclosure requirements with official authorities."
		},
		{
			property: "og:title",
			content: "International IP Intelligence"
		},
		{
			property: "og:description",
			content: "Patent, TK, ABS and disclosure requirements by jurisdiction."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./knowledge-ByGsTGCZ.mjs");
var Route$3 = createFileRoute("/knowledge")({
	head: () => ({ meta: [
		{ title: "Traditional Knowledge Family Explorer — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Explore botanical families, genera, TKDL evidence and related research candidates around an Ayurvedic plant."
		},
		{
			property: "og:title",
			content: "Traditional Knowledge Family Explorer"
		},
		{
			property: "og:description",
			content: "Botanical family, TKDL evidence and related candidates in one knowledge graph."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./patents-DC2lB9O_.mjs");
var Route$2 = createFileRoute("/patents")({
	head: () => ({ meta: [
		{ title: "Patent Intelligence — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Find patents and prior art by concept, not just keywords, across TKDL, IP India, WIPO, EPO and USPTO records."
		},
		{
			property: "og:title",
			content: "Patent Intelligence — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Concept-level patent and prior-art search with jurisdiction on every result."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./reports-Bxjf77-b.mjs");
var Route$1 = createFileRoute("/reports")({
	head: () => ({ meta: [
		{ title: "Reports & History — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Generate an IP intelligence report with sources attached to every finding, and revisit past analyses, searches and cost estimates."
		},
		{
			property: "og:title",
			content: "Reports & History — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "IP intelligence reports with every source attached to its finding."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./sources-Dud8oOIX.mjs");
var Route = createFileRoute("/sources")({
	head: () => ({ meta: [
		{ title: "Source Registry — IP-SAKTI Sahayak" },
		{
			name: "description",
			content: "Every official source behind IP-SAKTI's answers: TKDL, IP India, WIPO, EPO, USPTO, Ministry of Ayush, NBA, and treaty texts — with verification dates."
		},
		{
			property: "og:title",
			content: "Source Registry — IP-SAKTI Sahayak"
		},
		{
			property: "og:description",
			content: "Official sources and verification dates behind every answer."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AbsRoute: Route$9.update({
		id: "/abs",
		path: "/abs",
		getParentRoute: () => Route$11
	}),
	AssistantRoute: Route$8.update({
		id: "/assistant",
		path: "/assistant",
		getParentRoute: () => Route$11
	}),
	CostRoute: Route$7.update({
		id: "/cost",
		path: "/cost",
		getParentRoute: () => Route$11
	}),
	ExpertRoute: Route$6.update({
		id: "/expert",
		path: "/expert",
		getParentRoute: () => Route$11
	}),
	FormulationRoute: Route$5.update({
		id: "/formulation",
		path: "/formulation",
		getParentRoute: () => Route$11
	}),
	InternationalRoute: Route$4.update({
		id: "/international",
		path: "/international",
		getParentRoute: () => Route$11
	}),
	KnowledgeRoute: Route$3.update({
		id: "/knowledge",
		path: "/knowledge",
		getParentRoute: () => Route$11
	}),
	PatentsRoute: Route$2.update({
		id: "/patents",
		path: "/patents",
		getParentRoute: () => Route$11
	}),
	PriorArtRoute: Route$12.update({
		id: "/prior-art",
		path: "/prior-art",
		getParentRoute: () => Route$11
	}),
	ReportsRoute: Route$1.update({
		id: "/reports",
		path: "/reports",
		getParentRoute: () => Route$11
	}),
	SourcesRoute: Route.update({
		id: "/sources",
		path: "/sources",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
