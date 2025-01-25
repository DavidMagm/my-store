const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./routes');
const { logError, boomErrorHandler, sqlErrorHandler, errorHandler } = require('./middleware/errorHandler');
const port = 3000;
app.use(express.json());

const ipList = ['http://localhost:5500', 'http://127.0.0.1:5500'];

const corsOptions = {
  origin: (origin, callback) => {
    if(ipList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
};

app.use(cors(corsOptions));

app.get('/shoppi', (req, res) => {
    res.send('Hola server')
});

routerApi(app);

app.use(logError)
app.use(errorHandler)
app.use(boomErrorHandler)
app.use(sqlErrorHandler)


app.listen(port, () => {
  console.log('server' + port)
})
console.log('server')