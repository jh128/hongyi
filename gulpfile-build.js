const gulp = require('gulp')

//gulp-sass 基于 node-sass
const sass = require('gulp-sass')
//webpack 打包工具
const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

//版本号控制 保证用户和开发者的程序的一致性
const rev = require('gulp-rev')
//gulp-rev根据文件内容计算生成一个 hash 字符串
// gulp-rev生成一个映射表，列出映射关系
// gulp-rev-collector根据映射表
const revCollector = require('gulp-rev-collector')

const sequence = require('gulp-sequence')

const del = require('del')
//压缩
const uglify = require('gulp-uglify')
const minifyCSS = require('gulp-minify-css')
const minifyHTML = require('gulp-minify-html')

var uglifyes = require('uglify-es')
var composer = require('gulp-uglify/composer');
var pump = require('pump');

const babel = require('gulp-babel')

gulp.task('scss',()=>{
    return  gulp.src('./src/styles/app.scss') //src 源
        .pipe(sass().on('error',sass.logError)) //pipe 流
        .pipe(rev())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(rev.minifest())
        .pipe(gulp.dest('./dist/rev/styles')) //dest=>destination 写入目标文件夹(开发环境中)
})

gulp.task('js',()=>{
    return gulp.src('./src/scripts/index.js')
        .pipe(webpack({ //webpack 将entry中的js文件
            entry:'./src/scripts/index.js', //入口 只有一个
            output:{ //出口
                filename:'index.js' //输出后的文件
            },
            module: {
                loaders: [
                  { test: /\.html$/, loader: 'string-loader' },
                ],
            },
        }))
        .pipe(rev())
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(rev.minifest())
        .pipe(gulp.dest('./dist/rev/scripts')) // dest 打包后写入./dev/scripts目录下
})

// const minify = composer(uglifyes,console);
// gulp.task('compress',function(cb){
//     const options = {};

//     pump([
//         gulp.src('./dist/scripts/*.js'),
//         minify(options),
//         gulp.dest('./dist/scripts/')
//     ],
//      cb
//     );
// });

gulp.task('copyhtml',()=> {
    return gulp.src(['./*.html','./dist/rev/**/*.json'])
        // .pipe(revCollector({
        //     replaceReved:true
        // }))
        // .pipe(minifyHTML())
        .pipe(gulp.dest('./dist'))
})

gulp.task('copylibs',()=>{
    return gulp.src(['./src/libs/*.js'])
            .pipe(gulp.dest('./dist/libs'))
})

gulp.task('copyicon',()=> {
    return gulp.src(['./src/iconfonts/*'])
            .pipe(gulp.dest('./dist/iconfonts'))
})

gulp.task('clear',del.bind(null,['./dist/**/*'],{
    force:true
}))

// 定义任务
gulp.task('default',(cb)=>{
    sequence('clear',['js','scss'],['copyhtml','copylibs','copyicon'])(cb)
    console.log('build done.');
})