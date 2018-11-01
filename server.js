const express = require('express')
const resorts = require('./resort-names.json')
const normalizePort = port => parseInt(port, 10)
const port = normalizePort(process.env.PORT || 3333) 
const delay = 0
const cors = require('cors')
const path = require('path')

const byName = name => resort =>
    name.toLowerCase() === resort.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/resorts', (req, res) =>
        res.status(200).json(resorts)
    )
    .get('/resorts/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    resorts.filter(byName(req.params.name))
                ),
            delay
        )
    )
    
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log('Ski resort app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))