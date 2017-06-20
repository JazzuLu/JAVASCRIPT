//加载模块
var gulp = require("gulp"); //gulp
var concat = require("gulp-concat"); //合并文件
var connect = require("gulp-connect"); //热部署（即时刷新）
var uglify = require("gulp-uglify"); //压缩JS
var sass = require("gulp-ruby-sass"); //编译sass
var rename = require("gulp-rename"); //重命名文件
var imagemin = 

//定义一个任务，处理html
gulp.task("refreshHTML",function(){
	gulp.src("./*.html").pipe(connect.reload());
});
//编译sass任务
gulp.task("compileSass",function(){
	sass("./scss/**/*.scss",{
		style: expanded
	}).pipe(gulp.dest("./css"));
});
//处理JS任务
gulp.task("js", function(){
	//common压缩
	gulp.src("./js/common.js").pipe(uglify())
		//压缩完成后又做了一个重命名
		.pipe(rename("common.min.js")).pipe(gulp.dest("./dist/js/common"));
	//plug下的所有JS压缩并同时合并成一个文件
	gulp.src("./js/plug/**/*.js").pipe(uglify())
		.pipe(concat("plug.min.js")).pipe(gulp.dest("./dist/js/plugin"));
});
//处理CSS任务
gulp.task("css", function(){
	gulp.src("./*.css").pipe(connect.reload());
})
//监听任务
gulp.task("watch",function(){
	//让connect启动一个服务器，这样它才能即时刷新浏览器
	connect.server({
		livereload:true
	});
	//检测文件的变化，执行相应的任务
	gulp.watch("./*.html", ["refreshHTML"]);
	gulp.watch("./scss/**/*.scss", ["compileSass"]);
	gulp.watch("./css/**/*.css", ["css"]);
	gulp.watch("./js/**/*.js", ["js"]);
});
