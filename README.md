# Observe Visibility

## Summary

Observe React component visibility in the viewport or visibility relative to an ancestor.

## Installation

```sh
$ npm install observe-visibility
$ yarn add observe-visibility
```

## Usage

Example:

```
<ObserveVisibility>
  {({ isVisible }) => {
    isVisible && doSomething();
    return <Placeholder />;
  }}
</ObserveVisibility>
```

## Contributing

If you are interested in contributing, please [submit a pull request](https://help.github.com/articles/about-pull-requests/).

## License

[MIT](http://opensource.org/licenses/MIT)
