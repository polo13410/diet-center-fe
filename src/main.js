import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { router } from "./router/index.js";
import { createAuth0 } from "@auth0/auth0-vue";
import authConfig from "../auth_config.json";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/github.css";


hljs.registerLanguage('json', json);

createApp(App)
  .use(hljsVuePlugin)
  .use(router(App))
  .use(
    createAuth0({
      domain: authConfig.domain,
      client_id: authConfig.clientId,
      redirect_uri: window.location.origin,
    })
  )
  .use(Vuex)
  .use(Quasar, quasarUserOptions)
  .mount("#app");
