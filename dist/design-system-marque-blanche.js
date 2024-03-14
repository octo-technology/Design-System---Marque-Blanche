(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("button[data-v-c7486118]{color:red}.storybook-button[data-v-c7486118]{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary[data-v-c7486118]{color:#fff;background-color:#1ea7fd}.storybook-button--secondary[data-v-c7486118]{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.storybook-button--small[data-v-c7486118]{font-size:12px;padding:10px 16px}.storybook-button--medium[data-v-c7486118]{font-size:14px;padding:11px 20px}.storybook-button--large[data-v-c7486118]{font-size:16px;padding:12px 24px}.storybook-header{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}.storybook-header svg{display:inline-block;vertical-align:top}.storybook-header h1{font-weight:700;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;font-size:14px;margin-right:10px}")),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as d, computed as m, openBlock as l, createElementBlock as c, normalizeClass as g, normalizeStyle as h, toDisplayString as y, createElementVNode as a, createTextVNode as p, createCommentVNode as s, createBlock as i, createStaticVNode as f } from "vue";
const z = /* @__PURE__ */ d({
  __name: "Button",
  props: {
    label: {},
    primary: { type: Boolean, default: !1 },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(r, { emit: t }) {
    const e = r, o = t, n = m(() => ({
      "storybook-button": !0,
      "storybook-button--primary": e.primary,
      "storybook-button--secondary": !e.primary,
      [`storybook-button--${e.size || "medium"}`]: !0
    })), k = m(() => ({
      backgroundColor: e.backgroundColor
    })), v = () => {
      o("click", 1);
    };
    return (b, w) => (l(), c("button", {
      type: "button",
      class: g(n.value),
      onClick: v,
      style: h(k.value)
    }, y(b.label), 7));
  }
}), _ = (r, t) => {
  const e = r.__vccOpts || r;
  for (const [o, n] of t)
    e[o] = n;
  return e;
}, u = /* @__PURE__ */ _(z, [["__scopeId", "data-v-c7486118"]]), B = { class: "storybook-header" }, C = /* @__PURE__ */ f('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>', 1), $ = {
  key: 0,
  class: "welcome"
}, V = /* @__PURE__ */ d({
  __name: "Header",
  props: {
    user: {}
  },
  emits: ["createAccount", "login", "logout"],
  setup(r) {
    return (t, e) => (l(), c("header", null, [
      a("div", B, [
        C,
        a("div", null, [
          t.user ? (l(), c("span", $, [
            p("Welcome, "),
            a("b", null, y(t.user.name), 1),
            p("!")
          ])) : s("", !0),
          t.user ? (l(), i(u, {
            key: 1,
            size: "small",
            onClick: e[0] || (e[0] = (o) => t.$emit("logout")),
            label: "Log out"
          })) : s("", !0),
          t.user ? s("", !0) : (l(), i(u, {
            key: 2,
            size: "small",
            onClick: e[1] || (e[1] = (o) => t.$emit("login")),
            label: "Log in"
          })),
          t.user ? s("", !0) : (l(), i(u, {
            key: 3,
            primary: "",
            size: "small",
            onClick: e[2] || (e[2] = (o) => t.$emit("createAccount")),
            label: "Sign up"
          }))
        ])
      ])
    ]));
  }
});
export {
  u as Button,
  V as Header
};
