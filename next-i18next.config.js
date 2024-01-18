const path = require('path')
module.exports ={
  i18n: {
    defaultLocale: 'id',
    locales: ['en', 'id'],
    localeDetection: false,
    localePath: path.resolve('./public/locales')
  },
  reloadOnPrerender: process.env.NODE_ENV == "development"
}
