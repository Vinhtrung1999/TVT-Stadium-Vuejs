import {createRouter, createWebHistory} from 'vue-router'

// component
import Home from './components/Home/Home.vue'
import Products from './components/Products/component-Products/Products.vue'
import ProductDetail from './components/Products/component-ProductDetail/ProductDetail.vue'
import index from './components/Products/index.vue'

const routes = [
    {
        path: '/',
        component: Home 
    },
    { 
        path: '/products', 
        component: index,
        children: [
            {
                path:'',
                component: Products
            },
            {
                path:':idSvd',
                component: ProductDetail
            }
        ] 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router