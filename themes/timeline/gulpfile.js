var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
    sass: './source/css/*.scss',
    css:  './static/css'
};

gulp.task('styles', function () {
    return gulp.src(paths.sass)
        .pipe(sass({
            includePaths: ['styles']
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});

gulp.task('default',function(){
    gulp.start('styles');
});

gulp.task('watch', ['styles'], function() {
    gulp.watch(paths.sass, ['styles']);
    gulp.watch(paths.images, ['images']);
});
