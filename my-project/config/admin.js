module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e784479428fb9484425a45eaa4301210'),
  },
});
