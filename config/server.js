module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '38f2cd48e554dbf80fa9eb9f3cf63fa4'),
    },
  },
});
