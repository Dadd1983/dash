export const menuItems = [
    {
        id: 1,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        link: '/'
    },
    {
        id: 61,
        label: 'menuitems.pages.text',
        icon: 'ri-file-copy-2-line',
        subItems: [
            {
                id: 67,
                label: 'menuitems.utility.text',
                subItems: [
                    {
                        id: 69,
                        label: 'menuitems.utility.list.maintenance',
                        link: '/pages/maintenance'
                    },
                    {
                        id: 70,
                        label: 'menuitems.utility.list.comingsoon',
                        link: '/pages/coming-soon'
                    },
                    {
                        id: 74,
                        label: 'menuitems.utility.list.error404',
                        link: '/pages/error-404'
                    },
                    {
                        id: 75,
                        label: 'menuitems.utility.list.error500',
                        link: '/pages/error-500'
                    }
                ]
            }
        ]
    }
];