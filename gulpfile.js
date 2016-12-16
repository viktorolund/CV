'use strict';

var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    less = require('gulp-less'),
    path = require('path'),
    changelog = require('gulp-conventional-changelog'),
    buildSrc = {},
    buildTaskNames = [],
    buildTasks,
    watchTasks;

gulp.task('changelog', () => {
  return gulp.src('CHANGELOG.md', {
    buffer: false
  })
    .pipe(changelog({
      preset: 'angular'
      //,
      //releaseCount: 0
    }))
    .pipe(gulp.dest('./'));
});

buildSrc = {
    styles: {
        less: {
            src: ['src/less/*'],
            dest: 'dist/css',
            dependencies: ['src/less/*']
        }
    },
    copy: {
        html: {
            src: ['src/index.html'],
            dest: 'dist',
            dependencies: ['src/index.html'],
            wiredepOptions: {
                ignorePath: "../dist/"
            }
        },
        partials: {
            src: ['src/partials/**/*'],
            dest: 'dist/partials',
            dependencies: ['src/partials/**/*']
        },
        js: {
            src: ['src/js/app/**/*'],
            dest: 'dist/js/app',
            dependencies: ['src/js/app/**/*']
        },
        images: {
            src: ['src/images/*'],
            dest: 'dist/images',
            dependencies: ['src/images/*'] 
        }
    }
};

Object.keys(buildSrc).map(function(buildTask) {

    buildTasks = Object.keys(buildSrc[buildTask]);
    buildTaskNames = buildTaskNames.concat(buildTasks);

    /**
     *  Add Tasks
     */
    buildTasks.map(function(buildTaskName) {
        var buildTaskConfig = buildSrc[buildTask][buildTaskName],
            watchTaskName = 'watch:' + buildTaskName;

        if (buildTask === 'styles') {
            gulp.task(buildTaskName, function() {
                return gulp.src(buildTaskConfig.src)
                    .pipe(less({
                    paths: [ path.join(__dirname, 'less', 'includes') ]
                    }))
                    .pipe(gulp.dest(buildTaskConfig.dest))
            });
        } else if (buildTaskName === 'html') {
            gulp.task(buildTaskName, function() {
                return gulp.src(buildTaskConfig.src)
                    .pipe(wiredep(buildTaskConfig.wiredepOptions))
                    .pipe(gulp.dest(buildTaskConfig.dest))
            });
        } else {
            gulp.task(buildTaskName, function() {
                return gulp.src(buildTaskConfig.src)
                    .pipe(gulp.dest(buildTaskConfig.dest))
            });
        }

        /**
         *  Add watch tasks
         */
        gulp.task(watchTaskName, function() {
            gulp.watch(buildTaskConfig.dependencies, [buildTaskName]);
        });

    });

    /**
     *  Add build task
     *  gulp.task('build', [<taskone>, <tasktwo>, ...]);
     */
    gulp.task('build', buildTaskNames);

    /**
     *  Add task to watch all tasks
     *  gulp.task('watch:all', [<taskone>:watch, <tasktwo>:watch, ...]);
     */
    watchTasks = buildTaskNames.map((t) => { return "watch:" + t });
    gulp.task("watch:all", watchTasks);

});
