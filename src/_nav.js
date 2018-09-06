export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
      }
    },
    {
      name: 'Job Tickets',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Open',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Assinged to Me',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Due Today',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Ready to Invoice',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        }]
    },

    {
      name: 'Customers',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      name: 'Products',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Items',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Attributes',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Inventory',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Vendors',
          url: '/charts',
          icon: 'icon-pie-chart'
        },]
    },
    {
      title: true,
      name: 'Finance',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Invoices',
      url: '/charts',
      icon: 'icon-pie-chart'
    },{
      name: 'Estimates',
      url: '/charts',
      icon: 'icon-pie-chart'
    },{
      name: 'Purchase Orders',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      title: true,
      name: 'Reports',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Finance',
      url: '#',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Report 1',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Report 2',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Sales',
      url: '#',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Report 1',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Report 2',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    },

    {
      name: 'Admin',
      url: '/base',
      title: true,
      icon: 'icon-puzzle'
    },
    {
      name: 'User Management',
      url: '#',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Users',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Roles',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Permissions',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        }

      ]
    },
    {
      name: 'Settings',
      url: '/base/collapses',
      icon: 'icon-puzzle'
    }
    ,
    {
      name: 'Media Manager',
      url: 'http://coreui.io/vue/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/vue/',
      icon: 'icon-layers',
      variant: 'danger'
    }
  ]
}
