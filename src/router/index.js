import Vue from 'vue';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';
import Home from '@/components/Home';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';

Vue.use(Router);

const router = new Router({
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

Vue.use(VueAnalytics, {
  id: 'UA-111993704-1',
  router
});

export default router;
