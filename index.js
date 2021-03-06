const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));


const port = process.env.PORT || 3000;

app.get('/customer',(req,res)=>{
    res.send('Hi');
});

app.listen(port, ()=>{console.log(`listening on port ${port}`)});