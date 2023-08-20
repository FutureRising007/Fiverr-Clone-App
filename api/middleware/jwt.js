export const verifyToken = (req, res) => {
    const token = req.cookies.accessToken; 
    if(!token) return next(createError(401, "You are not authenticated"));


    jwt.verify(token , process.env.JWT , async (err, payload) => {
        if(err) return next(createError(403, "Token is not valid!")); 
        req.userID = payload.id;
        req.isSeller = payload.isSeller;
    });
};