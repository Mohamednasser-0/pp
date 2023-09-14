const authorize = (req,res,next) =>{
    const {user} = req.query;

    if(user === 'valid-user'){
        next();
    }
    else{
        res.status(401).send('Authentication Failed /Not a valid user/')
    }
}

module.exports= authorize;