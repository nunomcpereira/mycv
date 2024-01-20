const gulp = require('gulp');

// Define a task to copy files from src to dist
gulp.task('build', function () {
    return gulp.src('./**/*') // Selects all files and folders in src
        .pipe(gulp.dest('dist')); // Copies files to the dist folder
});