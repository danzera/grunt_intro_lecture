module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      main: {
        src: ["client/script/client.js"],
        dest: "server/public/script/client.min.js"
      }
    },
    copy: {
      jquery: {
        expand: true,
        cwd: "node_modules/jquery/dist/",
        src: ["jquery.js"],
        dest: "server/public/vendors/"
      },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/css/",
        src: ["bootstrap.css"],
        dest: "server/public/styles/"
      },
      customStyles: {
        expand: true,
        cwd: "client/styles/",
        src: ["style.css"],
        dest: "server/public/styles/"
      },
      html: {
        expand: true,
        cwd: "client/views/",
        src: ["index.html"],
        dest: "server/public/views/"
      }
    },
    watch: {
      files: ["client/script/*.js", "client/styles/*.css", "client/views/*.html"],
      tasks: ['uglify', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};
