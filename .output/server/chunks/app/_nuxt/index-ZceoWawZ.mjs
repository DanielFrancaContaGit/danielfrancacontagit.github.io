import { useSSRContext, resolveComponent, withCtx, createVNode, mergeProps, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './projetos-jpRZlK1k.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../../nitro/node-server.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card_title = resolveComponent("v-card-title");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ id: "home" }, _attrs), {
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
                    _push4(ssrRenderComponent(_component_v_card_title, { class: "text-white text-md-h2 text-h4 text-wrap text-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Bem vindo ao meu site `);
                        } else {
                          return [
                            createTextVNode(" Bem vindo ao meu site ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Feito por Daniel Fran\xE7a `);
                        } else {
                          return [
                            createTextVNode(" Feito por Daniel Fran\xE7a ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_title, { class: "text-white text-md-h2 text-h4 text-wrap text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" Bem vindo ao meu site ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                        default: withCtx(() => [
                          createTextVNode(" Feito por Daniel Fran\xE7a ")
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
                    createVNode(_component_v_card_title, { class: "text-white text-md-h2 text-h4 text-wrap text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Bem vindo ao meu site ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                      default: withCtx(() => [
                        createTextVNode(" Feito por Daniel Fran\xE7a ")
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
                  createVNode(_component_v_card_title, { class: "text-white text-md-h2 text-h4 text-wrap text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Bem vindo ao meu site ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_title, { class: "text-white text-subtitle-1 mt-3 mb-20" }, {
                    default: withCtx(() => [
                      createTextVNode(" Feito por Daniel Fran\xE7a ")
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
  const _component_v_row = resolveComponent("v-row");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    flat: "",
    id: "sobremim"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, {
          align: "center",
          justify: "center",
          class: "ma-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 class="text-h2 mb-10 text-blue-grey-darken-4"${_scopeId2}>-------</h1>`);
            } else {
              return [
                createVNode("h1", { class: "text-h2 mb-10 text-blue-grey-darken-4" }, "-------")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card, {
          variant: "outlined",
          class: "h-auto rounded",
          color: "blue-grey-darken-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex flex-col flex-sm-row h-100 justify-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                color: "grey",
                size: "330",
                class: "ma-3 my-5 d-none d-md-block rounded"
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
              _push3(`<div class="d-flex flex-col pr-md-20 pl-md-5"${_scopeId2}>`);
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
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Oi, sou um estudante de Engenharia Eletr\xF4nica e apaixonado por desenvolvimento. Aqui, compartilho meu percurso de aprendizado, explorando as interse\xE7\xF5es entre eletr\xF4nica e programa\xE7\xE3o. De projetos simples a desafios mais complexos, cada linha de c\xF3digo representa meu compromisso com o crescimento profissional. Meu interesse abrange \xE1reas como backend, frontend, devops e machinelearning. Estou sempre em busca de novas ferramentas e linguagens para expandir minhas habilidades. `);
                  } else {
                    return [
                      createTextVNode(" Oi, sou um estudante de Engenharia Eletr\xF4nica e apaixonado por desenvolvimento. Aqui, compartilho meu percurso de aprendizado, explorando as interse\xE7\xF5es entre eletr\xF4nica e programa\xE7\xE3o. De projetos simples a desafios mais complexos, cada linha de c\xF3digo representa meu compromisso com o crescimento profissional. Meu interesse abrange \xE1reas como backend, frontend, devops e machinelearning. Estou sempre em busca de novas ferramentas e linguagens para expandir minhas habilidades. ")
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
                createVNode("div", { class: "d-flex flex-col flex-sm-row h-100 justify-center" }, [
                  createVNode(_component_v_avatar, {
                    color: "grey",
                    size: "330",
                    class: "ma-3 my-5 d-none d-md-block rounded"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_img, { src: "https://avatars.githubusercontent.com/u/57536006?v=4" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex flex-col pr-md-20 pl-md-5" }, [
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
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Oi, sou um estudante de Engenharia Eletr\xF4nica e apaixonado por desenvolvimento. Aqui, compartilho meu percurso de aprendizado, explorando as interse\xE7\xF5es entre eletr\xF4nica e programa\xE7\xE3o. De projetos simples a desafios mais complexos, cada linha de c\xF3digo representa meu compromisso com o crescimento profissional. Meu interesse abrange \xE1reas como backend, frontend, devops e machinelearning. Estou sempre em busca de novas ferramentas e linguagens para expandir minhas habilidades. ")
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
          createVNode(_component_v_row, {
            align: "center",
            justify: "center",
            class: "ma-0"
          }, {
            default: withCtx(() => [
              createVNode("h1", { class: "text-h2 mb-10 text-blue-grey-darken-4" }, "-------")
            ]),
            _: 1
          }),
          createVNode(_component_v_card, {
            variant: "outlined",
            class: "h-auto rounded",
            color: "blue-grey-darken-4"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex flex-col flex-sm-row h-100 justify-center" }, [
                createVNode(_component_v_avatar, {
                  color: "grey",
                  size: "330",
                  class: "ma-3 my-5 d-none d-md-block rounded"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_img, { src: "https://avatars.githubusercontent.com/u/57536006?v=4" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex flex-col pr-md-20 pl-md-5" }, [
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
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Oi, sou um estudante de Engenharia Eletr\xF4nica e apaixonado por desenvolvimento. Aqui, compartilho meu percurso de aprendizado, explorando as interse\xE7\xF5es entre eletr\xF4nica e programa\xE7\xE3o. De projetos simples a desafios mais complexos, cada linha de c\xF3digo representa meu compromisso com o crescimento profissional. Meu interesse abrange \xE1reas como backend, frontend, devops e machinelearning. Estou sempre em busca de novas ferramentas e linguagens para expandir minhas habilidades. ")
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
  const _component_Projetos = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_v_main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Home, { class: "mb-15" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Baner, { class: "my-15" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Projetos, { class: "my-15" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Home, { class: "mb-15" }),
          createVNode(_component_Baner, { class: "my-15" }),
          createVNode(_component_Projetos, { class: "my-15" })
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

export { index as default };
//# sourceMappingURL=index-ZceoWawZ.mjs.map
