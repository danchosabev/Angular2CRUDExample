var gulp = require('gulp'),
	gp_clean = require('gulp-clean'),
	gp_concat = require('gulp-concat'),
	gp_less = require('gulp-less'),
	gp_sourcemaps = require('gulp-sourcemaps'),
	gp_typescript = require('gulp-typescript'),
	gp_uglify = require('gulp-uglify');

/// Define paths
var srcPaths = {
	app: ['app/**/*.ts'],
	app_files: ['app/**/*.html', 'app/**/*.css'],
	libs: [		
		'core-js/client/shim.min.js',
		'zone.js/dist/zone.js',
		'reflect-metadata/Reflect.js',
		'systemjs/dist/system.src.js',
		//'typescript/lib/typescript.js',
		'bootstrap/dist/js/bootstrap.*js',
		'moment/moment.js',
		'@angular/**',
		'rxjs/**',
		'primeng/**'
	]
};

var destPaths = {
	app: 'wwwroot/app/',
	libs: 'wwwroot/libs/'	
};

// Compile, minify and create sourcemaps all TypeScript files 
// and place them to wwwroot/app, together with their js.map files.
gulp.task('app', function () {
	return gulp.src(srcPaths.app)
		.pipe(gp_sourcemaps.init())
		.pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
		//.pipe(gp_uglify({ mangle: false }))
		.pipe(gp_sourcemaps.write('/'))
		.pipe(gulp.dest(destPaths.app));
});

gulp.task('app_files', function () {
	return gulp.src(srcPaths.app_files)		
		.pipe(gulp.dest(destPaths.app));
});


// Delete wwwroot/app contents
gulp.task('app_clean', function () {
	return gulp.src(destPaths.app + "*", { read: false })
	.pipe(gp_clean({ force: true }));
});

// Copy all Libs files from external libraries to wwwroot/libs
gulp.task('libs', function () {	
	return gulp.src(srcPaths.libs, {cwd: "node_modules/**"})
		.pipe(gulp.dest(destPaths.libs));
});

// Watch specified files and define what to do upon file changes
gulp.task('watch', function () {
	gulp.watch([srcPaths.app, srcPaths.app_files, srcPaths.libs], ['app', 'app_files', 'libs']);
});

// Define the default task so it will launch all other tasks
gulp.task('default', ['app', 'app_files', 'libs', 'watch']);