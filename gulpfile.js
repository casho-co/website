import pkg from "gulp";
const { task, src, dest, series, watch } = pkg;
import cleanCSS from "gulp-clean-css";
import { pipeline } from "readable-stream";
import concatCss from "gulp-concat-css";
import browserSync from "browser-sync";
import log from "fancy-log";
import imagemin from "gulp-imagemin";
import htmlmin from "gulp-htmlmin";
import webp from "gulp-webp";
import minify from "gulp-minify";

task("reload", function (done) {
  browserSync.reload();
  done();
});

task("html", function (cb) {
  return pipeline(
    src(["./**/*.html"]),
    htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }),
    dest("dist"),
    cb
  );
});

task("js", function (cb) {
  return pipeline(
    src(["./js/index.js"]),
    minify({ noSource: true }),
    dest("./dist/js"),
    cb
  );
});

task("css", function (cb) {
  return pipeline(
    src(["./css/*.css"]),
    concatCss("style.css"),
    cleanCSS(),
    dest("dist/css"),
    cb
  );
});

task("images", function (cb) {
  return pipeline(
    src(["./images/**/*"]),
    imagemin({
      progressive: true,
    }),
    webp(),
    dest("dist/images"),
    cb
  );
});

task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
});

task(
  "default",
  series("js", "images", "css", "html", () => {
    browserSync.init({
      server: {
        baseDir: "./dist",
      },
    });

    log("Starting Watch...");
    watch("./**/*.js", series("js", "images", "css", "html", "reload"));
    watch("./**/*.css", series("css", "reload"));
    watch("./images/*", series("images", "reload"));
    watch("./*.html", series("html", "reload"));
  })
);
