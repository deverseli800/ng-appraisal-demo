import Vue from 'vue';
import Antd from 'ant-design-vue';
import { FormModel } from 'ant-design-vue';
import VueRouter from 'vue-router';
import 'ant-design-vue/dist/antd.css';
import Property from "./components/Property";
import Photos from "./components/Photos"
import CapRateConclusion from "./components/CapRateConclusion";
import Report from './components/Report';
import SiteDescriptionSection from "./components/SiteDescriptionSection";
import SubjectPropertyPhotosSection from "./components/SubjectPropertyPhotosSection";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(FormModel);
Vue.use(VueRouter);

const routes = [
  { path: '/photos', component: Photos },
  { path: '/propertyDescription', component: Property },
  { path: '/capRateConclusion', component: CapRateConclusion },
  { path: '/',
    component: Report,
    children: [
      {
        path: 'siteDescription',
        component: SiteDescriptionSection,
        name: 'Site Description',
        icon: 'bank'
      },
      {
        path: 'subjectPropertyPhotos',
        component: SubjectPropertyPhotosSection,
        name: 'Subject Property Photos',
        icon: 'bank'
      },
    ]},
  { path: '*', redirect: '/siteDescription' }
]

export const router = new VueRouter({
  routes // short for `routes: routes`
})

export default Vue

