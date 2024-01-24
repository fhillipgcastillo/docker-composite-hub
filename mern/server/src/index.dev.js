// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';
// import './config/mongodb.config';
// import postRouter from './routes/post.router';


const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


const config = require('../webpack/webpack.config');
const compiler = webpack(config);

const app = express();
const PORT = 8080;


app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Our DB Configuration
//require('./src/database');

// Routes
//const postRouter = require('./routes/post.router.js');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


// Server API's
// app.use('/api/posts', postRouter);

app.get('/', (req, res) => {
  res.status(200).send('API Gateway in development');
})

app.get('/abc', function(req, res){
  res.send('Hello world again');
});

app.use('/api', router);


app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;
