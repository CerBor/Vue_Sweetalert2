import Vue from "vue";
import App from "./App.vue";

import VTooltip from "v-tooltip";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const swalOptions = {
  toast: false,
  position: "top-end",
  type: "success"
};
Vue.use(VTooltip);
Vue.use(VueSweetalert2, swalOptions);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
