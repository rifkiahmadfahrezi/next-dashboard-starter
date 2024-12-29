export const routes = [
   {
      link: '/',
      label: 'Home',
   },
   {
      link: '/about',
      label: 'About',
   },
   {
      link: '/dashboard',
      label: 'Dashboard',
   },
   {
      link: '/contact',
      label: 'Contact',
   },
]

export const activeLink = (link : string, pathname : string) : boolean => {
  return link === "/" && pathname !== "/"
    ? false
    : pathname === link || pathname.startsWith(link + "/");
};

export type Routes = typeof routes