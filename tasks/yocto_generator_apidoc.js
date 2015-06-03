/*
 * grunt-yocto-generator-apidoc
 * n
 *
 * Copyright (c) 2015 Balard Cedric
 * Licensed under the MIT license.
 */

'use strict';

var _         = require('lodash');
var generator = require('../src/generator.js');
var path      = require('path');


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('yocto_generator_apidoc', 'Plugin for generate comments file for apidoc', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      modelsFolder: '',
      dest: ''
    });

    // Test if parms is ok
    if (_.isEmpty(options.modelsFolder) || _.isEmpty(options.dest)) {

      grunt.log.error('You have an error in your grunt file configuration for grunt-yocto-generator-apidoc');
      return false;
    }

    // Destination file
    var destFile  = path.normalize(process.cwd() + '/' + options.dest);

    //folder where all json are
    var src = path.normalize(process.cwd() + '/' + options.modelsFolder +'/*.json');

    //Declare the module async
    var done = this.async();

    grunt.log.writeln('Source foler are in  : ' + src);
    grunt.log.writeln('Destination file is : ' + destFile);


    //start a procress
    generator.startProcess(src, destFile, this.async());

    grunt.log.writeln('');
    grunt.log.ok('Comments file was generate at ' + destFile);

   });
};
