import KanbanCollection from "../models/kanbanSchema.js";
import UsersCollection from "../models/userSchema.js";

export const getAllTasks = async (req, res, next) => {
  try {
<<<<<<< HEAD
    const alltasks = await KanbanCollection.find();
    res.json({ success: true, toDos: alltasks });
=======
    const toDos = await KanbanCollection.find();
    const toDosArray = [];
    for (const toDo of toDos) {
      if (toDo.toDo.length > 0) {
        //console.log(toDo.toDo);
        toDosArray.push(toDo.toDo);
      }
    }
    // console.log(toDosArray.flat());
    res.json({ success: true, toDos: toDosArray.flat() });
>>>>>>> 6a71e786c6feb8241d09478bb49a2e8cfec8ed82
  } catch (err) {
    next(err);
  }
};

export const createNewTask = async (req, res, next) => {
  try {
    const task = new KanbanCollection(req.body);
    await task.save();

    const updatedUser = await UsersCollection.findByIdAndUpdate(
      req.user._id,
      { $push: { kanban: task } },
      { new: true }
    ).populate("kanban");

    res.json({ success: true, data: updatedUser });
  } catch (err) {
    next(err);
  }
};

export const getAllDoingTasks = async (req, res, next) => {
  try {
    const allTasks = await KanbanCollection.find();
    const filterAllDoing = [];

    for (const task of allTasks) {
      if (task.status === "doing") {
        filterAllDoing.push(task);
      }
    }
    res.json({ success: true, data: filterAllDoing });
  } catch (err) {
    next(err);
  }
};

export const getAllDoneTasks = async (req, res, next) => {
  try {
    const allTasks = await KanbanCollection.find();
    const filterAllDone = [];

    for (const task of allTasks) {
      if (task.status === "done") {
        filterAllDone.push(task);
      }
    }
    res.json({ success: true, data: filterAllDone });
  } catch (err) {
    next(err);
  }
};

export const getSingleToDo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleToDo = await KanbanCollection.findById(id);
    res.json({ success: true, data: singleToDo });
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedTask = await KanbanCollection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ success: true, data: updatedTask });
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingTask = await KanbanCollection.findById(id);

    // console.log(existingTask._id); // clg to check

    if (existingTask) {
      const deleteStatus = await KanbanCollection.deleteOne({
        _id: existingTask._id,
      });

      const updatedUser = await UsersCollection.findByIdAndUpdate(
        req.user._id,
        { $pull: { existingTask: id } },
        { new: true }
      ).populate({ path: "kanban" });

      // console.log(updatedUser); // clg to check

      res.json({ success: true, data: updatedUser });
    } else {
      throw new Error("Task id doesn't exist!");
    }
  } catch (err) {
    next(err);
  }
};
