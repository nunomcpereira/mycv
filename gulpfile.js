const gulp = require('gulp');

// Define a task to copy files from src to dist, excluding node_modules
gulp.task('build', function () {
    return gulp.src(['./**/*', '!./node_modules/**']) // Selects all files in src except node_modules
        .pipe(gulp.dest('dist')); // Copies files to the dist folder
});