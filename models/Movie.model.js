const mongoose = require("mongoose")

const Movie = new mongoose.Schema({
        name:{
            type:String,
            required:[true,"Movie name is required"],
            minLength:1,
            maxLength: 50
        },
        genre:[{
            type:String,
            required:[true,"Genre is required"],
            enum:["comedy","action","romance","fantasy","sci-fi","thriller","horror","adventure"]
        }],
        images:[{type:String}],
        releasing:{
            type:String,
            required:[true,'Releasing date is required']
        },
        cast:[{type:String}],
        description:{type:String,trim:true},
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            required:[true,"Created By is required"]
        },
        language:[{type:String,default:"hindi"}],
        likes:Number,
        dislikes:Number,
        stars:Number,
        reviews:[{
            type:String,
            createdBy:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"users"
            }
        }]

},{ timestamps : true })

module.exports = mongoose.model("movies",Movie)