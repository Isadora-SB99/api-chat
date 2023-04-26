const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
    try{
        const decoded = jwt.verify(token, key);
        console.log(decoded);
    }catch(err){
        console.error(err);
    }
    
    
    // var decoded = jwt.decode(token, {complete: true});
    // console.log(decoded.header);
    // console.log(decoded.payload);

    // if (err) {
    //     err = {
    //         name: '',
    //         massage: '',

    //     }

    // }
});


const setToken = async (id, key) => {
    console.log(id);
    if (id) {
        // console.log(jwt);
        return await jwt.sign({ id }, key, { expiresIn: 28800 });
    }
    return false;
};

module.exports = {
    checktoken,
    setToken

};
