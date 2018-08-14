const routes = [{
  path: '/',
  component: () => import('layouts/main'),
  children: [{
    path: '',
    component: () => import('pages/index')
  }]
}, {
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
  path: '/product/new',
  component: () => import('layouts/main'),
  children: [{
    path: '',
    component: () => import('pages/create-product')
  }]
}, {
  path: '/product/update/:id',
  component: () => import('layouts/main'),
  children: [{
    path: '',
    component: () => import('pages/update-product')
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
