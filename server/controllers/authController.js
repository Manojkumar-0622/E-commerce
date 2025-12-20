
export const authRegister = async (req,res) =>{
    const {username, email, password} = req.body;
    console.log(username);
    res.send('deta resiving successfully')
}

export const testFile = (req,res) =>{
    res.send('Route files are ok');
}