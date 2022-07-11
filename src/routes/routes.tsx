import CouponsPage from '../routes/coupons/Coupons';
import DashboardPage from './dashboard/Dashboard';

export interface RoutePathDefinition {
    title: string;
    nav?: boolean;
    children?: RoutePathDefinition[];
    path: string;
    element?: () => React.ReactNode;
}

const routes: RoutePathDefinition[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        element: () => <DashboardPage />
    },
    {
        title: 'Store Ops',
        path: '/store-ops'
    },
    {
        title: 'Products',
        path: '/products'
    },
    {
        title: 'Pricing',
        path: '/pricing'
    },
    {
        title: 'Menu',
        path: '/menu'
    },
    {
        title: 'Inventory',
        path: '/inventory'
    },
    {
        title: 'Vendor Inventory',
        path: '/vendor-inventory'
    },
    {
        title: 'Coupons',
        path: '/coupons',
        element: () => <CouponsPage />
    },
    {
        title: 'Makeline',
        path: '/makeline'
    },
    {
        title: 'LDA',
        path: '/lda'
    },
    {
        title: 'Device',
        path: '/device'
    },
    {
        title: 'Workforce',
        path: '/workforce'
    },
    {
        title: 'Customer',
        path: '/customer'
    },
    {
        title: 'Finance',
        path: '/finance'
    },
    {
        title: 'Trade Receivables',
        path: '/trace-receivables'
    },
    {
        title: 'Reports',
        path: '/reports'
    },
    {
        title: 'Change Sets',
        path: '/change-sets'
    }
];

export default routes;
