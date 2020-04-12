"use strict";
const chalk = require('chalk');
const { Command } = require('commander');
const fs = require('fs');

class Application {
    constructor(rootPath) {
        this.init()
        this.rootPath = rootPath
    }
    init() {
        this.program = new Command();
        this.program
            .version('0.0.1', '-v, --vers', 'output the current version')
            .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue')
            .name(chalk.yellow("simple-n"))
            .usage("command [options] [arguments]")
            .arguments('<cmd> [env]')
            .action(function (cmd, env) {
                var cmdValue = cmd;
                var envValue = env;
                console.log(cmdValue)
                console.log(envValue)
            });
        this.commandList = [];
    }
    add(obj) {
        var singature = obj.signature
        var description = obj.description
        this.program.option(chalk.green(singature), description)
        this.commandList[singature] = obj;
        return this;
    }
    doRun() {
        return this;
    }
    find(path) {
        var _this = this
        var files = fs.readdirSync(path);
        files.forEach(function (filename) {
            let commandClass = require(path + '\\' + filename);
            let command = new commandClass();
            _this.add(command);
        })


        return this;
    }
    run() {
        this.program.parse(process.argv);
        console.log(process.argv)

        return this;
    }
}

module.exports = Application