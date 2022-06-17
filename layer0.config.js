module.exports = {
  connector: "@layer0/vue-storefront",
  backends: {
    api: {
      domainOrIp: "api.your-backend.com",
      hostHeader: "api.your-backend.com",
    },
  },
  includeNodeModules: true,
  includeFiles: {
    "themeConfig.js": true,
    "middleware.config.js": true,
  },
};
