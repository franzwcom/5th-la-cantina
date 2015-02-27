var gulp = require('gulp'),
    concat = require('gulp-concat');



/*
|-----------------------------------------------------------
| javascripts 
|-----------------------------------------------------------
*/

gulp.task('scripts', function() {
    console.log('..............................running scripts franz :D !!');
    return gulp.src([
            "bower_components/jquery/dist/jquery.min.js",
            "bower_components/angular/angular.min.js",
            "bower_components/angular-route/angular-route.js",
            "bower_components/bootstrap/dist/js/bootstrap.min.js",
            "scripts/app.js",
            "scripts/controllers/product.controller.js",
            "scripts/controllers/prod.controller.js",
            "scripts/controllers/product.service.js",
            "scripts/controllers/cart.controller.js",
            "scripts/controllers/cart.service.js",
            "scripts/controllers/checkoutcart.controller.js"

        ])
        .pipe(concat('master.min.js'))
        .pipe(gulp.dest('./app/public/js/'));

});


/*
|-----------------------------------------------------------
| css files 
|-----------------------------------------------------------
*/

gulp.task('css', [], function() {
    console.log("......................Concatenating and moving all the css files in styles folder");
    gulp.src([
            "bower_components/bootstrap/dist/css/bootstrap.min.css",
            "css/main.css"
        ]) // change for orderly files-link
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./app/public/css'));
});
