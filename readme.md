# A Kickoff Experiment using React, CSS Modules, and PostCSS

The idea here is to get a real sense of what it might be like to push Kickoff in the direction of a highly componentized architecture.

## CSS Modules

Built into webpack's `css-loader`, [CSS Modules](https://github.com/css-modules/css-modules) enable local-by-default syntax and composition.

### Composition

CSS Module's [composition](https://github.com/css-modules/css-modules#composition) is essentially a stand-in for Sass-style placeholders. Instead of:

    @extend %trade-type;

You'd write:

    composes trade-type from 'kickoff/type.css';

A bit more verbose, but more explicit and readable too. You know exactly where the styles are coming from.

## PostCSS Plugins

### Autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) leverages caniuse.com to add vendor prefixes to to CSS rules. Write:

    display: flex;

and Autoprefixer converts to:

    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

Easily configurable, as we just set the target browsers in webpack:

    autoprefixer({ browsers: ['last 2 versions'] })

### PostCSS-Mixins

[postcss-mixins](https://github.com/postcss/postcss-mixins) provides Sass-like mixin functionality with a slightly different syntax:

    @define-mixin icon $network, $color: blue {
        .icon.is-$(network) {
            color: $color;
            @mixin-content;
        }
    }

    @mixin icon twitter {
        background: url(twt.png);
    }

## TBD

A list of functionalities for which we'll have multiple options, and will require further research.

### Variables

- [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) aims to be a stand-in for `$blue`-style Sass variables
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) aims to follow the CSS4 spec (`var(--blue)` syntax)