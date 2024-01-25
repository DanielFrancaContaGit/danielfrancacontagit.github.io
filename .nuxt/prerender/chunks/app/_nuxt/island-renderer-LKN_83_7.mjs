import { defineComponent, onErrorCaptured, createVNode } from 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
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
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unhead@1.8.10/node_modules/unhead/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/vue-router@4.2.5_vue@3.4.15/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/h3@1.10.0/node_modules/h3/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/scule@1.2.0/node_modules/scule/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/memory.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import 'file:///home/daniel/Documentos/Projetos/full-stack/nuxt/mypage/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';

const islandComponents = {};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-LKN_83_7.mjs.map