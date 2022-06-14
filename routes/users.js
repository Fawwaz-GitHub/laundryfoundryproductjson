var express = require('express');
var router = express.Router();
let userSchema = require('../Schema/schema')

/* GET users listing. */

// router.get('/',function(req, res){
//   res.send('working');
// })

router.get('/display',async function (req, res) {
  try {
    const result = await userSchema.find()
    res.json({
      message : 'displaying all record',
      result
    })
  }
  catch (error){
    console.log(error)
  }
});

router.post('/register',async function (req, res){
  try{
    let user = await userSchema.findOne({name:req.body.name})
    if(user)
    {
      res.send('name already exists')
    }
    else{
      await userSchema.create(req.body)
      res.send('name created')
    }
  }
  catch (error){
    console.log(error)
  }
})

module.exports = router;
