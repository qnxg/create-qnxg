const Generator = require('yeoman-generator');
const {basename} = require('path');
const glob = require('glob');
const {statSync} = require('fs');
const debug = require('debug')('create-qnxg:BasicGenerator');

function noop() {
  return true;
}

class BasicGenerator extends Generator {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.name = basename(opts.env.cwd);
  }

  writeFiles({context, filterFiles = noop}) {
    debug(`context: ${JSON.stringify(context)}`);
    glob
      .sync('**/*', {
        cwd: this.templatePath(),
        dot: true,
      })
      .filter(filterFiles)
      .forEach(file => {
        debug(`copy ${file}`);
        const filePath = this.templatePath(file);
        if (statSync(filePath).isFile()) {
          this.fs.copyTpl(
            this.templatePath(filePath),
            this.destinationPath(file.replace(/^_/, '.')),
            context,
          );
        }
      });
  }

  prompt(questions) {
    process.send && process.send({type: 'prompt'});
    process.emit('message', {type: 'prompt'});
    return super.prompt(questions);
  }
}

module.exports = BasicGenerator;
