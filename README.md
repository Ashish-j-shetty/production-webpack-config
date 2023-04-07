## Webpack setup for production and development environments

The React project created with Webpack and ready for production deployment

**Things learnt and implemented**

- To use `import` statements instead of `require`, you need to configure the `resolve` property in your webpack file and add the file extensions for the required modules. Furthermore, you should use the Babel loader to transpile your ES6 and React code to ES5, which will allow your code to be compatible with older browsers."
- to load css , images we should have a seperate loaders.
- We need to use **HtmlWebpackPlugin** to dynamically add the js that is generated via the build script to html file , to dynamically update the script in index.html we should provide the html **template**
- to make the env variable to we available for the application we need use **dotenv** and in the webpack config provide the profer path to the env file
  `require("dotenv").config({
path:  "./.env.prod",
});`
  also we need to define a plugin
  `new webpack.DefinePlugin({
"process.env": JSON.stringify(process.env),
}),`
- To avoid importing a library repeatedly in every module, you can configure a provider plugin in your webpack configuration. This plugin ensures that the library is imported automatically by default.
  `new webpack.ProvidePlugin({React:  "react",}),`
- For production we should hide the sourcemap as keeping it open will make the actul code visible and readable in the chrome sources tab `devtool:  "hidden-source-map",`
- add approiate script setup in `package.json`
  eg: `"build":  "webpack --config webpack.prod.js && yarn post-build",`
- add the proper persets in **babelrc.file**
  eg: `{
"presets": ["@babel/preset-env","@babel/preset-react"]
}`
- have different webpack.config files for production and dev and any other environments

**Concepts Implemented**

- progressive image
- lazy loading
- bundle splitting (js)
- css and js minification
- DPR (Device Pixel Ratio) related changes and updates.

**Docker and nginx setup**

 - docker setup for development
 - docker setup for producion 
 - docker compose
 - nginx to serve bundle 
 has been added
 
To build the image :
run `docker build -t imagename currentAppName`

To run container:
run 	`docker run -p --name newNameofContainer deviceport:containerport imageId|imageName`

example : `docker run --name myapp -p 3000:3000 554934454`


prod built url :[prod app](https://webpack-production-build.netlify.app/)

dev build url : [dev app](https://webpack-dev-build.netlify.app/)
