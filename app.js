require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 5000 || process.env.PORT;