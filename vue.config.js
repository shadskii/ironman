module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/ironman/' : '/',
  pwa: {
    name: 'Death Countdown',
    themeColor: '#C7202D',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  },
};


