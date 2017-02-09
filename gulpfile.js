'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant')
var rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");


var path = {
    build: {
        js: 'app/build/js/',
        css: 'app/build/css/',
        img: 'app/build/img/'
    },
    src: { 
        js: [
        	'app/app.js',
        	'app/phone-list/phone-list.module.js',
        	'app/app.config.js',
        	'app/directives.js',
        	'app/phone-list/phone-list.component.js',
        	'app/phone-detail/phone-detail.module.js',
        	'app/phone-detail/phone-detail.component.js',
        	'app/busket-items/busket-item.module.js',
        	'app/busket-items/busket-item.service.js',
        	'app/busket-items/busket-item.directive.js'

        ],
        style: 'app/css/style.css',
        img: 'app/img/**/*.*', 

    },
    clean: './build'
};



gulp.task('css:build', function () {
    gulp.src(path.src.style)
    	.pipe(sourcemaps.init()) 
        .pipe(autoprefixer()) 
        .pipe(cleanCSS()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) 
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
     	.pipe(rigger())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))

});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'js:build',
    'css:build',
    'image:build'
]);