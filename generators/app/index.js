var Generator = require('yeoman-generator');
var to = require('to-case');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {

        const obj = {
            name: this.args[0],
            gitName: to.slug(this.args[0])
        };

        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(),
            obj
        );
    }
};