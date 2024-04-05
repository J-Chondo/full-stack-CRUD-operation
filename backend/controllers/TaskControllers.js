
const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
const tasks = await TaskModel.find();
res.send(tasks)
};

module.exports.saveTask =  (req, res) => {
    
const {task} = req.body

TaskModel.create({task})
.then((data)=>{
    console.log("saved successfully...");
    res.status(201).send(data)
}).catch((err)=>{
  console.log(err);
  res.send({error: err, msg: "something went wrong!"})
 });
};

module.exports.updateTask =  (req, res) => {
    const {id}= req.params
    const {task} = req.body
    
    TaskModel.findByIdAndUpdate(id, {task})
    .then(()=> res.send("update seccessfully"))
    .catch((err)=>{
      console.log(err);
      res.send({error: err, msg: "something went wrong!"})
    });
};

module.exports.deleteTask =  (req, res) => {
    const {id}= req.params
    
    TaskModel.findByIdAndDelete(id)
    .then(()=> res.send("Deleted seccessfully"))
    .catch((err)=>{
      console.log(err);
      res.send({error: err, msg: "something went wrong!"})
    });
};