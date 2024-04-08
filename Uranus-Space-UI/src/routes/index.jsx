import Home from '@/pages/home/Home'

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    // {
    //     path: '/Login',
    //     component: Login,
    //     layout: BlankLayout,
    // },
    // {
    //     path: '/ResetPassword',
    //     component: ResetPass,
    //     layout: BlankLayout,
    // },
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
