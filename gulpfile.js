//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    connect = require('gulp-connect');
// 定义一个启动gulp的任务，端口为8888
gulp.task('server',function(){
    connect.server({
        root: './',
        port: 8888,
        livereload: true
    });
});
//定义一个flex任务（自定义任务名称）
gulp.task('flex', function () {
    gulp.src('./less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./styles')); //将会在src/css下生成相应的css文件
});

gulp.task('watchLess',function(){
//监听所有less文件，如果有变化，则执行flex编译方法
 gulp.watch('./less/*.less',['flex']);
});

//定义默认任务 在nodejs运行gulp的时候，执行watchLess和server任务
gulp.task('default',['watchLess','server']);