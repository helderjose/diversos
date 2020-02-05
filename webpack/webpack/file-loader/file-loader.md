Quando usar o bootstrap ou o fontawesome por exemplo, use
o file-loader para carregar as extensões

# webpack-config.js
No package.json coloque:
npm install --save-dev file-loader@0.9.0

No webpack-config.js
```javascript
module: {
    loaders: [
        /* outros loaders aqui */
        {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file'
    }]
}
```