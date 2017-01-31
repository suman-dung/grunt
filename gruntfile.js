module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
         },
         dist: {
            files: {
               'dist/main.min.js': ['<%= concat.js.dest %>']
            }
         }
      },
      jshint: {
		   // define the files to lint
         files: ['Gruntfile.js', 'js/*.js'],
         // configure JSHint
      },
	
	concat: {
       css: {
         src: [
           'sass/*.scss',
         ],
         dest: 'sass/build.scss',
       },
	   
	   js : {
			src: ['js/*.js'],
			dest: 'js/build.js',
		}
     },
	
	sass: {                                 // Task
	   dist: {     
		 files: {
		   'css/main.css':'sass/main.scss',
		   'css/style.css':'sass/style.scss',
		 }

	   }
	},
	
	
    abc: {
        js: {
            paths: ["js/**/*.js"],
            output: "head.js"
        },
        css: {
            paths: ["css/**/*.css"],
            output: "head.css"
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
   

   grunt.registerTask('default', ['concat','uglify', 'sass']);
   
   grunt.registerMultiTask("abc", "Append JS/CSS assets to a file", function() {
    var paths = grunt.file.expand( this.data.paths ),
        out = this.data.output,
        contents = "";
		console.log("1",this.data);
		console.log("2",paths);
		console.log("3",out);
		var srcf = grunt.file.read(paths[0]);
			console.log("4",srcf);
    paths.forEach(function( path ) {
        if ( /\.js$/i.test( path ) ) {
            contents += '<script src="' + path + '"></script>';
        } else if ( /\.css$/i.test( path )) {
            contents += '<link rel="stylesheet" type="text/css" href=' + path + ' />';
        }
    });

    grunt.file.write( out, contents );
});



};