const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const { response } = require("express");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put('https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-key": "9a577476-513c-47e7-9bf6-b18e18dca23d"}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);