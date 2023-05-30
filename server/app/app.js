import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './REST/routes';
import mongoose from 'mongoose';

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));
app.use(express.static('public'));

app.use(cors());

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true
}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.info('Connect with database established');
    }
});

process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

routes(app);

app.listen(config.port, function () {
    console.info(`Server is running at ${config.port}`)
});