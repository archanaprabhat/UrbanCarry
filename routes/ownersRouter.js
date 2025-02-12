const express = require("express");
const router = express.Router();
const ownerModel = "../models/owner-model";

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .send(503)
        .send("You dont have permission to create  a new owner");
    }
    let {fullname, email,password} = req.body;
    
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password
    })
    res.status(201).send("we can create a new owner")
  });
}
router.get("/", function (req, res) {
  res.send("hey");
});

module.exports = router;
