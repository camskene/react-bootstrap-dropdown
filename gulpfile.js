var gulp = require('gulp');                   // responsible for build process
var gutil = require('gulp-util');             // responsible for console logging build process
var source = require('vinyl-source-stream');  // handles passing text files from one part of the build process to another
var browserify = require('browserify');       // figures out what parts of your code depends on other parts and makes sure load order is done correctly
var watchify = require('watchify');           // watches files for changes and reruns build process
var reactify = require('reactify');           // converts JSX to JS

gulp.task('default', function() {
  var bundler = watchify(browserify({         // create bundler - the bundler is responsible for running browserify on our code base
    entries: ['./src/app.jsx'],               // starting point of our app
    transform: [reactify],                    // tells browserify to compile JSX while it's also figuring out dependencies
    extensions: ['.jsx'],                     // the files to look at during the build process
    debug: false,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));


  function build(file) {                                      // define build function to run bundler
    if (file) gutil.log('Recompiling ' + file);               // log message in terminal
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) // catch any build errors and log their output
      .pipe(source('main.js'))                                // let's put all our compiled code
      .pipe(gulp.dest('./'));                                 // here
  }
  build();                                                    // run build - this runs when you type `gulp` in the terminal
  bundler.on('update', build)                                 // if files change run build again
});
