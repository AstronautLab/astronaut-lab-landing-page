export default {
  getSiteData: () => ({
    title: 'Astronaut Lab',
  }),

  // Routes and their respective data
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  },
};
