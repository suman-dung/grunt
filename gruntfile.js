module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
         },
         dist: {
            files: {
               'dist/main.min.js': ['<%= concat.dist.dest %>']
            }
         }
      },
      jshint: {
		   // define the files to lint
         files: ['Gruntfile.js', 'js/**/*.js'],
         // configure JSHint
         options: {
            // more options here if you want to override JSHint defaults
            globals: {
               jQuery: true,
            }
         }
      },
	
	concat: {
       dist: {
         src: [
           'sass/*.scss',
         ],
         dest: 'sass/build.scss',
       }
     },

	sass: {                                 // Task
	   dist: {     
		 files: {
		   'css/main.css':'sass/main.scss',
		   'css/style.css':'sass/style.scss',
		 }

	   }
	}


	
	
		
		
   });

   grunt.loadNpmTasks('grunt-contrib-compass');
   grunt.loadNpmTasks('grunt-compass-multiple');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-sass');
   

   //grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass']);
   grunt.registerTask('default', ['sass']);


};