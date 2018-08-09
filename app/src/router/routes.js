const routes = [{
  path: '/',
  component: () => import('layouts/main'),
  children: [{
    path: '',
    component: () => import('pages/index')
  }]
},
  
  {
    path: '/products',
    component: () => import('layouts/main'),
    children: [{
      path: '',
      component: () => import('pages/products')
    }]
  }, {
    path: '/cart',
    component: () => import('layouts/main'),
    children: [{
      path: '',
      component: () => import('pages/cart')
    }]
  }, {
    path: '/new-product',
    component: () => import('layouts/main'),
    children: [{
      path: '',
      component: () => import('pages/new-product')
    }]
  }];

// Always leave this as last one
if(process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
