import TasksCollection from '../models/tasksSchema.js';
import UsersCollection from '../models/userSchema.js';

export const getAllTasks = async (req, res, next) => {

    try {
        const tasks = await TasksCollection.find();
        res.json({ success: true, tasks: tasks })
    }
    catch (err) {
        next(err)
    }
};

export const getAllCompletedTasks = async (req, res, next) => {

    try {
        const tasks = await TasksCollection.find();

        const completedTasks = []

        for (const task of tasks) {
            if (task.completed === true) {
                completedTasks.push(task)
            }
        }

        res.json({ success: true, tasks: completedTasks.flat() })
    }
    catch (err) {
        next(err)
    }

};

export const createNewTask = async (req,res,next) => {

    try{

        const task = new TasksCollection(req.body);
        await task.save();

        const updatedUser = await UsersCollection.findByIdAndUpdate(req.user._id, {$push: {tasks: task}}, {new: true}).populate("tasks")

        res.json({success: true, data:updatedUser})

    }
    catch(err){
        next(err)
    }
 };

export const getSingleTask = async (req,res,next) => {

    try{

        const id = req.params.id

        const task = await TasksCollection.findById(id)

        res.json({success: true, task :task})
    }
    catch(err){
        next(err)
    }
};

export const completeTask = async () => {

    try {
        const task = await TasksCollection.findById(req.params.id);

        task.completed = !task.completed;
        task.save();
        res.json(task);
    }
    catch (err) {
        next(err)
    }
};

export const updateTask = async (req,res,next) => {

    try{

        const id = req.params.id

        const updatedTask = await TasksCollection.findByIdAndUpdate(id, req.body, {new:true})

        res.json({success: true, task: updatedTask});
    }
    catch(err){
        next(err)
    }

 };

export const deleteTask = async (req,res,body) => {

    try{
        const id = req.params.id

        const task = await TasksCollection.findById(id)

        if(task){

            const deletedTask = await TasksCollection.deleteOne({_id: task._id})

            const updatedUser = await UsersCollection.findByIdAndUpdate(req.user._id, {$pull: {tasks: id}}, {new:true}).populate({path:"tasks"})

            res.json({success:true, data:updatedUser})
        }else{
            throw new Error("task id doesn't exist")
        }
    }
    catch(err){
        next(err)
    }
 };

export const deleteCompletedTask = async (req,res,body) => {

    try{
        const id = req.params.id

        const task = await TasksCollection.findById(id)

        if(task && task.completed  === true){

            const deletedTask = await TasksCollection.deleteOne({_id: task._id})

            const updatedUser = await UsersCollection.findByIdAndUpdate(req.user._id, {$pull: {tasks: id}}, {new:true}).populate({path:"tasks"})

            res.json({success:true, data:updatedUser})
        }else{
            throw new Error("task id doesn't exist")
        }
    }
    catch(err){
        next(err)
    }
 };