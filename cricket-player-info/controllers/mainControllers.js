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
    await infoModel.findAll().then((result)=>{
          res.status(200).json({data:result})
    }).catch((err)=>{
       console.log(err);
    })
}

module.exports.updateInfo = (req, res) => {
    const playerId = req.params.id;
    console.log(playerId);
    const updatedInfo = {
        id:req.body.id,
        name: req.body.name,
        dob: req.body.dob,
        photoURL: req.body.photoURL,
        birthplace: req.body.birthplace,
        career: req.body.career,
        matches: req.body.matches,
        score: req.body.score,
        fifties: req.body.fifties,
        average: req.body.average
    };

    infoModel.update(updatedInfo, { where: { id: playerId } })
        .then(result => {
            res.status(200).json({ message: 'Successfully updated player information' });
        })
        .catch(error => {
            console.error('Error updating player information:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
};