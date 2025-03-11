import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser"
import axios from 'axios';
const app = express()
const port = 4333
// app.use(cors())
// app.use(bodyParser.json())

app.get('/', async(req, res) => {
  // debugger
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
  //   headers: {
  //     accept: 'application/json',
  //     authorization: 'Bearer rnd_kue7FlJapuNZpPkBQrfOx9pYbI2J'
  //   }
  // };

  // axios
  //   .request(options)
  //   .then(response=>res.status(200).json(response))
  //   .catch(err=> res.status(403).json({ err }));

  try {
    debugger
    let response = await axios.get('https://api.render.com/v1/services?includePreviews=true&limit=20', {
      headers: {
        'Authorization': 'Bearer rnd_kue7FlJapuNZpPkBQrfOx9pYbI2J'
      }
    })
    console.log(response.data);    
    return res.json(response.data)
  }
  catch (err) {
    res.status(403).send({ err })
  }
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})