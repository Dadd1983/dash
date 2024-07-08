import store from '@/state/store';

export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/pages/account/login.vue'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'home' });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/pages/account/register.vue'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'home' });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: '/forgot-password',
        name: 'Forgot-password',
        component: () => import('../views/pages/account/forgot-password.vue'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'home' });
                } else {
                    // Continue to the login page
                    next();
                }
            },
        },
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                if (import.meta.env.VITE_VUE_APP_DEFAULT_AUTH === "firebase") {
                    store.dispatch('auth/logOut');
                } else {
                    store.dispatch('authfack/logout');
                }
                const authRequiredOnPreviousRoute = routeFrom.matched.some(
                    (route) => route.push('/login')
                );
                // Navigate back to previous page, or home as a fallback
                next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom });
            },
        },
    },
    {
        path: '/',
        name: 'Dashboard',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/dashboard/index.vue')
    },
    {
        path: '/pages/maintenance',
        name: 'Maintenance',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/maintenance.vue')
    },
    {
        path: '/pages/coming-soon',
        name: 'Coming-soon',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/coming-soon.vue')
    },
    {
        path: '/pages/error-404',
        name: 'Error 404',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/error-404.vue')
    },
    {
        path: '/pages/error-500',
        name: 'Error 500',
        meta: { authRequired: true },
        component: () => import('../views/pages/utility/error-500.vue')
    },
];
