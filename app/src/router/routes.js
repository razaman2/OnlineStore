export default [{
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
	},
	{
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
	},
	
	{ // Always leave this as last one
		path: '*',
		component: () => import('pages/404')
	}];
