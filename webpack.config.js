var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('web/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('js/backend', [
        './node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
        './node_modules/admin-lte/bower_components/jquery-ui/jquery-ui.min.js',
        './node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/admin-lte/bower_components/raphael/raphael.min.js',
        './node_modules/admin-lte/bower_components/morris.js/morris.min.js',
        './node_modules/admin-lte/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
        './node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        './node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        './node_modules/admin-lte/bower_components/jquery-knob/dist/jquery.knob.min.js',
        './node_modules/admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.js',
        './node_modules/admin-lte/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        './node_modules/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        './node_modules/admin-lte/bower_components/fastclick/lib/fastclick.js',
        './node_modules/admin-lte/dist/js/adminlte.min.js'
    ])
    .addStyleEntry('css/backend', [
        './node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/admin-lte/bower_components/font-awesome/css/font-awesome.min.css',
        './node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css',
        './node_modules/admin-lte/dist/css/AdminLTE.min.css',
        './node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
        './node_modules/admin-lte/bower_components/morris.js/morris.css',
        './node_modules/admin-lte/bower_components/jvectormap/jquery-jvectormap.css',
        './node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
        './node_modules/admin-lte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
    ])
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you use Sass/SCSS files
//.enableSassLoader()

// uncomment if you're having problems with a jQuery plugin
.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();