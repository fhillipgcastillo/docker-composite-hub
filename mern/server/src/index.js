// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';
// const postRouter = require('././routes/post.routes');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

// import "./config/mongodb.config"

const config = require('../webpack/webpack.config');
const compiler = webpack(config);

const app = express();
const PORT = 8080;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);


app.get('/', function(req, res){
  res.send('Hello ! from the Server ');
});

app.use('/api', router);
// app.use('/api/posts', postRouter);

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;
