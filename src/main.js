import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

// 时间格式化
Vue.filter("dateformat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
