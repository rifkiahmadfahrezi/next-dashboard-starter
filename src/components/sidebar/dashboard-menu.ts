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
            link: '/dashboard/overview',
            label: 'Overview',
            icon: 'layout-dashboard',
            newTab: false,
            isLink: true,
            subItems: null
         },
         {
            link: '/dashboard/data-table',
            label: 'Data table',
            icon: 'table',
            newTab: false,
            isLink: true,
            subItems: null
         },
         {
            link: '/dashboard/rich-text-editor',
            label: 'Rich text editor',
            icon: 'notebook-pen',
            newTab: false,
            isLink: true,
            subItems: null
         },
      ]
   },
   {
      title: 'Pages',
      items: [
         {
            link: '#',
            label: 'Error pages',
            icon: 'shield-alert',
            newTab: false,
            isLink: true,
            subItems: [
               {
                  label: "Not found (404)",
                  link: "/not-found",
                  newTab: true
               },
               {
                  label: "Server error (500)",
                  link: "/server-error",
                  newTab: true
               },
               {
                  label: "Not allowed",
                  link: "/not-allowed",
                  newTab: true
               },
               {
                  label: "Maintenance",
                  link: "/maintenance",
                  newTab: true
               },
            ]
         },
         {
            link: '#',
            label: 'Auth pages',
            icon: 'key-round',
            newTab: false,
            isLink: true,
            subItems: [
               {
                  label: "Login",
                  link: "/login",
                  newTab: true
               },
               {
                  label: "Register",
                  link: "/register",
                  newTab: true
               },
               {
                  label: "Forgot password",
                  link: "/forgot-password",
                  newTab: true
               },
            ]
         },
      ]
   }
]