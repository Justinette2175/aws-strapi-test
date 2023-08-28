module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("URL"),
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9bf8cc74ab83590b280df0851beaec60"),
    },
  },
});
