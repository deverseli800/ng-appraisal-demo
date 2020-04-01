import Vue from 'vue';
import Antd from 'ant-design-vue';
import { FormModel } from 'ant-design-vue';
import VueRouter from 'vue-router';
import 'ant-design-vue/dist/antd.css';
import Property from "./components/Property";
import Photos from "./components/Photos"
import CapRateConclusion from "./components/CapRateConclusion";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(FormModel);
Vue.use(VueRouter);

const routes = [
  { path: '/photos', component: Photos },
  { path: '/propertyDescription', component: Property },
  { path: '/capRateConclusion', component: CapRateConclusion }
]

export const router = new VueRouter({
  routes // short for `routes: routes`
})

export default Vue

