import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name :{
        type : String,
        required :[true,"pls enter the product name"],
        trim : true
    },
    description : {
        type : String,
        required:true
    }
    ,price : {
        type : Number,
        required:[true,'pls enter the product price'],
        maxLength :[7,"maximum length is not more than 7"]
    },
    ratings :{
        type : Number,
        default : 0
    },
    image:[{
        public_id : {
            type:String,
              required:true
        },
        url :{
            type : String,
            required:true
        } 
    }],
    category:{
        type:String,
        required:[true,'pls enter the product category']
    },
    stock:{
        type:Number,
        required:[true,'pls enter the product stock'],
        maxLength :[5,"maximum length is not more than 5"],
        default : 1
    },
    numOfReviews :{
        type:Number,
        default: 0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt : {
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Product",productSchema);