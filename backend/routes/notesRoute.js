import express from 'express';
import {getAllNotes, getAllHealthNotes,getAllPersonalNotes,getAllBusinessNotes,getAllInspirationsNotes, createHealthNotes, createPersonalNotes, createBusinessNotes, createInspirationsNotes, getSingleHealthNote, getSinglePersonalNote, getSingleBusinessNote, getSingleInspirationsNote, updateHealthNote, updatePersonalNote, updateBusinessNote, updateInspirationsNote, deleteHealthNote, deletePersonalNote, deleteBusinessNote, deleteInspirationsNote } from '../controllers/notesController.js'

const route = express.Router();

route.get("/", getAllNotes)

route.get("/health", getAllHealthNotes);

route.get("/personal", getAllPersonalNotes);

route.get("/business", getAllBusinessNotes);

route.get("/inspirations", getAllInspirationsNotes);

route.post("/health", createHealthNotes);

route.post("/personal", createPersonalNotes);

route.post("/business", createBusinessNotes);

route.post("/inspirations", createInspirationsNotes);

route.get("/health/:id", getSingleHealthNote);

route.get("/personal/:id", getSinglePersonalNote);

route.get("/business/:id", getSingleBusinessNote);

route.get("/inspirations/:id", getSingleInspirationsNote);

route.patch("/health/:id", updateHealthNote);

route.patch("/personal/:id", updatePersonalNote);

route.patch("/business/:id", updateBusinessNote);

route.patch("/inspirations/:id", updateInspirationsNote);

route.delete("/health/:id", deleteHealthNote);

route.delete("/personal/:id", deletePersonalNote);

route.delete("/business/:id", deleteBusinessNote);

route.delete("/inspirations/:id", deleteInspirationsNote);


export default route