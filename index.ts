import express from 'express';
import modules from './modules';

const app = express();

modules(app);

app.listen(8081, () => {
    console.log("Hello world");
});

