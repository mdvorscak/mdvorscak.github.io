// import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// import VueAnalytics from 'vue-analytics';
import Home from '@/components/Home.vue';
import Resume from '@/components/Resume.vue';
import Projects from '@/components/Projects.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
});

// Vue.use(VueAnalytics, {
//   id: 'UA-111993704-1',
//   router
// });

export default router;
