import KanbanCollection from "../models/kanbanSchema.js";


// Not sure about hwo to get all the "toDos", "Allworking" and "AllDone". So far I have just added the code below to see all the data for each controller, so they are basically the same except endpoints.
export const getAllToDos = async (req, res, next) => {
  try {
    const toDos = await KanbanCollection.find();
    res.json(toDos);
  } catch (err) {
    next(err);
  }
};

export const getAllWorking = async (req, res, next) => {
  try {
    const allWorking = await KanbanCollection.find();

    // res.json(allWorking[1].working);
    // [
    //     "do the dishes"
    // ]

    res.json(allWorking);
  } catch (err) {
    next(err);
  }
};

export const getAllDone = async (req, res, next) => {
  try {
    const allDone = await KanbanCollection.find();
    res.json(allDone);
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
    res.json({ success: true, kanban: singleToDo });
  } catch (err) {
    next(err);
  }
};

export const getSingleWorking = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleWorking = await KanbanCollection.findById(id);
    res.json({ success: true, kanban: singleWorking });
  } catch (err) {
    next(err);
  }
};

export const getSingleDone = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleDone = await KanbanCollection.findById(id);
    res.json({ success: true, kanban: singleDone });
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
