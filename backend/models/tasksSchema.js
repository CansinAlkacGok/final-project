import mongoose from 'mongoose';

const tasksSchema = new mongoose.Schema({
    task: [{type:String}],
    date: {type: Date},
    completed: [{type:String}]
})

const TasksCollection = mongoose.model("tasks", tasksSchema);

export default TasksCollection;