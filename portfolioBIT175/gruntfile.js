module.exports = function(grunt){
    uglify: {
  options: {
    // the banner is inserted at the top of the output
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  },
  dist: {
    files: {
      'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    }
  }
},

jshint: {
  // define the files to lint
  files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
  // configure JSHint (documented at http://www.jshint.com/docs/)
  options: {
    // more options here if you want to override JSHint defaults
    globals: {
      jQuery: true,
      console: true,
      module: true
    }
  }
},

watch: {
  files: ['<%= jshint.files %>'],
  tasks: ['jshint', 'qunit']
}
    grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

};

