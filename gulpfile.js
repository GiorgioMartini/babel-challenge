const gulp   = require('gulp'),
      sass   = require('gulp-sass'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      babel  = require('gulp-babel')

gulp.task('copyHtml', () =>{
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('copyCss', () =>{
    gulp.src('src/styles/*.css')
        .pipe(gulp.dest('dist/css'))
})

gulp.task('sass', () =>{
    gulp.src('src/styles/*.scss')
        .pipe(sass({indentedSyntax: true}).on('error',sass.logError))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('babel', () =>{ 
    gulp.src('src/js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('uglify', () =>{
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['copyHtml', 'sass', 'copyCss', 'babel'])
 