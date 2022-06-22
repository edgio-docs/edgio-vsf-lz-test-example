module.exports = {
  connector: "@layer0/vue-storefront",
  backends: {
    api: {
      domainOrIp: "api.commercetools.com",
      hostHeader: "api.commercetools.com",
    },
  },
  includeNodeModules: true,
  includeFiles: {
    "themeConfig.js": true,
    "middleware.config.js": true,
    middleware: true,
  },
};
