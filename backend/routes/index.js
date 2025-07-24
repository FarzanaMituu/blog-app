var express = require('express');
var router = express.Router();
var userModel = require("../models/userModel");
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signUp", async (req, res) => {
  let { username, name, email, password } = req.body;
  let emailCon = await userModel.findOne({ email: email });
  if (emailCon) {
    return res.json({
      success: false,
      msg: "Email already exists"
    });
  }
  else{
    bcrypt.genSalt(12, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let user = await userModel.create({
          username: username,
          name: name,
          email: email,
          password: hash,
        });

        return res.json({
          success: true,
          msg: "User created successfully",
        })
      });
    });
  }

});

router.post("/login", async (req, res) => {
  let{ email, password } = req.body;
  let user = await userModel.findOne({email: email });
  if(!user){
    return res.json({
      success:false,
      msg: "User not found"
    });
  }
})

module.exports = router;
