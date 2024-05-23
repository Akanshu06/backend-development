const infoModel = require('../modals/mainModel');

module.exports.postInfo=async (req,res)=>{
     const name = req.body.name;
     const dob = req.body.dob;
     const photoURL = req.body.photoURL;
     const birthplace = req.body.birthplace;
     const career = req.body.career;
     const matches = req.body.matches;
     const score = req.body.score;
     const fifties = req.body.fifties;
     const average = req.body.average;

     const  playerInfo =await infoModel.create({
        name,dob,photoURL,birthplace,career,matches,score,fifties,average
     })
     res.status(200).json({data:playerInfo})
}

module.exports.getInfo=async(req,res)=>{
  const { name } = req.params;
  console.log(name);
  infoModel.findAll({ where: { name: name } })
    .then((players) => {
      res.status(200).json({
        data: players,
      });
    })
    .catch((err) => console.log(err));
}

module.exports.deleteInfo=async (req,res)=>{
  const { name } = req.params;
  console.log("Delete Call" + name);
  infoModel.destroy({ where: { name: name } })
    .then((result) => {
      res.status(201).json({
        message: "Player deleted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
