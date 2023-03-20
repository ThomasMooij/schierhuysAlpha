import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReserveSchema = new Schema({

    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    numChildren:
         [{num: Number, age:{type: [Number]}}],

    numAdults:{
        type:Number,
        required: true,
    },
    dates: {
        type:Date ,
    },
    unavailableDates:{
        type:[Date],
    },
    price:{
        type:Number,
        required: true,
    },
    desc:{
        type:String,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    payment_intent:{
        type:String,
        required: true,
    },
  }, {
    timestamps:true
  }
);

export default mongoose.model("Reserve", ReserveSchema)