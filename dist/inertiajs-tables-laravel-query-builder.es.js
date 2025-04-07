import { ref as S, onMounted as Q, onBeforeUnmount as me, openBlock as s, createElementBlock as d, renderSlot as w, watch as U, createBlock as x, withCtx as _, createElementVNode as a, normalizeClass as C, withModifiers as q, withDirectives as D, vShow as R, resolveDynamicComponent as I, toDisplayString as g, createCommentVNode as k, computed as $, Fragment as F, renderList as P, unref as O, createVNode as z, createTextVNode as M, nextTick as be, getCurrentInstance as ye, onUnmounted as we, Transition as xe } from "vue";
import { createPopper as ke } from "@popperjs/core/lib/popper-lite";
import $e from "@popperjs/core/lib/modifiers/preventOverflow";
import Ce from "@popperjs/core/lib/modifiers/flip";
import _e from "lodash-es/uniq";
import Se from "lodash-es/find";
import K from "qs";
import qe from "lodash-es/clone";
import Be from "lodash-es/filter";
import Fe from "lodash-es/findKey";
import T from "lodash-es/forEach";
import Pe from "lodash-es/isEqual";
import Oe from "lodash-es/map";
import Te from "lodash-es/pickBy";
const je = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const n = e, c = S(null), o = S(null);
    return Q(() => {
      c.value = (u) => {
        u.target === o.value || o.value.contains(u.target) || n.do();
      }, document.addEventListener("click", c.value), document.addEventListener("touchstart", c.value);
    }), me(() => {
      document.removeEventListener("click", c.value), document.removeEventListener("touchstart", c.value);
    }), (u, t) => (s(), d("div", {
      ref_key: "root",
      ref: o
    }, [
      w(u.$slots, "default")
    ], 512));
  }
}, Ie = { class: "relative" }, Ve = ["dusk", "disabled"], Le = { class: "mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" }, Y = {
  __name: "ButtonWithDropdown",
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    },
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  setup(e, { expose: n }) {
    const c = e, o = S(!1), u = S(null);
    function t() {
      o.value = !o.value;
    }
    function l() {
      o.value = !1;
    }
    U(o, () => {
      u.value.update();
    });
    const v = S(null), p = S(null);
    return Q(() => {
      u.value = ke(v.value, p.value, {
        placement: c.placement,
        modifiers: [Ce, $e]
      });
    }), n({ hide: l }), (B, m) => (s(), x(je, { do: l }, {
      default: _(() => [
        a("div", Ie, [
          a("button", {
            ref_key: "button",
            ref: v,
            type: "button",
            dusk: e.dusk,
            disabled: e.disabled,
            class: C(["w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", { "border-green-300": e.active, "border-gray-300": !e.active, "cursor-not-allowed": e.disabled }]),
            "aria-haspopup": "true",
            onClick: q(t, ["prevent"])
          }, [
            w(B.$slots, "button")
          ], 10, Ve),
          D(a("div", {
            ref_key: "tooltip",
            ref: p,
            class: "absolute z-10"
          }, [
            a("div", Le, [
              w(B.$slots, "default")
            ])
          ], 512), [
            [R, o.value]
          ])
        ])
      ]),
      _: 3
    }));
  }
}, Me = { class: "flex flex-row items-center" }, ze = { class: "uppercase" }, De = ["sorted"], Re = {
  key: 0,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, Ee = {
  key: 1,
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}, We = {
  key: 2,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, Ne = {
  __name: "HeaderCell",
  props: {
    cell: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const n = e;
    function c() {
      n.cell.sortable && n.cell.onSort(n.cell.key);
    }
    return (o, u) => D((s(), d("th", null, [
      (s(), x(I(e.cell.sortable ? "button" : "div"), {
        class: "py-3 px-6 w-full",
        dusk: e.cell.sortable ? `sort-${e.cell.key}` : null,
        onClick: q(c, ["prevent"])
      }, {
        default: _(() => [
          a("span", Me, [
            w(o.$slots, "label", {}, () => [
              a("span", ze, g(e.cell.label), 1)
            ]),
            w(o.$slots, "sort", {}, () => [
              e.cell.sortable ? (s(), d("svg", {
                key: 0,
                "aria-hidden": "true",
                class: C(["w-3 h-3 ml-2", {
                  "text-gray-400": !e.cell.sorted,
                  "text-green-500": e.cell.sorted
                }]),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 320 512",
                sorted: e.cell.sorted
              }, [
                e.cell.sorted ? k("", !0) : (s(), d("path", Re)),
                e.cell.sorted === "asc" ? (s(), d("path", Ee)) : k("", !0),
                e.cell.sorted === "desc" ? (s(), d("path", We)) : k("", !0)
              ], 10, De)) : k("", !0)
            ])
          ])
        ]),
        _: 3
      }, 8, ["dusk"]))
    ], 512)), [
      [R, !e.cell.hidden]
    ]);
  }
}, J = {
  translations: {
    next: "Next",
    no_results_found: "No results found",
    of: "of",
    per_page: "per page",
    previous: "Previous",
    results: "results",
    to: "to"
  }
};
function de() {
  return J.translations;
}
function ul(e, n) {
  J.translations[e] = n;
}
function il(e) {
  J.translations = e;
}
const Ae = ["dusk", "value"], He = ["value"], ie = {
  __name: "PerPageSelector",
  props: {
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    value: {
      type: Number,
      default: 15,
      required: !1
    },
    options: {
      type: Array,
      default() {
        return [15, 30, 50, 100];
      },
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const n = de(), c = e, o = $(() => {
      let u = [...c.options];
      return u.push(parseInt(c.value)), _e(u).sort((t, l) => t - l);
    });
    return (u, t) => (s(), d("select", {
      name: "per_page",
      dusk: e.dusk,
      value: e.value,
      class: "block focus:ring-indigo-500 focus:border-indigo-500 min-w-max shadow-sm text-sm border-gray-300 rounded-md",
      onChange: t[0] || (t[0] = (l) => e.onChange(l.target.value))
    }, [
      (s(!0), d(F, null, P(o.value, (l) => (s(), d("option", {
        key: l,
        value: l
      }, g(l) + " " + g(O(n).per_page), 9, He))), 128))
    ], 40, Ae));
  }
}, Ge = {
  key: 0,
  class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
}, Ke = { key: 0 }, Qe = { class: "hidden sm:inline ml-2" }, Ue = { class: "hidden sm:inline mr-2" }, Ye = {
  key: 2,
  class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
}, Je = { class: "flex flex-row space-x-4 items-center flex-grow" }, Xe = { class: "hidden lg:block text-sm text-gray-700 flex-grow" }, Ze = { class: "font-medium" }, et = { class: "font-medium" }, tt = { class: "font-medium" }, lt = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, rt = { class: "sr-only" }, at = { class: "sr-only" }, nt = {
  __name: "Pagination",
  props: {
    onClick: {
      type: Function,
      required: !1
    },
    perPageOptions: {
      type: Array,
      default() {
        return [15, 30, 50, 100];
      },
      required: !1
    },
    onPerPageChange: {
      type: Function,
      default() {
        return () => {
        };
      },
      required: !1
    },
    hasData: {
      type: Boolean,
      required: !0
    },
    meta: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const n = de(), c = e, o = $(() => "links" in t.value ? t.value.links.length > 0 : !1), u = $(() => Object.keys(t.value).length > 0), t = $(() => c.meta), l = $(() => "prev_page_url" in t.value ? t.value.prev_page_url : null), v = $(() => "next_page_url" in t.value ? t.value.next_page_url : null), p = $(() => parseInt(t.value.per_page));
    return (B, m) => u.value ? (s(), d("nav", Ge, [
      !e.hasData || t.value.total < 1 ? (s(), d("p", Ke, g(O(n).no_results_found), 1)) : k("", !0),
      e.hasData ? (s(), d("div", {
        key: 1,
        class: C(["flex-1 flex justify-between", { "sm:hidden": o.value }])
      }, [
        (s(), x(I(l.value ? "a" : "div"), {
          class: C([{
            "cursor-not-allowed text-gray-400": !l.value,
            "text-gray-700 hover:text-gray-500": l.value
          }, "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: l.value,
          dusk: l.value ? "pagination-simple-previous" : null,
          onClick: m[0] || (m[0] = q((b) => e.onClick(l.value), ["prevent"]))
        }, {
          default: _(() => [
            m[4] || (m[4] = a("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5 text-gray-400",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              a("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M7 16l-4-4m0 0l4-4m-4 4h18"
              })
            ], -1)),
            a("span", Qe, g(O(n).previous), 1)
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"])),
        z(ie, {
          dusk: "per-page-mobile",
          value: p.value,
          options: e.perPageOptions,
          "on-change": e.onPerPageChange
        }, null, 8, ["value", "options", "on-change"]),
        (s(), x(I(v.value ? "a" : "div"), {
          class: C([{
            "cursor-not-allowed text-gray-400": !v.value,
            "text-gray-700 hover:text-gray-500": v.value
          }, "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: v.value,
          dusk: v.value ? "pagination-simple-next" : null,
          onClick: m[1] || (m[1] = q((b) => e.onClick(v.value), ["prevent"]))
        }, {
          default: _(() => [
            a("span", Ue, g(O(n).next), 1),
            m[5] || (m[5] = a("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5 text-gray-400",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              a("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M17 8l4 4m0 0l-4 4m4-4H3"
              })
            ], -1))
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"]))
      ], 2)) : k("", !0),
      e.hasData && o.value ? (s(), d("div", Ye, [
        a("div", Je, [
          z(ie, {
            dusk: "per-page-full",
            value: p.value,
            options: e.perPageOptions,
            "on-change": e.onPerPageChange
          }, null, 8, ["value", "options", "on-change"]),
          a("p", Xe, [
            a("span", Ze, g(t.value.from), 1),
            M(" " + g(O(n).to) + " ", 1),
            a("span", et, g(t.value.to), 1),
            M(" " + g(O(n).of) + " ", 1),
            a("span", tt, g(t.value.total), 1),
            M(" " + g(O(n).results), 1)
          ])
        ]),
        a("div", null, [
          a("nav", lt, [
            (s(), x(I(l.value ? "a" : "div"), {
              class: C([{
                "cursor-not-allowed text-gray-400": !l.value,
                "text-gray-500 hover:bg-gray-50": l.value
              }, "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"]),
              href: l.value,
              dusk: l.value ? "pagination-previous" : null,
              onClick: m[2] || (m[2] = q((b) => e.onClick(l.value), ["prevent"]))
            }, {
              default: _(() => [
                a("span", rt, g(O(n).previous), 1),
                m[6] || (m[6] = a("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  a("path", {
                    "fill-rule": "evenodd",
                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    "clip-rule": "evenodd"
                  })
                ], -1))
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"])),
            (s(!0), d(F, null, P(t.value.links, (b, j) => (s(), d("div", { key: j }, [
              w(B.$slots, "link", {}, () => [
                !isNaN(b.label) || b.label === "..." ? (s(), x(I(b.url ? "a" : "div"), {
                  key: 0,
                  href: b.url,
                  dusk: b.url ? `pagination-${b.label}` : null,
                  class: C(["relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700", {
                    "cursor-not-allowed": !b.url,
                    "hover:bg-gray-50": b.url,
                    "bg-white": !b.active,
                    "bg-gray-100": b.active
                  }]),
                  onClick: q((W) => e.onClick(b.url), ["prevent"])
                }, {
                  default: _(() => [
                    M(g(b.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href", "dusk", "class", "onClick"])) : k("", !0)
              ])
            ]))), 128)),
            (s(), x(I(v.value ? "a" : "div"), {
              class: C([{
                "cursor-not-allowed text-gray-400": !v.value,
                "text-gray-500 hover:bg-gray-50": v.value
              }, "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"]),
              href: v.value,
              dusk: v.value ? "pagination-next" : null,
              onClick: m[3] || (m[3] = q((b) => e.onClick(v.value), ["prevent"]))
            }, {
              default: _(() => [
                a("span", at, g(O(n).next), 1),
                m[7] || (m[7] = a("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  a("path", {
                    "fill-rule": "evenodd",
                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                    "clip-rule": "evenodd"
                  })
                ], -1))
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"]))
          ])
        ])
      ])) : k("", !0)
    ])) : k("", !0);
  }
}, st = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "add-search-input-menu",
  class: "min-w-max"
}, ot = ["dusk", "onClick"], ut = {
  __name: "TableAddSearchRow",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    hasSearchInputsWithoutValue: {
      type: Boolean,
      required: !0
    },
    onAdd: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const n = e, c = S(null);
    function o(u) {
      n.onAdd(u), c.value.hide();
    }
    return (u, t) => (s(), x(Y, {
      ref_key: "dropdown",
      ref: c,
      dusk: "add-search-row-dropdown",
      disabled: !e.hasSearchInputsWithoutValue,
      class: "w-auto"
    }, {
      button: _(() => t[0] || (t[0] = [
        a("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: "h-5 w-5 text-gray-400",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, [
          a("path", {
            "fill-rule": "evenodd",
            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
            "clip-rule": "evenodd"
          })
        ], -1)
      ])),
      default: _(() => [
        a("div", st, [
          (s(!0), d(F, null, P(e.searchInputs, (l, v) => (s(), d("button", {
            key: v,
            dusk: `add-search-row-${l.key}`,
            class: "text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
            role: "menuitem",
            onClick: q((p) => o(l.key), ["prevent"])
          }, g(l.label), 9, ot))), 128))
        ])
      ]),
      _: 1
    }, 8, ["disabled"]));
  }
}, it = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "toggle-columns-menu",
  class: "min-w-max"
}, dt = { class: "px-2" }, ct = { class: "divide-y divide-gray-200" }, vt = { class: "text-sm text-gray-900" }, ft = ["aria-pressed", "aria-labelledby", "aria-describedby", "dusk", "onClick"], gt = {
  __name: "TableColumns",
  props: {
    columns: {
      type: Object,
      required: !0
    },
    hasHiddenColumns: {
      type: Boolean,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const n = e;
    return (c, o) => (s(), x(Y, {
      placement: "bottom-end",
      dusk: "columns-dropdown",
      active: e.hasHiddenColumns
    }, {
      button: _(() => [
        (s(), d("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: C(["h-5 w-5", {
            "text-gray-400": !e.hasHiddenColumns,
            "text-green-400": e.hasHiddenColumns
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, o[0] || (o[0] = [
          a("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }, null, -1),
          a("path", {
            "fill-rule": "evenodd",
            d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
            "clip-rule": "evenodd"
          }, null, -1)
        ]), 2))
      ]),
      default: _(() => [
        a("div", it, [
          a("div", dt, [
            a("ul", ct, [
              (s(!0), d(F, null, P(n.columns, (u, t) => D((s(), d("li", {
                key: t,
                class: "py-2 flex items-center justify-between"
              }, [
                a("p", vt, g(u.label), 1),
                a("button", {
                  type: "button",
                  class: C(["ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", {
                    "bg-green-500": !u.hidden,
                    "bg-gray-200": u.hidden
                  }]),
                  "aria-pressed": !u.hidden,
                  "aria-labelledby": `toggle-column-${u.key}`,
                  "aria-describedby": `toggle-column-${u.key}`,
                  dusk: `toggle-column-${u.key}`,
                  onClick: q((l) => e.onChange(u.key, u.hidden), ["prevent"])
                }, [
                  o[1] || (o[1] = a("span", { class: "sr-only" }, "Column status", -1)),
                  a("span", {
                    "aria-hidden": "true",
                    class: C([{
                      "translate-x-5": !u.hidden,
                      "translate-x-0": u.hidden
                    }, "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                  }, null, 2)
                ], 10, ft)
              ])), [
                [R, u.can_be_hidden]
              ])), 128))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, ht = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "filter-menu",
  class: "min-w-max"
}, pt = { class: "text-xs uppercase tracking-wide bg-gray-100 p-3" }, mt = { class: "p-2" }, bt = ["name", "value", "onChange"], yt = ["value"], wt = {
  __name: "TableFilter",
  props: {
    hasEnabledFilters: {
      type: Boolean,
      required: !0
    },
    filters: {
      type: Object,
      required: !0
    },
    onFilterChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (n, c) => (s(), x(Y, {
      placement: "bottom-end",
      dusk: "filters-dropdown",
      active: e.hasEnabledFilters
    }, {
      button: _(() => [
        (s(), d("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: C(["h-5 w-5", {
            "text-gray-400": !e.hasEnabledFilters,
            "text-green-400": e.hasEnabledFilters
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, c[0] || (c[0] = [
          a("path", {
            "fill-rule": "evenodd",
            d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
            "clip-rule": "evenodd"
          }, null, -1)
        ]), 2))
      ]),
      default: _(() => [
        a("div", ht, [
          (s(!0), d(F, null, P(e.filters, (o, u) => (s(), d("div", { key: u }, [
            a("h3", pt, g(o.label), 1),
            a("div", mt, [
              o.type === "select" ? (s(), d("select", {
                key: 0,
                name: o.key,
                value: o.value,
                class: "block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md",
                onChange: (t) => e.onFilterChange(o.key, t.target.value)
              }, [
                (s(!0), d(F, null, P(o.options, (t, l) => (s(), d("option", {
                  key: l,
                  value: l
                }, g(t), 9, yt))), 128))
              ], 40, bt)) : k("", !0)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, xt = { class: "relative" }, kt = ["placeholder", "value"], $t = {
  __name: "TableGlobalSearch",
  props: {
    label: {
      type: String,
      default: "Search...",
      required: !1
    },
    value: {
      type: String,
      default: "",
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (n, c) => (s(), d("div", xt, [
      a("input", {
        class: "block w-full pl-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300",
        placeholder: e.label,
        value: e.value,
        type: "text",
        name: "global",
        onInput: c[0] || (c[0] = (o) => e.onChange(o.target.value))
      }, null, 40, kt),
      c[1] || (c[1] = a("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
        a("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: "h-5 w-5 text-gray-400",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, [
          a("path", {
            "fill-rule": "evenodd",
            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
            "clip-rule": "evenodd"
          })
        ])
      ], -1))
    ]));
  }
}, Ct = { class: "flex rounded-md shadow-sm relative mt-3" }, _t = ["for"], St = ["id", "name", "value", "onInput"], qt = { class: "absolute inset-y-0 right-0 pr-3 flex items-center" }, Bt = ["dusk", "onClick"], Ft = {
  __name: "TableSearchRows",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    forcedVisibleSearchInputs: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    },
    onRemove: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const n = { el: S([]) };
    let c = $(() => n.el.value);
    const o = e;
    function u(t) {
      return o.forcedVisibleSearchInputs.includes(t);
    }
    return U(o.forcedVisibleSearchInputs, (t) => {
      const l = t.length > 0 ? t[t.length - 1] : null;
      l && be().then(() => {
        const v = Se(c.value, (p) => p.__vnode.key === l);
        v && v.focus();
      });
    }, { immediate: !0 }), (t, l) => (s(!0), d(F, null, P(e.searchInputs, (v, p) => D((s(), d("div", {
      key: p,
      class: "px-4 sm:px-0"
    }, [
      a("div", Ct, [
        a("label", {
          for: v.key,
          class: "inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [
          l[0] || (l[0] = a("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 mr-2 text-gray-400",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }, [
            a("path", {
              "fill-rule": "evenodd",
              d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
              "clip-rule": "evenodd"
            })
          ], -1)),
          a("span", null, g(v.label), 1)
        ], 8, _t),
        (s(), d("input", {
          id: v.key,
          ref_for: !0,
          ref: n.el,
          key: v.key,
          name: v.key,
          value: v.value,
          type: "text",
          class: "flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300",
          onInput: (B) => e.onChange(v.key, B.target.value)
        }, null, 40, St)),
        a("div", qt, [
          a("button", {
            class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            dusk: `remove-search-row-${v.key}`,
            onClick: q((B) => e.onRemove(v.key), ["prevent"])
          }, l[1] || (l[1] = [
            a("span", { class: "sr-only" }, "Remove search", -1),
            a("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              a("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ]), 8, Bt)
        ])
      ])
    ])), [
      [R, v.value !== null || u(v.key)]
    ])), 128));
  }
}, Pt = {
  __name: "TableReset",
  props: {
    onClick: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (n, c) => (s(), d("button", {
      ref: "button",
      type: "button",
      dusk: "reset-table",
      class: "w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300",
      "aria-haspopup": "true",
      onClick: c[0] || (c[0] = q((...o) => e.onClick && e.onClick(...o), ["prevent"]))
    }, c[1] || (c[1] = [
      a("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5 mr-2 text-gray-400",
        viewBox: "0 0 20 20",
        fill: "currentColor"
      }, [
        a("path", {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd"
        })
      ], -1),
      a("span", null, "Reset", -1)
    ]), 512));
  }
}, Ot = (e, n) => {
  const c = e.__vccOpts || e;
  for (const [o, u] of n)
    c[o] = u;
  return c;
}, Tt = {}, jt = { class: "flex flex-col" }, It = { class: "-my-2 sm:-mx-6 lg:-mx-8" }, Vt = { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, Lt = { class: "shadow border-b border-gray-200 relative" };
function Mt(e, n) {
  return s(), d("div", jt, [
    a("div", It, [
      a("div", Vt, [
        a("div", Lt, [
          w(e.$slots, "default")
        ])
      ])
    ])
  ]);
}
const zt = /* @__PURE__ */ Ot(Tt, [["render", Mt]]), Dt = ["dusk"], Rt = { class: "flex flex-row flex-wrap sm:flex-nowrap justify-start px-4 sm:px-0" }, Et = { class: "order-2 sm:order-1 mr-2 sm:mr-4" }, Wt = {
  key: 0,
  class: "flex flex-row w-full sm:w-auto sm:flex-grow order-1 sm:order-2 mb-2 sm:mb-0 sm:mr-4"
}, Nt = {
  key: 0,
  class: "order-5 sm:order-3 sm:mr-4 ml-auto"
}, At = { class: "min-w-full divide-y divide-gray-200 bg-white" }, Ht = { class: "bg-gray-50" }, Gt = { class: "font-medium text-xs uppercase text-left tracking-wider text-gray-500 py-3 px-6" }, Kt = { class: "bg-white divide-y divide-gray-200" }, dl = {
  __name: "Table",
  props: {
    inertia: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    name: {
      type: String,
      default: "default",
      required: !1
    },
    striped: {
      type: Boolean,
      default: !1,
      required: !1
    },
    preventOverlappingRequests: {
      type: Boolean,
      default: !0,
      required: !1
    },
    inputDebounceMs: {
      type: Number,
      default: 350,
      required: !1
    },
    preserveScroll: {
      type: [Boolean, String],
      default: !1,
      required: !1
    },
    resource: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    meta: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    data: {
      type: Object,
      default: () => ({}),
      required: !1
    }
  },
  setup(e) {
    const n = e, c = ye(), o = c ? c.appContext.config.globalProperties.$inertia : n.inertia, u = S(0), t = $(() => {
      let r = o.page.props.queryBuilderProps ? o.page.props.queryBuilderProps[n.name] || {} : {};
      return r._updates = u.value, r;
    }), l = S(t.value), v = $(() => t.value.pageName), p = S([]), B = S(null), m = $(() => !(t.value.hasToggleableColumns || t.value.hasFilters || t.value.hasSearchInputs || t.value.globalSearch)), b = $(() => Object.keys(n.resource).length === 0 ? n.data : "data" in n.resource ? n.resource.data : n.resource), j = $(() => Object.keys(n.resource).length === 0 ? n.meta : "links" in n.resource && "meta" in n.resource && Object.keys(n.resource.links).length === 4 && "next" in n.resource.links && "prev" in n.resource.links ? {
      ...n.resource.meta,
      next_page_url: n.resource.links.next,
      prev_page_url: n.resource.links.prev
    } : "meta" in n.resource ? n.resource.meta : n.resource), W = $(() => b.value.length > 0 || j.value.total > 0);
    function ce(r) {
      p.value = p.value.filter((i) => i != r), E(r, null);
    }
    function X(r) {
      p.value.push(r);
    }
    const ve = $(() => {
      if (p.value.length > 0)
        return !0;
      const r = K.parse(location.search.substring(1));
      if (r[v.value] > 1)
        return !0;
      const f = n.name === "default" ? "" : n.name + "_";
      let h = !1;
      return T(["filter", "columns", "cursor", "sort"], (y) => {
        const L = r[f + y];
        y === "sort" && L === t.value.defaultSort || L !== void 0 && (h = !0);
      }), h;
    });
    function Z() {
      p.value = [], T(l.value.filters, (r, i) => {
        l.value.filters[i].value = null;
      }), T(l.value.searchInputs, (r, i) => {
        l.value.searchInputs[i].value = null;
      }), T(l.value.columns, (r, i) => {
        l.value.columns[i].hidden = r.can_be_hidden ? !t.value.defaultVisibleToggleableColumns.includes(r.key) : !1;
      }), l.value.sort = null, l.value.cursor = null, l.value.page = 1;
    }
    const ee = {};
    function E(r, i) {
      clearTimeout(ee[r]), ee[r] = setTimeout(() => {
        A.value && n.preventOverlappingRequests && A.value.cancel();
        const f = V("searchInputs", r);
        l.value.searchInputs[f].value = i, l.value.cursor = null, l.value.page = 1;
      }, n.inputDebounceMs);
    }
    function te(r) {
      E("global", r);
    }
    function le(r, i) {
      const f = V("filters", r);
      l.value.filters[f].value = i, l.value.cursor = null, l.value.page = 1;
    }
    function re(r) {
      l.value.cursor = null, l.value.perPage = r, l.value.page = 1;
    }
    function V(r, i) {
      return Fe(l.value[r], (f) => f.key == i);
    }
    function ae(r, i) {
      const f = V("columns", r);
      l.value.columns[f].hidden = !i;
    }
    function fe() {
      let r = {};
      return T(l.value.searchInputs, (i) => {
        i.value !== null && (r[i.key] = i.value);
      }), T(l.value.filters, (i) => {
        i.value !== null && (r[i.key] = i.value);
      }), r;
    }
    function ge() {
      const r = l.value.columns;
      let i = Be(r, (h) => !h.hidden), f = Oe(i, (h) => h.key).sort();
      return Pe(f, t.value.defaultVisibleToggleableColumns) ? {} : f;
    }
    function he() {
      const r = fe(), i = ge(), f = {};
      Object.keys(r).length > 0 && (f.filter = r), Object.keys(i).length > 0 && (f.columns = i);
      const h = l.value.cursor, y = l.value.page, L = l.value.sort, ue = l.value.perPage;
      return h && (f.cursor = h), y > 1 && (f.page = y), ue > 1 && (f.perPage = ue), L && (f.sort = L), f;
    }
    function pe() {
      const r = K.parse(location.search.substring(1)), i = n.name === "default" ? "" : n.name + "_";
      T(["filter", "columns", "cursor", "sort"], (h) => {
        delete r[i + h];
      }), delete r[v.value], T(he(), (h, y) => {
        y === "page" ? r[v.value] = h : y === "perPage" ? r.perPage = h : r[i + y] = h;
      });
      let f = K.stringify(r, {
        filter(h, y) {
          return typeof y == "object" && y !== null ? Te(y) : y;
        },
        skipNulls: !0,
        strictNullHandling: !0
      });
      return (!f || f === v.value + "=1") && (f = ""), f;
    }
    const N = S(!1), A = S(null);
    function H(r) {
      r && o.get(
        r,
        {},
        {
          replace: !0,
          preserveState: !0,
          preserveScroll: n.preserveScroll !== !1,
          onBefore() {
            N.value = !0;
          },
          onCancelToken(i) {
            A.value = i;
          },
          onFinish() {
            N.value = !1;
          },
          onSuccess() {
            if ("queryBuilderProps" in o.page.props && (l.value.cursor = t.value.cursor, l.value.page = t.value.page), n.preserveScroll === "table-top") {
              const f = B.value.getBoundingClientRect().top + window.pageYOffset + -8;
              window.scrollTo({ top: f });
            }
            u.value++;
          }
        }
      );
    }
    U(l, () => {
      H(location.pathname + "?" + pe());
    }, { deep: !0 });
    const ne = () => {
      u.value++;
    };
    Q(() => {
      document.addEventListener("inertia:success", ne);
    }), we(() => {
      document.removeEventListener("inertia:success", ne);
    });
    function se(r) {
      l.value.sort == r ? l.value.sort = `-${r}` : l.value.sort = r, l.value.cursor = null, l.value.page = 1;
    }
    function G(r) {
      const i = V("columns", r);
      return !l.value.columns[i].hidden;
    }
    function oe(r) {
      const i = V("columns", r), f = qe(t.value.columns[i]);
      return f.onSort = se, f;
    }
    return (r, i) => (s(), x(xe, null, {
      default: _(() => [
        (s(), d("fieldset", {
          ref_key: "tableFieldset",
          ref: B,
          key: `table-${e.name}`,
          dusk: `table-${e.name}`,
          class: C(["min-w-0", { "opacity-75": N.value }])
        }, [
          a("div", Rt, [
            a("div", Et, [
              w(r.$slots, "tableFilter", {
                hasFilters: t.value.hasFilters,
                hasEnabledFilters: t.value.hasEnabledFilters,
                filters: t.value.filters,
                onFilterChange: le
              }, () => [
                t.value.hasFilters ? (s(), x(wt, {
                  key: 0,
                  "has-enabled-filters": t.value.hasEnabledFilters,
                  filters: t.value.filters,
                  "on-filter-change": le
                }, null, 8, ["has-enabled-filters", "filters"])) : k("", !0)
              ])
            ]),
            t.value.globalSearch ? (s(), d("div", Wt, [
              w(r.$slots, "tableGlobalSearch", {
                hasGlobalSearch: t.value.globalSearch,
                label: t.value.globalSearch ? t.value.globalSearch.label : null,
                value: t.value.globalSearch ? t.value.globalSearch.value : null,
                onChange: te
              }, () => [
                t.value.globalSearch ? (s(), x($t, {
                  key: 0,
                  class: "flex-grow",
                  label: t.value.globalSearch.label,
                  value: t.value.globalSearch.value,
                  "on-change": te
                }, null, 8, ["label", "value"])) : k("", !0)
              ])
            ])) : k("", !0),
            w(r.$slots, "tableReset", {
              canBeReset: "canBeReset",
              onClick: Z
            }, () => [
              ve.value ? (s(), d("div", Nt, [
                z(Pt, { "on-click": Z })
              ])) : k("", !0)
            ]),
            w(r.$slots, "tableAddSearchRow", {
              hasSearchInputs: t.value.hasSearchInputs,
              hasSearchInputsWithoutValue: t.value.hasSearchInputsWithoutValue,
              searchInputs: t.value.searchInputsWithoutGlobal,
              onAdd: X
            }, () => [
              t.value.hasSearchInputs ? (s(), x(ut, {
                key: 0,
                class: "order-3 sm:order-4 mr-2 sm:mr-4",
                "search-inputs": t.value.searchInputsWithoutGlobal,
                "has-search-inputs-without-value": t.value.hasSearchInputsWithoutValue,
                "on-add": X
              }, null, 8, ["search-inputs", "has-search-inputs-without-value"])) : k("", !0)
            ]),
            w(r.$slots, "tableColumns", {
              hasColumns: t.value.hasToggleableColumns,
              columns: t.value.columns,
              hasHiddenColumns: t.value.hasHiddenColumns,
              onChange: ae
            }, () => [
              t.value.hasToggleableColumns ? (s(), x(gt, {
                key: 0,
                class: "order-4 mr-4 sm:mr-0 sm:order-5",
                columns: t.value.columns,
                "has-hidden-columns": t.value.hasHiddenColumns,
                "on-change": ae
              }, null, 8, ["columns", "has-hidden-columns"])) : k("", !0)
            ])
          ]),
          w(r.$slots, "tableSearchRows", {
            hasSearchRowsWithValue: t.value.hasSearchInputsWithValue,
            searchInputs: t.value.searchInputsWithoutGlobal,
            forcedVisibleSearchInputs: p.value,
            onChange: E
          }, () => [
            t.value.hasSearchInputsWithValue || p.value.length > 0 ? (s(), x(Ft, {
              key: 0,
              "search-inputs": t.value.searchInputsWithoutGlobal,
              "forced-visible-search-inputs": p.value,
              "on-change": E,
              "on-remove": ce
            }, null, 8, ["search-inputs", "forced-visible-search-inputs"])) : k("", !0)
          ]),
          w(r.$slots, "tableWrapper", { meta: j.value }, () => [
            z(zt, {
              class: C({ "mt-3": !m.value })
            }, {
              default: _(() => [
                w(r.$slots, "table", {}, () => [
                  a("table", At, [
                    a("thead", Ht, [
                      w(r.$slots, "head", {
                        show: G,
                        sortBy: se,
                        header: oe
                      }, () => [
                        a("tr", Gt, [
                          (s(!0), d(F, null, P(t.value.columns, (f) => (s(), x(Ne, {
                            key: `table-${e.name}-header-${f.key}`,
                            cell: oe(f.key)
                          }, null, 8, ["cell"]))), 128))
                        ])
                      ])
                    ]),
                    a("tbody", Kt, [
                      w(r.$slots, "body", { show: G }, () => [
                        (s(!0), d(F, null, P(b.value, (f, h) => (s(), d("tr", {
                          key: `table-${e.name}-row-${h}`,
                          class: C(["", {
                            "bg-gray-50": e.striped && h % 2,
                            "hover:bg-gray-100": e.striped,
                            "hover:bg-gray-50": !e.striped
                          }])
                        }, [
                          (s(!0), d(F, null, P(t.value.columns, (y) => D((s(), d("td", {
                            key: `table-${e.name}-row-${h}-column-${y.key}`,
                            class: "text-sm py-4 px-6 text-gray-500 whitespace-nowrap"
                          }, [
                            w(r.$slots, `cell(${y.key})`, { item: f }, () => [
                              M(g(f[y.key]), 1)
                            ])
                          ])), [
                            [R, G(y.key)]
                          ])), 128))
                        ], 2))), 128))
                      ])
                    ])
                  ])
                ]),
                w(r.$slots, "pagination", {
                  onClick: H,
                  hasData: W.value,
                  meta: j.value,
                  perPageOptions: t.value.perPageOptions,
                  onPerPageChange: re
                }, () => [
                  z(nt, {
                    "on-click": H,
                    "has-data": W.value,
                    meta: j.value,
                    "per-page-options": t.value.perPageOptions,
                    "on-per-page-change": re
                  }, null, 8, ["has-data", "meta", "per-page-options"])
                ])
              ]),
              _: 3
            }, 8, ["class"])
          ])
        ], 10, Dt))
      ]),
      _: 3
    }));
  }
};
export {
  Y as ButtonWithDropdown,
  Ne as HeaderCell,
  je as OnClickOutside,
  nt as Pagination,
  dl as Table,
  ut as TableAddSearchRow,
  gt as TableColumns,
  wt as TableFilter,
  $t as TableGlobalSearch,
  Pt as TableReset,
  Ft as TableSearchRows,
  zt as TableWrapper,
  de as getTranslations,
  ul as setTranslation,
  il as setTranslations
};
