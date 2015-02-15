var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    imagemin = require('gulp-imagemin');

var paths = {
    scss: './sass/*.scss',
    css: './static/css',
    images: './images/*.*',
    img: './static/img'
};

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest(paths.css));
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(imagemin({}))
        .pipe(gulp.dest(paths.img));
});

gulp.task('default',function(){
    gulp.start('styles', 'images');
});

gulp.task('watch', ['styles', 'images'], function() {
    gulp.watch(paths.scss, ['styles']);
    gulp.watch(paths.images, ['images']);
});
