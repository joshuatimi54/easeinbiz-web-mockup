/* ==========================================================================
   Easeinbiz design mockup — shared sidebar + topbar shell
   Rendered client-side so every page stays a thin, self-contained HTML file.
   Ported 1:1 (structure + copy) from src/components/DashboardLayout.tsx,
   fixed to the super_admin/owner nav since it covers the most modules.
   ========================================================================== */

var EB_NAV = [
  { icon: "layout-dashboard", label: "Overview", href: "dashboard-overview.html", key: "overview" },
  { icon: "check-square", label: "Tasks", href: "tasks.html", key: "tasks" },
  { icon: "bar-chart-3", label: "Analytics", href: "analytics.html", key: "analytics" },
  { group: "Content Planner", icon: "calendar", key: "content", items: [
      { icon: "calendar", label: "Calendar", href: "content-calendar.html", key: "content-calendar" },
      { icon: "list-checks", label: "Publishing Queue", href: "content-queue.html", key: "content-queue" },
  ]},
  { group: "Library", icon: "folder-open", key: "library", items: [
      { icon: "folder-open", label: "My Library", href: "library.html", key: "library" },
      { icon: "share-2", label: "Shared with me", href: "library-shared.html", key: "library-shared", badge: 3 },
      { icon: "shield-check", label: "Approvals", href: "library-approvals.html", key: "library-approvals" },
  ]},
  { icon: "user-check", label: "Leads", href: "leads.html", key: "leads" },
  { icon: "clipboard-list", label: "Forms", href: "forms.html", key: "forms" },
  { group: "Finance", icon: "dollar-sign", key: "finance", items: [
      { icon: "dollar-sign", label: "Sales Records", href: "finance-sales.html", key: "finance-sales" },
      { icon: "receipt", label: "Expenses", href: "finance-expenses.html", key: "finance-expenses" },
      { icon: "file-text", label: "Invoices", href: "finance-invoices.html", key: "finance-invoices" },
  ]},
  { group: "Payroll", icon: "wallet", key: "payroll", items: [
      { icon: "wallet", label: "Overview & insights", href: "payroll-overview.html", key: "payroll-overview" },
      { icon: "users", label: "Employees", href: "payroll-employees.html", key: "payroll-employees" },
      { icon: "play", label: "Run Payroll", href: "payroll-run.html", key: "payroll-run" },
      { icon: "building-2", label: "Structure", href: "payroll-structure.html", key: "payroll-structure" },
      { icon: "gift", label: "Benefits", href: "payroll-benefits.html", key: "payroll-benefits" },
      { icon: "settings", label: "Configure", href: "payroll-config.html", key: "payroll-config" },
  ]},
  { icon: "receipt", label: "My Payslip", href: "payslip.html", key: "payslip" },
  { group: "Workshop", icon: "wrench", key: "workshop", items: [
      { icon: "flask-conical", label: "The Lab", href: "lab.html", key: "lab" },
      { icon: "rocket", label: "Launchpad", href: "launchpad.html", key: "launchpad" },
  ]},
  { icon: "users", label: "Clients", href: "clients.html", key: "clients" },
  { icon: "building-2", label: "Companies", href: "companies.html", key: "companies" },
  { icon: "plug", label: "Integrations", href: "integrations.html", key: "integrations" },
  { icon: "bot", label: "Automations", href: "automations.html", key: "automations" },
  { icon: "gift", label: "Refer & Earn", href: "refer.html", key: "refer" },
  { icon: "settings", label: "Settings", href: "settings.html", key: "settings" },
];

function ebIcon(name, cls) {
  return '<i data-lucide="' + name + '" class="' + (cls || '') + '"></i>';
}

function ebRenderNav(activeKey, isMobile) {
  var html = "";
  EB_NAV.forEach(function (item) {
    if (item.group) {
      var groupActive = item.key === activeKey || item.items.some(function (s) { return s.key === activeKey; });
      var openAttr = groupActive ? "" : " style=\"display:none\"";
      html += '<div>';
      html += '<button type="button" onclick="ebToggleGroup(this)" class="nav-link w-full ' + (groupActive ? "active" : "") + '">';
      html += ebIcon(item.icon) + '<span class="flex-1 text-left">' + item.group + '</span>' + ebIcon("chevron-down", "transition-transform " + (groupActive ? "rotate-180" : ""));
      html += '</button>';
      html += '<div class="mt-0.5 ml-3 space-y-0.5 border-l pl-3" style="border-color:hsl(var(--sidebar-border))"' + openAttr + '>';
      item.items.forEach(function (sub) {
        var active = sub.key === activeKey;
        html += '<a href="' + sub.href + '" class="nav-link ' + (active ? "active" : "") + '">' + ebIcon(sub.icon) + '<span class="flex-1">' + sub.label + '</span>';
        if (sub.badge) html += '<span class="inline-flex items-center justify-center rounded-full text-white text-[10px] font-semibold h-4 min-w-4 px-1" style="background:hsl(var(--destructive))">' + sub.badge + '</span>';
        html += '</a>';
      });
      html += '</div></div>';
    } else {
      var active = item.key === activeKey;
      html += '<a href="' + item.href + '" class="nav-link ' + (active ? "active" : "") + '">' + ebIcon(item.icon) + '<span>' + item.label + '</span></a>';
    }
  });
  return html;
}

function ebToggleGroup(btn) {
  var panel = btn.nextElementSibling;
  var chevron = btn.querySelector('[data-lucide="chevron-down"]');
  var open = panel.style.display !== "none";
  panel.style.display = open ? "none" : "block";
  if (chevron) chevron.classList.toggle("rotate-180", !open);
}

/* Sidebar body — identical markup for the desktop rail and the mobile drawer,
   so the two can never drift apart. Only the outer <aside> differs. */
function ebSidebarInner(activeKey) {
  return '' +
'  <div class="border-b shrink-0" style="border-color:hsl(var(--sidebar-border))">' +
'    <div class="flex h-14 items-center gap-2.5 px-4">' +
'      <img src="assets/img/logo-icon.png" alt="Easeinbiz" class="h-8 w-8 shrink-0 object-contain" />' +
'      <span class="font-display text-[16px] font-extrabold tracking-tight truncate">Easeinbiz</span>' +
'    </div>' +
'    <div class="px-3 pb-3">' +
'      <button class="w-full flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-[#F8FAFB]">' +
'        <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold uppercase" style="background:hsl(var(--primary)/.15);color:hsl(var(--primary))">A</div>' +
'        <span class="flex-1 truncate text-xs font-medium text-foreground/75">Acme Growth Agency</span>' +
'        ' + ebIcon("chevrons-up-down", "h-3 w-3 text-foreground/40") +
'      </button>' +
'    </div>' +
'  </div>' +
'  <nav class="flex-1 overflow-y-auto min-h-0 space-y-0.5 p-2">' + ebRenderNav(activeKey) + '</nav>' +
'  <div class="border-t p-3 space-y-2" style="border-color:hsl(var(--sidebar-border))">' +
'    <div class="rounded-[10px] px-3 py-2.5" style="background:hsl(var(--sidebar-accent))">' +
'      <div class="flex items-center justify-between gap-2">' +
'        <div class="min-w-0">' +
'          <p class="text-[11px] font-semibold truncate" style="color:hsl(var(--sidebar-accent-foreground))">Team plan</p>' +
'          <p class="text-[10.5px] leading-tight mt-0.5" style="color:hsl(205 40% 40%)">More features with an upgrade</p>' +
'        </div>' +
'        <button class="btn btn-primary shrink-0" style="height:28px;padding:0 10px;font-size:11px">Upgrade</button>' +
'      </div>' +
'    </div>' +
'    <a href="#" class="flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[11px] text-muted-foreground hover:bg-[#F0F6F9]">' + ebIcon("message-square-plus", "h-3.5 w-3.5") + 'Send Feedback</a>' +
'  </div>';
}

function ebRenderSidebar(activeKey) {
  return '' +
/* Desktop rail — unchanged from lg: up. */
'<aside class="hidden lg:flex flex-col w-60 shrink-0 border-r shadow-sm" style="background:hsl(var(--sidebar-background));border-color:hsl(var(--sidebar-border))">' +
   ebSidebarInner(activeKey) +
'</aside>' +
/* Mobile drawer — same nav, same styling, off-canvas below lg. */
'<div id="eb-drawer-overlay" class="eb-drawer-overlay lg:hidden" onclick="ebCloseDrawer()"></div>' +
'<aside id="eb-drawer" class="eb-drawer flex flex-col lg:hidden" role="dialog" aria-modal="true" aria-label="Main navigation" style="background:hsl(var(--sidebar-background))">' +
'  <button type="button" class="eb-drawer-close" onclick="ebCloseDrawer()" aria-label="Close navigation">' + ebIcon("x", "h-4 w-4") + '</button>' +
   ebSidebarInner(activeKey) +
'</aside>';
}

function ebOpenDrawer() {
  document.body.classList.add("eb-drawer-open");
  var d = document.getElementById("eb-drawer");
  if (d) d.focus();
}
function ebCloseDrawer() {
  document.body.classList.remove("eb-drawer-open");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") ebCloseDrawer();
});
/* Close the drawer if the viewport grows back to the desktop rail. */
if (window.matchMedia) {
  var ebDesktopMq = window.matchMedia("(min-width: 1024px)");
  var ebMqHandler = function (e) { if (e.matches) ebCloseDrawer(); };
  if (ebDesktopMq.addEventListener) ebDesktopMq.addEventListener("change", ebMqHandler);
  else if (ebDesktopMq.addListener) ebDesktopMq.addListener(ebMqHandler);
}

/* Topbar — locked Round 10 "action forward": Sora title left, one primary
   action (the screen's verb) always top-right. Rule: exactly one primary
   button in the topbar. Pages pass it via data-action / data-action-href. */
function ebRenderTopbar(title, action, actionHref) {
  return '' +
'<header class="topbar sticky top-0 z-10 h-16" style="padding-top:0;padding-bottom:0;">' +
'  <button type="button" onclick="ebOpenDrawer()" aria-label="Open navigation" class="lg:hidden h-8 w-8 shrink-0 flex items-center justify-center rounded-md hover:bg-muted">' + ebIcon("menu", "h-5 w-5") + '</button>' +
'  <h2 class="topbar-title truncate min-w-0">' + title + '</h2>' +
'  <span class="topbar-spacer"></span>' +
'  <button class="topbar-icon hidden sm:inline-flex">' + ebIcon("search", "h-4 w-4") + '</button>' +
'  <button class="topbar-icon relative shrink-0">' + ebIcon("bell", "h-4 w-4") + '<span class="absolute top-1 right-1 h-1.5 w-1.5 rounded-full" style="background:hsl(var(--destructive))"></span></button>' +
/* Same action, same destination — the label collapses to its icon on phones
   so the topbar never overflows. */
(action ? '  <a href="' + (actionHref || '#') + '" class="btn btn-primary shrink-0 topbar-action" title="' + action + '">' + ebIcon("plus", "h-3.5 w-3.5") + '<span class="topbar-action-label">' + action + '</span></a>' : '') +
'  <button class="flex items-center gap-2 px-1.5 py-1 rounded-[10px] hover:bg-muted shrink-0">' +
'    <span class="avatar h-8 w-8">JA</span>' +
'    <span class="hidden text-sm font-medium md:inline-block">Joshua Adesoba</span>' +
'  </button>' +
'</header>';
}

function ebMount() {
  var script = document.currentScript || (function () {
    var s = document.getElementsByTagName("script");
    return s[s.length - 1];
  })();
  var active = script.getAttribute("data-active") || "overview";
  var title = script.getAttribute("data-title") || "Dashboard";
  var action = script.getAttribute("data-action") || "";
  var actionHref = script.getAttribute("data-action-href") || "#";
  var sidebarMount = document.getElementById("sidebar-mount");
  var topbarMount = document.getElementById("topbar-mount");
  if (sidebarMount) sidebarMount.outerHTML = ebRenderSidebar(active);
  if (topbarMount) topbarMount.outerHTML = ebRenderTopbar(title, action, actionHref);
  if (window.lucide) lucide.createIcons();
}

ebMount();
