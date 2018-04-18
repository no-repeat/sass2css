'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

module.exports = function* (cwd, file, otherFile) {
    const ruleDir = path.join(__dirname, './rule');
    const ruleFiles = fs.readdirSync(ruleDir);
    const srcCont = fs.readFileSync(file, 'utf8');

    let rules = ruleFiles.map(function (filename) {
        return require(`${ruleDir}/${filename}`);
    });
    rules = _.sortBy(rules, 'order');

    let result = [srcCont].concat(rules).reduce(function (source, item) {
        return source.replace(item.pattern, item.replacement);
    });

    // because css variable must have a scope, so give a default scope
    result = `:root {\n${result}\n}`;

    fs.writeFileSync(otherFile, result, 'utf8');
    
    console.log(chalk.green('Covert Finished'));
};