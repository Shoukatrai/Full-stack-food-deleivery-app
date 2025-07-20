export const uploadImageController = async(req , res)=>{
    try {
        res.json({
            message : "Upload",
            status : true
        })
    } catch (error) {
        res.json({
            message : error.message,
            status : false
        })
    }
}