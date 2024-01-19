import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card_title = resolveComponent("v-card-title");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_img, {
          "aspect-ratio": "16/9",
          cover: "",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, { class: "d-flex flex-col align-center h-100 justify-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_title, { class: "text-white text-h2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Titulo do meu site `);
                        } else {
                          return [
                            createTextVNode(" Titulo do meu site ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Sub titulo do meu site `);
                        } else {
                          return [
                            createTextVNode(" Sub titulo do meu site ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_title, { class: "text-white text-h2" }, {
                        default: withCtx(() => [
                          createTextVNode(" Titulo do meu site ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                        default: withCtx(() => [
                          createTextVNode(" Sub titulo do meu site ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, { class: "d-flex flex-col align-center h-100 justify-center" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "text-white text-h2" }, {
                      default: withCtx(() => [
                        createTextVNode(" Titulo do meu site ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                      default: withCtx(() => [
                        createTextVNode(" Sub titulo do meu site ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_img, {
            "aspect-ratio": "16/9",
            cover: "",
            src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_container, { class: "d-flex flex-col align-center h-100 justify-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "text-white text-h2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Titulo do meu site ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                    default: withCtx(() => [
                      createTextVNode(" Sub titulo do meu site ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    flat: "",
    class: "pa-7 mw-100"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, {
          variant: "outlined",
          class: "h-auto rounded"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex flex-line h-100"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                color: "grey",
                size: "250",
                class: "ma-3 rounded"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_img, { src: "https://avatars.githubusercontent.com/u/57536006?v=4" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_img, { src: "https://avatars.githubusercontent.com/u/57536006?v=4" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="d-flex flex-col pr-20 pl-10"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h6 mt-5 font-weight-light" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` O que eu sou? `);
                  } else {
                    return [
                      createTextVNode(" O que eu sou? ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5 font-weight-regular text-wrap" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Eu sou Daniel Franca, um estudante de engenharia e desenvolvedor web. `);
                  } else {
                    return [
                      createTextVNode(" Eu sou Daniel Franca, um estudante de engenharia e desenvolvedor web. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_text, { class: "text-subtitle-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! `);
                  } else {
                    return [
                      createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card_actions, { class: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "https://github.com/DanielFrancaContaGit",
                      target: "_blank"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_btn, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` github `);
                              } else {
                                return [
                                  createTextVNode(" github ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(" github ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "https://www.linkedin.com/in/daniel-silva-franca",
                      target: "_blank"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_btn, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` linkedin `);
                              } else {
                                return [
                                  createTextVNode(" linkedin ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(" linkedin ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "https://github.com/DanielFrancaContaGit",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, null, {
                            default: withCtx(() => [
                              createTextVNode(" github ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        to: "https://www.linkedin.com/in/daniel-silva-franca",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, null, {
                            default: withCtx(() => [
                              createTextVNode(" linkedin ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex flex-line h-100" }, [
                  createVNode(_component_v_avatar, {
                    color: "grey",
                    size: "250",
                    class: "ma-3 rounded"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_img, { src: "https://avatars.githubusercontent.com/u/57536006?v=4" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex flex-col pr-20 pl-10" }, [
                    createVNode(_component_v_card_title, { class: "text-h6 mt-5 font-weight-light" }, {
                      default: withCtx(() => [
                        createTextVNode(" O que eu sou? ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_title, { class: "text-h5 font-weight-regular text-wrap" }, {
                      default: withCtx(() => [
                        createTextVNode(" Eu sou Daniel Franca, um estudante de engenharia e desenvolvedor web. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "text-subtitle-1" }, {
                      default: withCtx(() => [
                        createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, { class: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "https://github.com/DanielFrancaContaGit",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(" github ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          to: "https://www.linkedin.com/in/daniel-silva-franca",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, null, {
                              default: withCtx(() => [
                                createTextVNode(" linkedin ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, {
            variant: "outlined",
            class: "h-auto rounded"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex flex-line h-100" }, [
                createVNode(_component_v_avatar, {
                  color: "grey",
                  size: "250",
                  class: "ma-3 rounded"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_img, { src: "https://avatars.githubusercontent.com/u/57536006?v=4" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex flex-col pr-20 pl-10" }, [
                  createVNode(_component_v_card_title, { class: "text-h6 mt-5 font-weight-light" }, {
                    default: withCtx(() => [
                      createTextVNode(" O que eu sou? ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_title, { class: "text-h5 font-weight-regular text-wrap" }, {
                    default: withCtx(() => [
                      createTextVNode(" Eu sou Daniel Franca, um estudante de engenharia e desenvolvedor web. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, { class: "text-subtitle-1" }, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, { class: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "https://github.com/DanielFrancaContaGit",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, null, {
                            default: withCtx(() => [
                              createTextVNode(" github ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        to: "https://www.linkedin.com/in/daniel-silva-franca",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, null, {
                            default: withCtx(() => [
                              createTextVNode(" linkedin ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_main = resolveComponent("v-main");
  const _component_Home = __nuxt_component_0;
  const _component_Baner = __nuxt_component_1;
  _push(ssrRenderComponent(_component_v_main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Home, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Baner, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Home),
          createVNode(_component_Baner)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-ODhryQWq.js.map
