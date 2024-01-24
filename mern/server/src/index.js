// // server.js
// const bodyParser = require('body-parser');
// const express = require('express');
// const router = require('./routes');
// // const postRouter = require('././routes/post.routes');
// // const db = require('./config/mongodb.config');

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');


// const config = require('../webpack/webpack.config');
// const compiler = webpack(config);

// const app = express();
// const PORT = 8080;

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );
// app.use(bodyParser.json());

// app.use('/api', router);
// // app.use('/api/posts', postRouter);

// app.get('/', function(req, res){
//   res.send('Hello ! from the Server ');
// });

// app.listen(PORT, function () {
//     console.log(`Server Listening on ${PORT}`);
// });

// export default app;
