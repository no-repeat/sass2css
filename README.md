# sass2css

Convert sass to css.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![NPM download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/sass2css.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sass2css
[travis-image]: https://img.shields.io/travis/no-repeat/sass2css.svg?style=flat-square
[travis-url]: https://travis-ci.org/no-repeat/sass2css
[codecov-image]: https://img.shields.io/codecov/c/github/no-repeat/sass2css.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/no-repeat/sass2css
[download-image]: https://img.shields.io/npm/dm/sass2css.svg?style=flat-square
[download-url]: https://npmjs.org/package/sass2css

## Usage

```shell
npm i sass2css -g

sass2css src.scss dest.css
```


## Preview

src.scss

```scss
// ----- brand color -----

$color-brand1-6: #FF0000;

$button-primary-color: $color-brand1-6;

```

dest.css

```css
:root {
	--color-brand1-6: #FF0000;

	--button-primary-color: var(--color-brand1-6);
}
```
