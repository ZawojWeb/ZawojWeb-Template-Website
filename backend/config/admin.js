module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '200f6076d2fd750c00517de44a7c46ca'),
  },
});
