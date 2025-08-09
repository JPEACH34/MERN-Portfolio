import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  }
});

const extrasSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  }
})


const stackTabSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },

  components:[componentSchema],
  extras:[extrasSchema],

  exp:{
    type:String,
    required:true
  },
});

const StackTab = mongoose.model("StackTab", stackTabSchema);

export default StackTab;