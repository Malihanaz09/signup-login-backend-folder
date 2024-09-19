const getData = (req,res)=>{
    try{
        res.send("hello")
    }catch{
        res.status(500).send({ status : 500 , message :"internal error"})
    }
}

export default getData;