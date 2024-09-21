/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:z9SUdiRmfyh0@ep-divine-truth-a58qk2lq.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
