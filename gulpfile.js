var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;

var paths = {
    scss: './sass/*.scss',
    css: './static/css'
};

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest(paths.css));
});

gulp.task('default',function(){
    gulp.start('styles');
});

gulp.task('watch', ['styles'], function() {
    gulp.watch(paths.scss, ['styles']);
});
