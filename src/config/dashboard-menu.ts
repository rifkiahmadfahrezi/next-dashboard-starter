export type DashboardMenu = {
   title: string;
   items: DashboardMenuItem[]
}
export type DashboardMenuItem = {
   link: string;
   icon: string; // https://lucide.dev/icons/
   label: string;
   newTab: boolean;
   isLink: boolean;
   subItems: DahboardSubItem[] | null;
}
export type DahboardSubItem = {
   link: string;
   label: string;
   newTab: boolean;
}


export const dashboardMenu : DashboardMenu[] = [
   {
      title: 'Menus',
      items: [
         {
            link: '/dashboard',
            label: 'Dashboard',
            icon: 'layout-dashboard',
            newTab: false,
            isLink: true,
            subItems: null
         },
         {
            link: '/dashboard',
            label: 'Settings',
            icon: 'settings',
            newTab: false,
            isLink: true,
            subItems: [
               {
                 label: "General",
                 link: "#",
                 newTab: false
               },
               {
                 label: "Team",
                 link: "#",
                 newTab: false
               },
               {
                 label: "Billing",
                 link: "#",
                 newTab: false
               },
               {
                 label: "Limits",
                 link: "#",
                 newTab: false
               },
             ],
         },
      ]
   },
]