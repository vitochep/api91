'use strict';
require('dotenv').config();

const mysql = require('./mysql');
const express = require('express');
const controllers = require('./controllers');
const app = express();

app
	.get('/dialogs/:id', controllers.dialogGetOne)
	.get('/dialogs', controllers.dialogGetMany)
	.post('/dialogs', controllers.dialogCreate)
	.patch('/dialogs/:id', controllers.dialogUpdate)
	.delete('/dialogs/:id', controllers.dialogDelete);

app.listen(4444);