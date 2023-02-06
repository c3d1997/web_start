const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // 載入 gulp-sass 套件
const purgecss = require('gulp-purgecss')

gulp.task('sass', () => {
    return gulp
        .src('./scss/all.scss') // SCSS 主檔案路徑
        .pipe(sass().on('error', sass.logError)) // 使用 gulp-sass 進行編譯\
        .pipe(gulp.dest('./css')); // 編譯完成輸出路徑
});

gulp.task('watch', () => {
    return gulp
        .watch('./scss/all.scss', gulp.series('sass'));
});

// 移除沒用的CSS
gulp.task('purgecss', () => {
    return gulp
        .src('./scss/all.scss')
        .pipe(purgecss({
            content: ['index.html']
        }))
        .pipe(gulp.dest('./css')); // 編譯完成輸出路徑
})