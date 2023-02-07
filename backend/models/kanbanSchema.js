import mongoose from "mongoose";

const kanbanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  task: { type: String, required: true },
  status: { type: String, default: "do" },
  date: {
    type: Date,
    default: Date.now,
  },
});

const KanbanCollection = mongoose.model("kanbans", kanbanSchema);

export default KanbanCollection;
