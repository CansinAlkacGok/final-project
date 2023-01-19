import KanbanCollection from '../models/kanbanSchema.js'


export const getAllToDos = async (req, res, next) => {

    try {
        const toDos = await KanbanCollection.find();

        //const toDosArray = []

        for (const toDo of toDos) {
            if (toDo.toDo.length > 0) {
               // console.log(toDo.toDo)
                toDosArray.push(toDo.toDo)
            }

        }
        //console.log(toDosArray.flat())
        res.json({ success: true, toDos: toDosArray.flat() })

    }
    catch (err) { 
        next(err); }
};



export const getAllWorking = () => { }

export const getAllDone = () => { }

export const createNewToDo = () => { }

export const getSingleToDo = () => { }

export const getSingleWorking = () => { }

export const getSingleDone = () => { }

export const updateToDo = () => { }

export const updateWorking = () => { }

export const deleteToDo = () => { }

export const deleteWorking = () => { }

export const deleteDone = () => { }
