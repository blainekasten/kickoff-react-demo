# A Kickoff Experiment using React, CSS Modules, and PostCSS

The idea here is to get a real sense of what it might be like to push Kickoff in the direction of a highly componentized architecture.

## CSS Modules

Built into webpack's `css-loader`, [CSS Modules](https://github.com/css-modules/css-modules) enable local-by-default syntax and composition.

### Composition

CSS Module's [composition](https://github.com/css-modules/css-modules#composition) is an alternative to Sass-style placeholders. Instead of:

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

    autoprefixer({ browsers: ['last 2 versions', 'IE 9'] })

### PostCSS-Custom-Properties

[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) provides CSS variable functionality using the syntax of the [CSS4 spec](http://www.w3.org/TR/css-variables/):

    :root {
        --dark-gray: #222;
    }

    .my-element {
        color: var(--dark-gray);
    }

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

### PostCss-Color-Function

[postcss-color-function](https://github.com/postcss/postcss-color-function) provides a host of color adjustment functionalities in line with the [CSS4 draft spec](https://drafts.csswg.org/css-color/#modifying-colors). This is how we replace Sass functions like `darken()` and `lighten()`.

    background: color(#456 shade(5%));

### Future consideration

Here are some others we might consider:

- [postcss-initial](https://github.com/maximkoretskiy/postcss-initial), a shim for CSS4's `initial` keyword (which basically stops inheritance on a property and resets it to its default value)
