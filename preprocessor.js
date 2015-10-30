var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Allow the stage to be configured by an environment
    // variable, but use Babel's default stage (2) if
    // no environment variable is specified.
    var src;

    if (filename.indexOf('css') !== -1) {
      var classObject = {};
      var classRegex = /\(\.(.*)\)/;

      while (src.length > 1) {
        var classes = classRegex.exec(src);

        if (!classes) {
          src = "";
          continue;
        }

        classes = classes[1];
        src = src.substring(src.indexOf(classes) + classes.length);
        classObject[classes] = classes;
      }
      return 'module.exports = ' + JSON.stringify(classObject);
    }


    src = src.replace(/console\.time.*/mg, '');
    src = src.replace("(__DEV__)", '(true)', 'g');
    src = src.replace('json!', '');

    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      src = babel.transform(src, {
        filename: filename,
        stage: 0,
        retainLines: true,
      }).code;
    }

    return src;
  }
};


