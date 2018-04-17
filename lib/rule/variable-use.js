'use strict';

module.exports = {
    pattern: /(--[\w\d-_]+)(?!:)([\(\), ;]+)/g,
    replacement: 'var($1)$2',
    order: 2
}