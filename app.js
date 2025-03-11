import express from 'express';
import axios from 'axios';
const app = express()
const port = 4333

app.get('/', async(req, res) => {
  try {
    debugger
    let response = await axios.get('https://api.render.com/v1/services?includePreviews=true&limit=20', {
      headers: {
        'Authorization': 'Bearer rnd_kue7FlJapuNZpPkBQrfOx9pYbI2J'
      }
    })
    return res.json(response.data)
  }
  catch (err) {
    res.status(403).send({ err })
  }
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})