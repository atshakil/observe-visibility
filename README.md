# Observe Visibility

## Summary

Observe React component visibility in the viewport or visibility relative to an ancestor.

## Installation

```sh
$ npm install react-observe-visibility
  # or
$ npm install observe-visibility
  # or
$ yarn add react-observe-visibility
  # or
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
