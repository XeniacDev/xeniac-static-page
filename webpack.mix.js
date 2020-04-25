let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.sass('src/styles/main.scss', 'dist/main.css')
mix.js("src/js/main.js", "dist/main.js");


// Test Environment
mix.copy('dist/main.css', 'test/main.css');
mix.copy("dist/main.js", "test/main.js");
mix.disableNotifications();