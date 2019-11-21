export default [
  {
    url: "/",
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
  },
  {
    url: null,
    name: "Orders",
    icon: "FileIcon",
    submenu: [
      {
        url: "/narudzbe/nova",
        name: "New Order",
        slug: "new order",
        icon: "HomeIcon",
      },
      {
        url: "/narudzbe/kalendar",
        name: "Kalendar",
        slug: "kalendar",
        icon: "HomeIcon",
      },
      {
        url: "/narudzbe/pretraga",
        name: "Pretraga narudžbi",
        slug: "pretraga narudzbi",
        icon: "HomeIcon",
      },
      {
        url: "/narudzbe/reklamacije",
        name: "Pregled Reklamacija",
        slug: "pregled reklamacija",
        icon: "HomeIcon",
      },
    ]
  },
]
