import { _ as __nuxt_component_0 } from './projetos-jpRZlK1k.mjs';
import { resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_main = resolveComponent("v-main");
  const _component_Projetos = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Projetos, { class: "my-15" }, null, _parent2, _scopeId));
      } else {
        return [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projetos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projetos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projetos as default };
//# sourceMappingURL=projetos-sf09Euua.mjs.map
