const mix = require('laravel-mix');

mix
  .options({processCssUrls: false})
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.sass', 'public/css')
