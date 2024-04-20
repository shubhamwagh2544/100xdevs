const express = require('express');
import { Request, Response } from "express";
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from Node.js!',
  });
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});