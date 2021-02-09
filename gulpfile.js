const gulp 		   = require('gulp');
const sass 		   = require('gulp-sass');
const browserSync  = require('browser-sync').create();
const del          = require('del');

// Clean style when build
function clean() {
  return del(['./root/assets/css/']);
}

//compile scss into css
function style() {
    return gulp.src('root/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))   
    .pipe(gulp.dest('root/assets/css'))    
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./root"
        },
        port: 4000
    });
    gulp.watch('root/scss/**/*.scss', style);
    gulp.watch('root/*.html').on('change',browserSync.reload);
    gulp.watch('root/assets/js/**/*.js').on('change', browserSync.reload);
}

// define complex tasks
const build = gulp.series(clean, style);

// export tasks
exports.style = style;
exports.build = build;
exports.watch = watch;
exports.default = watch;