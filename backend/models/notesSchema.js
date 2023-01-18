import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    health: [{type:String}],
    personal: [{type:String}],
    business: [{type:String}],
    inspirations: [{type:String}]
})

const NotesCollection = mongoose.model("notes", notesSchema);

export default NotesCollection;