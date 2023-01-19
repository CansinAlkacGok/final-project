import KanbanCollection from "../models/kanbanSchema.js";

export const getAllToDos = async (req, res, next) => {
  try {
    const toDos = await KanbanCollection.find();
    const toDosArray = [];
    for (const toDo of toDos) {
      if (toDo.toDo.length > 0) {
        // console.log(toDo.toDo);
        toDosArray.push(toDo.toDo);
      }
    }
    // console.log(toDosArray.flat());
    res.json({ success: true, toDos: toDosArray.flat() });
  } catch (err) {
    next(err);
  }
};

export const getAllWorking = async (req, res, next) => {
  try {
    const allWorking = await KanbanCollection.find();
    const allWorkingArray = [];
    for (const working of allWorking) {
      if (working.working.length > 0) {
        // console.log(working.working);
        allWorkingArray.push(working.working);
      }
    }
    // console.log(allWorkingArray.flat());
    res.json({ success: true, working: allWorkingArray.flat() });
  } catch (err) {
    next(err);
  }
};

export const getAllDone = async (req, res, next) => {
  try {
    const allDone = await KanbanCollection.find();
    const allDoneArray = [];
    for (const done of allDone) {
      if (done.done.length > 0) {
        // console.log(done.done);
        allDoneArray.push(done.done);
      }
    }
    // console.log(allDoneArray.flat());
    res.json({ success: true, done: allDoneArray.flat() });
  } catch (err) {
    next(err);
  }
};

export const createNewToDo = async (req, res, next) => {
  try {
    const toDo = new KanbanCollection(req.body);
    await toDo.save();
    res.json({ success: true, sata: toDo });
  } catch (err) {
    next(err);
  }
};

export const getSingleToDo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleToDo = await KanbanCollection.findById(id);
    res.json({ success: true, kanban: singleToDo.toDo });
  } catch (err) {
    next(err);
  }
};

export const getSingleWorking = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleWorking = await KanbanCollection.findById(id);
    res.json({ success: true, kanban: singleWorking.working });
  } catch (err) {
    next(err);
  }
};

export const getSingleDone = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleDone = await KanbanCollection.findById(id);
    res.json({ success: true, kanban: singleDone.done });
  } catch (err) {
    next(err);
  }
};

export const updateToDo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedToDo = await KanbanCollection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ success: true, kanban: updatedToDo });
  } catch (err) {
    next(err);
  }
};

export const updateWorking = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedWorking = await KanbanCollection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json({ success: true, kanban: updatedWorking });
  } catch (err) {
    next(err);
  }
};

export const deleteToDo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingToDo = await KanbanCollection.findById(id);

    if (existingToDo) {
      const deleteStatus = await KanbanCollection.deleteOne({
        _id: existingToDo._id,
      });
      res.json({ success: true, status: deleteStatus });
    } else {
      throw new Error("ToDo id doesn't exist!");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteWorking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingWorking = await KanbanCollection.findById(id);

    if (existingWorking) {
      const deleteStatus = await KanbanCollection.deleteOne({
        _id: existingWorking._id,
      });
      res.json({ success: true, status: deleteStatus });
    } else {
      throw new Error("Working id doesn't exist!");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteDone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingDone = await KanbanCollection.findById(id);

    if (existingDone) {
      const deleteStatus = await KanbanCollection.deleteOne({
        _id: existingDone._id,
      });
      res.json({ success: true, status: deleteStatus });
    } else {
      throw new Error("Done id doesn't exist!");
    }
  } catch (err) {
    next(err);
  }
};
