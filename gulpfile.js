const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");
const del = require("del");


// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build/html"))
    .pipe(sync.stream());
};

exports.html = html;

const clean = () => {
  return del("build");
};
exports.clean = clean;

// Images
const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
      .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.mozjpeg({progressive: true}),
        imagemin.svgo()
      ]));
};

exports.images = images;

// Webp
const makewebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
      .pipe(webp({quality: 90}))
      .pipe(gulp.dest("source/img"));
};

exports.makewebp = makewebp;

// Sprite
const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
      .pipe(svgstore())
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("build/img"))
};

exports.sprite = sprite;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", styles);
  gulp.watch("source/*.html", html);
};

exports.default = gulp.series(
  styles, server, watcher
);

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

const build = () => gulp.series(
  "clean",
  "copy",
  "styles",
  "html",
  "images",
  "makewebp",
  "sprite"
);

exports.build = gulp.series(clean, copy, styles, html, images, makewebp, sprite);

const start = () => gulp.series(
  clean,
  copy,
  styles,
  html,
  server,
  watcher
);
exports.start = gulp.series(clean, copy, styles, html, server, watcher);
