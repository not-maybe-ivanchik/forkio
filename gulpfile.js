import gulp from "gulp";
import clean from "gulp-clean";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cssMin from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import jsMin from "gulp-js-minify";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";

const sass = gulpSass(dartSass);
const BS = browserSync.create();

const buildStyles = () =>
  gulp
    .src("./src/**/*.scss")
    .pipe(sass())
    .pipe(autoPrefixer({ cascade: false }))
    .pipe(cssMin({ compatibility: "ie8" }))
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("dist/styles"));

const buildScripts = () =>
  gulp
    .src("./src/**/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(jsMin())
    .pipe(gulp.dest("dist/scripts"));

const buildImages = () =>
  gulp.src("./src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));

const cleanDist = () => gulp.src("./dist/*", { read: false }).pipe(clean());

export const build = gulp.series(
  cleanDist,
  gulp.parallel(buildStyles, buildScripts, buildImages)
);

export const dev = gulp.series(build, () => {
  BS.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch(
    "./src/**/*",
    gulp.series(build, (done) => {
      BS.reload();
      done();
    })
  );
});
