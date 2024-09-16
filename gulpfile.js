const { src, dest, watch, parallel } = require('gulp')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()
const del = require('del')

function styles() {
    return src(['app/scss/style.scss'])
        .pipe(concat('style.min.css'))
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/slick-carousel/slick/slick.js',
        'app/js/main.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())

        .pipe(dest('app/js'))

        .pipe(browserSync.stream())
}

function CleanDist() {
    return del('dist')
}

function build() {
    return src([
        'app/css/**/*.css',
        'app/fonts/dist/**/*',
        'app/images/dist/**/*', '!app/images/dist/**/*.svg',
        'app/js/main.min.js',
        'app/*.html'
    ], { base: 'app' })

        .pipe(dest('dist'))
}


function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch(["app/*.html"]).on('change', browserSync.reload);
}

exports.styles = styles
exports.scripts = scripts
exports.CleanDist = CleanDist

exports.watching = watching
exports.browsersync = browsersync
exports.build = build
exports.default = parallel(watching, browsersync,)
