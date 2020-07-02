// next.config.js
const withImages = require('next-images');
const withPWA = require('next-pwa');

module.exports = withPWA(
  withImages({
    pwa: {
      dest: 'public',
    },
  })
);
