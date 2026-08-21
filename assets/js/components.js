/* ==========================================================================
   Easeinbiz design mockup — reusable render helpers
   Keeps each page file small: pages hand a data object to these functions
   instead of hand-writing repeated markup for cards/tables/kanban/pills.
   ========================================================================== */

function ebPill(tone, label) {
  return '<span class="pill pill-' + tone + '"><span class="pill-dot"></span>' + label + '</span>';
}

function ebAvatar(initials, size) {
  size = size || 7;
  return '<span class="avatar h-' + size + ' w-' + size + ' text-[11px]">' + initials + '</span>';
}

function ebPageHeader(containerId, opts) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var actions = (opts.actions || []).map(function (a) {
    var cls = 'btn ' + (a.primary ? 'btn-primary' : 'btn-secondary');
    return '<a href="' + (a.href || '#') + '" class="' + cls + '">' + (a.icon ? '<i data-lucide="' + a.icon + '" class="h-4 w-4"></i>' : '') + a.label + '</a>';
  }).join('');
  /* Title and actions sit on one row from sm up; on phones the actions drop
     to their own row so long titles never collide with the buttons. */
  el.innerHTML =
    '<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">' +
      '<div class="min-w-0"><h1 class="text-[21px] sm:text-[26px] font-bold tracking-tight font-display">' + opts.title + '</h1>' +
      (opts.subtitle ? '<p class="text-sm text-muted-foreground mt-1">' + opts.subtitle + '</p>' : '') + '</div>' +
      (actions ? '<div class="flex items-center gap-2 flex-wrap shrink-0">' + actions + '</div>' : '') +
    '</div>';
}

function ebKpi(containerId, items) {
  var el = document.getElementById(containerId);
  if (!el) return;
  /* Locked Round 5: minimal stat cards — no icon tiles, numbers do the
     talking. Pass hero:true on AT MOST ONE item per screen. */
  /* Phones show 2-up (a single card stays full width), tablets step to 3
     when there are more than four, desktop is unchanged at N-up. */
  var n = items.length;
  var base = n > 1 ? 'grid-cols-2' : 'grid-cols-1';
  var mid = n > 4 ? ' md:grid-cols-3' : '';
  el.className = 'grid gap-[10px] ' + base + mid + ' lg:grid-cols-' + n;
  el.innerHTML = items.map(function (s) {
    var deltaCls = s.deltaTone === 'up' ? 'stat-delta-up' : s.deltaTone === 'down' ? 'stat-delta-down' : '';
    var deltaIcon = s.deltaTone === 'up' ? 'trending-up' : s.deltaTone === 'down' ? 'trending-down' : '';
    return '' +
    '<div class="stat-card' + (s.hero ? ' stat-card-hero' : '') + '">' +
      '<p class="stat-label">' + s.label + '</p>' +
      '<p class="stat-value">' + s.value + '</p>' +
      (s.delta ? '<p class="stat-delta ' + deltaCls + ' flex items-center gap-1">' + (deltaIcon ? '<i data-lucide="' + deltaIcon + '" class="h-3 w-3"></i>' : '') + s.delta + '</p>' : '') +
    '</div>';
  }).join('');
  if (window.lucide) lucide.createIcons();
}

function ebTable(containerId, opts) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var thead = '<tr>' + opts.columns.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>';
  var tbody = opts.rows.map(function (r) {
    return '<tr>' + r.map(function (cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>';
  }).join('');
  /* min-w keeps columns readable and hands the overflow to a sideways scroll
     instead of letting cells wrap into unreadable slivers on phones. */
  el.innerHTML = '<div class="eb-table-wrap"><table class="eb-table" style="min-width:640px"><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>';
  if (window.lucide) lucide.createIcons();
}

function ebKanban(containerId, columns) {
  var el = document.getElementById(containerId);
  if (!el) return;
  /* Below md the board swipes sideways (columns keep their full styling and a
     tappable width) rather than collapsing the pipeline into one long stack.
     From md up it is the same N-column grid as before. */
  el.className = 'flex gap-4 pb-2 overflow-x-auto md:pb-0 md:overflow-visible md:grid md:grid-cols-' + columns.length;
  el.innerHTML = columns.map(function (col) {
    var cards = col.cards.map(function (c) {
      return '' +
      '<div class="kanban-card p-3' + (c.dim ? ' opacity-70' : '') + '">' +
        '<p class="text-sm font-medium mb-2' + (c.done ? ' line-through decoration-muted-foreground/40' : '') + '">' + c.title + '</p>' +
        '<div class="flex items-center justify-between">' + ebPill(c.tagTone || 'gray', c.tag || '') + (c.assignee ? ebAvatar(c.assignee, 6) : '') + '</div>' +
        (c.meta ? '<div class="flex items-center gap-1.5 mt-2 text-[11px]" style="color:' + (c.metaColor || '#6B7A84') + '">' + (c.metaIcon ? '<i data-lucide="' + c.metaIcon + '" class="h-3 w-3"></i>' : '') + c.meta + '</div>' : '') +
      '</div>';
    }).join('');
    return '' +
    '<div class="kanban-col p-3 space-y-2.5 w-[78vw] max-w-[300px] shrink-0 md:w-auto md:max-w-none md:shrink">' +
      '<div class="flex items-center justify-between px-1 mb-1">' +
        '<span class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">' + col.title + '</span>' +
        '<span class="text-xs text-muted-foreground bg-white rounded-full px-1.5 py-0.5 border" style="border-color:hsl(var(--border))">' + col.cards.length + '</span>' +
      '</div>' + cards +
    '</div>';
  }).join('');
  if (window.lucide) lucide.createIcons();
}

function ebEmpty(containerId, opts) {
  var el = document.getElementById(containerId);
  if (!el) return;
  /* Locked Round 9: quiet minimal — cobalt icon tile, one CTA max */
  el.innerHTML = '' +
  '<div class="empty-state">' +
    '<span class="empty-state-icon"><i data-lucide="' + (opts.icon || 'inbox') + '" class="h-5 w-5"></i></span>' +
    '<p class="empty-state-title">' + opts.title + '</p>' +
    '<p class="empty-state-sub" style="max-width:280px;margin-left:auto;margin-right:auto;">' + (opts.subtitle || '') + '</p>' +
    (opts.cta ? '<a href="' + (opts.ctaHref || '#') + '" class="btn btn-primary">' + opts.cta + '</a>' : '') +
  '</div>';
  if (window.lucide) lucide.createIcons();
}
