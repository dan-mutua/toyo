module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cdf7feb9cc677ef93b1a004ad0c194e8'),
  },
});
