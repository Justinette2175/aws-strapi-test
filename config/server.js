module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: `http://${env("HOST", "0.0.0.0")}:${env("PORT", 1337)}`,
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  cron: { enabled: true },
  cors: { enabled: true, origin: ["*"] },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9bf8cc74ab83590b280df0851beaec60"),
    },
  },
});
