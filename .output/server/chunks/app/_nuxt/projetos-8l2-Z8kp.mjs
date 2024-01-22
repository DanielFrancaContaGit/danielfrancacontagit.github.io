import { useSSRContext, ref, resolveComponent, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "githubbutton",
  __ssrInlineRender: true,
  props: {
    href: String,
    title: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_title = resolveComponent("v-card-title");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "d-flex text-h8 justify-center align-center",
        "max-width": "300",
        href: props.href,
        target: "_blank",
        rel: "noopener"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, {
              icon: "mdi-github",
              size: "x-small",
              class: "ml-3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_title, { class: "text-subtitle-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_icon, {
              icon: "mdi-open-in-new",
              size: "x-small",
              class: "mr-3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_icon, {
                icon: "mdi-github",
                size: "x-small",
                class: "ml-3"
              }),
              createVNode(_component_v_card_title, { class: "text-subtitle-2" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.title), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_icon, {
                icon: "mdi-open-in-new",
                size: "x-small",
                class: "mr-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/githubbutton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$1;
const _sfc_main = {
  __name: "projetos",
  __ssrInlineRender: true,
  setup(__props) {
    const variants = ["tonal", "tonal", "tonal", "tonal", "tonal", "tonal"];
    const color = ref("blue-grey-darken-4");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_Githubbutton = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_v_container, mergeProps({ id: "projetos" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h2 mb-10 text-blue-grey-darken-4"${_scopeId2}>Projetos</h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-h2 mb-10 text-blue-grey-darken-4" }, "Projetos")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(variants, (variant, i) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: i,
                      cols: "auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: "mx-auto",
                            width: "350",
                            color: unref(color),
                            variant
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card_item, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div${_scopeId5}><div class="text-overline mb-1"${_scopeId5}>${ssrInterpolate(variant)}</div><div class="text-h6 mb-1"${_scopeId5}> Headline </div><div class="text-caption"${_scopeId5}>Greyhound divisely hello coldly fonwderfully</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-overline mb-1" }, toDisplayString(variant), 1),
                                          createVNode("div", { class: "text-h6 mb-1" }, " Headline "),
                                          createVNode("div", { class: "text-caption" }, "Greyhound divisely hello coldly fonwderfully")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_card_actions, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Githubbutton, {
                                        class: "ml-2 mb-2",
                                        title: "ver projeto",
                                        href: "https://vuetifyjs.com/en/styles/flex/#flex-justify"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Githubbutton, {
                                          class: "ml-2 mb-2",
                                          title: "ver projeto",
                                          href: "https://vuetifyjs.com/en/styles/flex/#flex-justify"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card_item, null, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-overline mb-1" }, toDisplayString(variant), 1),
                                        createVNode("div", { class: "text-h6 mb-1" }, " Headline "),
                                        createVNode("div", { class: "text-caption" }, "Greyhound divisely hello coldly fonwderfully")
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Githubbutton, {
                                        class: "ml-2 mb-2",
                                        title: "ver projeto",
                                        href: "https://vuetifyjs.com/en/styles/flex/#flex-justify"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: "mx-auto",
                              width: "350",
                              color: unref(color),
                              variant
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-overline mb-1" }, toDisplayString(variant), 1),
                                      createVNode("div", { class: "text-h6 mb-1" }, " Headline "),
                                      createVNode("div", { class: "text-caption" }, "Greyhound divisely hello coldly fonwderfully")
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Githubbutton, {
                                      class: "ml-2 mb-2",
                                      title: "ver projeto",
                                      href: "https://vuetifyjs.com/en/styles/flex/#flex-justify"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["color", "variant"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(variants, (variant, i) => {
                      return createVNode(_component_v_col, {
                        key: i,
                        cols: "auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "mx-auto",
                            width: "350",
                            color: unref(color),
                            variant
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-overline mb-1" }, toDisplayString(variant), 1),
                                    createVNode("div", { class: "text-h6 mb-1" }, " Headline "),
                                    createVNode("div", { class: "text-caption" }, "Greyhound divisely hello coldly fonwderfully")
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Githubbutton, {
                                    class: "ml-2 mb-2",
                                    title: "ver projeto",
                                    href: "https://vuetifyjs.com/en/styles/flex/#flex-justify"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["color", "variant"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, {
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h2 mb-10 text-blue-grey-darken-4" }, "Projetos")
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(variants, (variant, i) => {
                    return createVNode(_component_v_col, {
                      key: i,
                      cols: "auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "mx-auto",
                          width: "350",
                          color: unref(color),
                          variant
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-overline mb-1" }, toDisplayString(variant), 1),
                                  createVNode("div", { class: "text-h6 mb-1" }, " Headline "),
                                  createVNode("div", { class: "text-caption" }, "Greyhound divisely hello coldly fonwderfully")
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_Githubbutton, {
                                  class: "ml-2 mb-2",
                                  title: "ver projeto",
                                  href: "https://vuetifyjs.com/en/styles/flex/#flex-justify"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["color", "variant"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projetos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=projetos-8l2-Z8kp.mjs.map
