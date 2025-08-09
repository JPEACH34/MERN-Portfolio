import mongoose from "mongoose";

const langSchema = new mongoose.Schema({
  lang:{
    type:String,
    required:true
  },

  exp:{
    type:String,
    required:true
  },
});

const tableSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },

  langs_and_exp:[langSchema]
});

const Table = mongoose.model("Table", tableSchema);

export default Table