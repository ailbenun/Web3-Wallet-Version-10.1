require('@babel/register');
require('ts-node').register({ transpileOnly: true });

require('./helpers/setup-helpers');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {};
