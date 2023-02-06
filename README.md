# start
起手設定

# @each解釋
```
@each $key, $value in $grid-breakpoints{

}

其中
$key 代表的是 $grid-breakpoints 內所定義的名稱
$value 代表的是 $grid-breakpoints 內所定義的數值
$grid-breakpoints  可自行設定名稱 內容 類似陣列的概念 
EX:
$grid-breakpoints: (
    "": false,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    $key:$value
);
```

# @gulp自動化

### 步驟
安裝 glup
npm i gulp-cli -g  //全域安裝
npm init  //建立package.json
npm i gulp //專案安裝

去目錄底下建立 gulpfile.js
```js
const gulp = require('gulp');

gulp.task('copyFile', () => {
  // 'copyFile' 是任務名稱，可自行定義
  return gulp.src('./index.html').pipe(gulp.dest('./public'));
});
```

>gulp.task()：創建名為 copyFile 的任務(水管名稱)
>gulp.src()：導入 index.html 這一個檔案(水的來源)
>.pipe()：以 gulp.src() 導入的檔案需做的處理(截獲水源所做的處理)
>gulp.dest()：檔案輸出的目錄(水該從何處流出)

安裝所需plugin
npm i sass //sass安裝
npm i gulp-sass //sass編譯
npm i gulp-purgecss //移除沒用的CSS
並參考如下gulpfile.js

```js
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
```



