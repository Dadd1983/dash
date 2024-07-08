export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        badge: {
            variant: "success",
            text: "menuitems.dashboard.badge"
        },
        link: '/'
    },
    {
        id: 25,
        label: 'menuitems.utility.text',
        icon: 'ri-profile-line',
        subItems: [
            {
                id: 27,
                label: 'menuitems.utility.list.maintenance',
                link: '/pages/maintenance'
            },
            {
                id: 28,
                label: 'menuitems.utility.list.comingsoon',
                link: '/pages/coming-soon'
            },
            {
                id: 32,
                label: 'menuitems.utility.list.error404',
                link: '/pages/error-404'
            },
            {
                id: 33,
                label: 'menuitems.utility.list.error500',
                link: '/pages/error-500'
            },
        ]
    }
];