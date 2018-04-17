'use strict';

const path = require('path');
const fs = require('fs');
const assert = require('chai').assert;
const child_process = require('child_process');
const co = require('co');
const sass2css = require('../lib/index.js');

describe('sass to css', function () {
    it('should covert to a file', function () {
        const cwd = process.cwd();
        const now = Date.now();
        const source = path.join(__dirname, './asset/variable.scss');
        const dest = path.join(__dirname, `./asset/${now}.css`);

        co(function* () {
            yield sass2css(cwd, source, dest);
            const result = fs.readFileSync(dest);

            assert(result.length > 0);
        }).catch((err) => {
            console.log(err);
        });
    });
});
