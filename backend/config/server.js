module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('41b41cec280e38e0e14d791d3a416982','dec7cfdcf1cbd09ed7587559fef47dd2'),
  },
  url: env('STRAPI_URL'),
});
