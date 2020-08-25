import Vue from "vue";
import App from "./App.vue";
import Vant from 'vant';
import router from "./router";
import store from "./store";
import './styles/reset.scss'
import './styles/iconfont.css'
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
