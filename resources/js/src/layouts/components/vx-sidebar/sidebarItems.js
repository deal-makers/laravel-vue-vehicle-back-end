export default [
    {
        url: "/",
        name: "Dashboard",
        slug: "dashboard",
        icon: "HomeIcon",
    },
    {
        name: "ADS Sanitation",
        slug: "sanitation",
        icon: "DropletIcon",
        submenu: [
            {
                url: "/vehicle_groups",
                name: "Vehicle Groups",
                slug: "vehicle-groups",
                icon: "CodeSandboxIcon",
            },
            {
                url: "/vehicles",
                name: "Vehicle Tags",
                slug: "vehicles",
                icon: "TruckIcon",
            },
            {
                url: "/compute-modules",
                name: "Compute Modules",
                slug: "compute-modules",
                icon: "HardDriveIcon",
            }
        ]
    },
    {
        name: "Kiosks",
        slug: "kiosks",
        icon: "TabletIcon",
        submenu: [
            {
                url: "/kiosk/tablets",
                name: "Tablets",
                slug: "tablets",
                icon: "TabletIcon",
            },
        ]
    },
    {
        name: "Reports",
        slug: "reports",
        icon: "BarChartIcon",
        submenu: [
            {
                url: "/reports/status",
                name: "Status",
                slug: "status",
                icon: "SunIcon",
            },
            {
                url: "/reports/sanitation-activity",
                name: "Sanitation Activity",
                slug: "sanitation-activity",
                icon: "BarChart2Icon",
            }
        ]
    },
    /*{
        name: "Global Admin",
        slug: "global-admin",
        icon: 'CommandIcon',
        hidden: true,
        submenu: [
            {
                url: '#a',//"/devices",
                name: "Devices",
                slug: "devices",
                icon: "FileIcon",
            },
            {
                url: '#s',//"/device_groups",
                name: "Device Groups",
                slug: "device_groups",
                icon: "FileIcon",
            },
            {
                url: '#d',//"/remote_devices",
                name: "Remote IoT devices",
                slug: "remote",
                icon: "FileIcon"
            },
            {
                url: '#e',//"/logs",
                name: "Logs",
                slug: "logs",
                icon: "FileIcon"
            },
        ]
    },*/

]
