const BasicGenerator = require('../../basicGenerator');

class Generator extends BasicGenerator {
  // prompting() {
  //   if (this.opts.args && 'isTypeScript' in this.opts.args) {
  //     this.prompts = {
  //       isTypeScript: this.opts.args.isTypeScript,
  //     };
  //   } else {
  //     const prompts = [
  //       {
  //         name: 'isTypeScript',
  //         type: 'confirm',
  //         message: 'Do you want to use typescript?',
  //         default: false,
  //       },
  //     ];

  //     return this.prompt(prompts).then(props => {
  //       this.prompts = props;
  //     });
  //   }
  // }

  writing() {
    this.writeFiles({
      context: {
        name: this.name,
        ...this.prompts,
      },
    });
  }
}

module.exports = Generator;
