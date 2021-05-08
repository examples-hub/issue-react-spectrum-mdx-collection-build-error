# issue-react-spectrum-mdx-collection-build-error

> repo for this issue https://github.com/adobe/react-spectrum/issues/1891

# expected

- Accordion component in `hello.mdx` should be rendered in the `App`.

# current

- nothing is rendered in the page. 

- **note**
  - if you comment the Accordion related code in `hello.mdx`, Button can be rendered.

- error message in the console:

``` 

module.js:241 
    Uncaught Error: Unknown element <[object Object]> in collection.
    at $f8429209754fda4b9142d514065f4$export$CollectionBuilder.getFullNode (module.js:241)
    at getFullNode.next (<anonymous>)
    at $f8429209754fda4b9142d514065f4$export$CollectionBuilder.iterateCollection (module.js:177)
    at iterateCollection.next (<anonymous>)
    at Object.[Symbol.iterator] (module.js:351)
    at Generator.next (<anonymous>)
    at new $afa6f708e32ecf7f97d9a58dfd59c$export$TreeCollection (module.js:51)
```

# demo

``` sh
npm start
```

- open: http://localhost:8000/
- error message is in the console
