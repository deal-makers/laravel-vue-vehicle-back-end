export default [
    {
        url: "/",
        name: "Dashboard",
        slug: "dashboard",
        icon: "HomeIcon",
    },
    {
        name: "Sanitation",
        slug: "sanitation",
        icon: "DropletIcon",
        submenu: [
            {
                url: "/vehicle-groups",
                name: "Vehicle Groups",
                slug: "vehicle-groups",
                icon: "CodeSandboxIcon",
            },
            {
                url: "#",
                name: "Vehicles",
                slug: "vehicles",
                icon: "TruckIcon",
            },
            {
                url: "#",
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
                url: "",
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
                url: "#",
                name: "Status",
                slug: "status",
                icon: "SunIcon",
            },
            {
                url: "#",
                name: "Sanitation Activity",
                slug: "sanitation-activity",
                icon: "BarChart2Icon",
            }
        ]
    },
    {
        name: "Global Admin",
        slug: "global-admin",
        icon: 'CommandIcon',
        submenu: [
            {
                url: "/devices",
                name: "Devices",
                slug: "devices",
                icon: "FileIcon",
            },
            {
                url: "/device_groups",
                name: "Device Groups",
                slug: "device_groups",
                icon: "FileIcon",
            },
            {
                url: "/logs",
                name: "Logs",
                slug: "logs",
                icon: "FileIcon"
            },
            {
                url: "/remote_devices",
                name: "Remote IoT devices",
                slug: "remote",
                icon: "FileIcon"
            },
            {
                url: "/users",
                name: "Users",
                slug: "users",
                icon: "UsersIcon"
            }
        ]
    },

]
