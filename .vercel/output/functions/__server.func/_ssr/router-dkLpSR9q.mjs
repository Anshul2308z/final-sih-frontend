import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as TooltipProvider, c as languages, l as useI18n, n as JurisdictionSwitch, s as cn, t as JurisdictionProvider, u as useJurisdiction } from "./jurisdiction-VDSQbrOm.mjs";
import { t as Button } from "./button-CAAWKmmB.mjs";
import { B as ChevronRight, D as FileText, G as Bell, H as Check, I as Circle, L as CircleCheck, P as Command, T as FlaskConical, U as Calculator, W as Bot, b as Leaf, d as ScanSearch, g as Menu, j as Earth, m as Network, o as ShieldCheck, t as X, u as Search, w as House, x as Languages, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$12 } from "./prior-art-C8GZmLJb.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { i as Trigger$1, n as Portal, r as Root2$1, t as Content2$1 } from "../_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-dkLpSR9q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BXzaCiMn.css";
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
									const { t } = useTranslation();
									const active = group.items.some((item) => pathname.startsWith(item.to));
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: cn("inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.76rem] font-semibold transition-colors", active ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
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
												const { t } = useTranslation();
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
								const { t } = useTranslation();
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
						const { t } = useTranslation();
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
							const { t } = useTranslation();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
			delayDuration: 200,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JurisdictionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-v9XgYQHg.mjs");
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
var $$splitComponentImporter$9 = () => import("./abs-DDCBoORH.mjs");
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
var $$splitComponentImporter$8 = () => import("./assistant-BTyE3PCV.mjs");
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
var $$splitComponentImporter$7 = () => import("./cost-DuelKMPR.mjs");
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
var $$splitComponentImporter$6 = () => import("./expert-DCgU1N8I.mjs");
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
var $$splitComponentImporter$5 = () => import("./formulation-BepQoSCU.mjs");
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
var $$splitComponentImporter$4 = () => import("./international-COzxma42.mjs");
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
var $$splitComponentImporter$3 = () => import("./knowledge-Dvky8nJl.mjs");
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
var $$splitComponentImporter$2 = () => import("./patents-C0jCk4dG.mjs");
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
var $$splitComponentImporter$1 = () => import("./reports-Dfo0Iu5b.mjs");
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
var $$splitComponentImporter = () => import("./sources-BzNiFX5p.mjs");
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
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
