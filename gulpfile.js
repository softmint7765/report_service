const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Softmint licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!Softmint

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.Softmint.com/product/argon-dashboard-react
* Copyright 2022 Softmint (https://www.Softmint.com)
* Licensed under MIT (https://github.com/Softmintofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Softmint Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Softmint licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.Softmint-tim.com/product/argon-dashboard-react
* Copyright 2022 Softmint (https://www.Softmint.com)
* Licensed under MIT (https://github.com/Softmintofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Softmint

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Softmint licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.Softmint.com/product/argon-dashboard-react
* Copyright 2022Softmint (https://www.Softmint-tim.com)
* Licensed under MIT (https://github.com/Softminttimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Softmint Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
