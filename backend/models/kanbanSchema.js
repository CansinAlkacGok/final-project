import mongoose from 'mongoose';

const kanbanSchema = new mongoose.Schema({
    toDo: [{type: String}],
    working: [{type: String}],
    done: [{type: String}]
})

const KanbanCollection = mongoose.model("kanban", kanbanSchema)

export default KanbanCollection;