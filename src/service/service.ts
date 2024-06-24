export const getAdminMenus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "about",
          route: "/about",
          filePath: "/pages/about/index.tsx",
        },
        {
          name: "home",
          route: "/home",
          filePath: "/pages/home/index.tsx",
        },
      ]);
    }, 1000);
  });
};
