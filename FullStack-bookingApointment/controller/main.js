
exports.getSignUp = async (req,res,next)=>{
    try {
        res.sendFile('signUp.html',{root:'views'})
    } catch (err) {
        console.log(err);
    }
}

exports.getLogin = async (req,res)=>{
    try {
        res.sendFile('login.html',{root:'views'})
    } catch (error) {
        console.log(error);
    }
}

exports.main = async (req,res)=>{
    try {
        res.sendFile('main.html',{root:'views'})
    } catch (error) {
        console.log(error);
    }
}