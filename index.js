require('dotenv').config()
const express = require('express')
const helmet = require("helmet");
const cors = require("cors");
const port = 3000
const app = express();
const graphqlHandler = require("./routes/graphql");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/graphql', graphqlHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

