const gulp = require('gulp')

const server = require('gulp-webserver')
//gulp-sass 基于 node-sass
const sass = require('gulp-sass')
//webpack 打包工具
const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const babel = require('gulp-babel')

const watch = require('gulp-watch')

gulp.task('server',()=>{
    return gulp.src('./dev')  // src 源 server目录的path
        .pipe(server({
        host:'localhost',
        port:8000,
        livereload:true, //自动刷新目录下的文件
        // directoryListing: {//true 让浏览器能够显示当前目录
        //     enable:true,
        //     path:'./dev' //在列式目录中定义path
        // },
        // middleware:[
        //     proxy('/api',{
        //         target:'http://localhost:9000',
        //         changeOrigin:true
        //     }),
        //     proxy('/bl',{
        //         target:'https://m.bl.com/h5-web/page',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '^/bl':''
        //         }
        //     })
        // ]
    }))
})

gulp.task('scss',()=>{
    return  gulp.src('./src/styles/*.scss') //src 源
        .pipe(sass().on('error',sass.logError)) //pipe 流
        .pipe(gulp.dest('./dev/styles')) //dest=>destination 写入目标文件夹(开发环境中)
})

gulp.task('js',()=>{
    return gulp.src('./src/scripts/*.js')
        .pipe(webpack({ //webpack 将entry中的js文件
            entry:{
             app: './src/scripts/index.js',
                'hy-login':'./src/scripts/hy-login.js',
                'hy-register':'./src/scripts/hy-register.js',
                'hy-findpwd':'./src/scripts/hy-findpwd.js',
                'hy-personal':'./src/scripts/hy-personal.js',
                'hy-course':'./src/scripts/hy-course.js',
                'hy-youxuan':'./src/scripts/hy-youxuan.js',
                'hy-detail':'./src/scripts/hy-detail.js',
                'hy-pay':'./src/scripts/hy-pay.js',
                'hy-paysucc':'./src/scripts/hy-paysucc.js',
                'hy-buy':'./src/scripts/hy-buy.js'
            },
            output:{ //出口
                filename:'[name].js' //输出后的文件
            },
            module:{
                loaders:[  //test 测试html文件, loader 给webpack用的
                    {   test:/\.html$/,loader:'string-loader'},
                ],
            }
        }))
        // .pipe(babel({
        //     presets:['env','stage-0']
        // }))
        .pipe(gulp.dest('./dev/scripts')) // dest 打包后写入./dev/scripts目录下
})

gulp.task('copyhtml',()=> {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./dev/'))
})

gulp.task('copylibs',()=>{
    return gulp.src(['./src/libs/**/*'])
        .pipe(gulp.dest('./dev/libs'))
})

gulp.task('copyimg',()=>{
    return gulp.src(['./src/styles/images/*'])
        .pipe(gulp.dest('./dev/styles/images'))
})

gulp.task('copyicon',()=>{
    return gulp.src(['./src/iconfonts/**/*'])
        .pipe(gulp.dest('./dev/iconfonts'))
})

gulp.task('watch',()=>{
    // gulp.watch('./*.html',['copyhtml'])
    // gulp.watch('./src/styles/**/*',['scss'])
    // gulp.watch('./src/scripts/**/*',['js'])

    watch('./*.html', () => {
        gulp.start('copyhtml')
      })
      watch('./src/styles/**/*', () => {
        gulp.start('scss')
      })
      watch('./src/scripts/**/*', () => {
        gulp.start('js')
      })
})

// 定义任务
gulp.task('default',['js','scss','copyhtml','copylibs','copyicon','copyimg','server','watch'],()=>{
    console.log('done.');
})