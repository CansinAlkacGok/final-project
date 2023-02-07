import NotesCollection from "../models/notesSchema.js";

export const getAllNotes = async (req, res, next) => {

    try {
        const notes = await NotesCollection.find();

        res.json({ success: true, notes: notes })
    }
    catch (err) {
        next(err);
    }
};

export const getAllHealthNotes = async (req, res, next) => {

    try {
        const healthNotes = await NotesCollection.find();
        const healthNotesArray = [];

        for (const notes of healthNotes) {
            //console.log(notes)
            if (notes.health.length > 0) {
                healthNotesArray.push(notes.health);
            }
        }

        res.json({ success: true, healthNotes: healthNotesArray.flat() });

    }
    catch (err) {
        next(err);
    }
};

export const getAllPersonalNotes = async (req, res, next) => {

    try {
        const personalNotes = await NotesCollection.find();
        const personalNotesArray = [];

        for (const notes of personalNotes) {

            if (notes.personal.length > 0) {
                personalNotesArray.push(notes.personal);
            }
        }

        res.json({ success: true, personalNotes: personalNotesArray.flat() });
    }
    catch (err) {
        next(err);
    }
};

export const getAllBusinessNotes = async (req, res, next) => {

    try {
        const businessNotes = await NotesCollection.find();
        const businessNotesArray = [];

        for (const notes of businessNotes) {

            if (notes.business.length > 0) {
                businessNotesArray.push(notes.business);
            }
        }

        res.json({ success: true, businessNotes: businessNotesArray.flat() });
    }
    catch (err) {
        next(err);
    }
};

export const getAllInspirationsNotes = async (req, res, next) => {

    try {
        const inspirationNotes = await NotesCollection.find();
        const inspirationNotesArray = [];

        for (const notes of inspirationNotes) {

            if (notes.inspirations.length > 0) {
                inspirationNotesArray.push(notes.inspirations);
            }
        }

        res.json({ success: true, inspirationNotes: inspirationNotesArray.flat() });
    }
    catch (err) {
        next(err);
    }
};

export const createHealthNotes = async (req, res, next) => {
console.log(req.body);
    try {
        const healthNote = new NotesCollection({ health: [{title:[req.body.title], note:[req.body.note]}] })
        console.log(healthNote);
        await healthNote.save();

        res.json({ success: true, note: healthNote });
    }
    catch (err) {
        next(err);
    }
};

export const createPersonalNotes = async (req, res, next) => {

    try {
        const personalNote = new NotesCollection({ personal: [{title:[req.body.title], note:[req.body.note]}] })
        console.log(personalNote);
        await personalNote.save();

        res.json({ success: true, note: personalNote });
    }
    catch (err) {
        next(err);
    }
};

export const createBusinessNotes = async (req, res, next) => {

    try {
        const businessNote = new NotesCollection({ business: [{title:[req.body.title], note:[req.body.note]}] })
        console.log(businessNote);
        await businessNote.save();

        res.json({ success: true, note: businessNote });
    }
    catch (err) {
        next(err);
    }
};

export const createInspirationsNotes = async (req, res, next) => {

    try {
        const inspirationsNote = new NotesCollection({ inspirations: [{title:[req.body.title], note:[req.body.note]}] })
        console.log(inspirationsNote);
        await inspirationsNote.save();

        res.json({ success: true, note: inspirationsNote });
    }
    catch (err) {
        next(err);
    }
};

export const getSingleHealthNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const singleHealthNote = await NotesCollection.findById(id);
        res.json({ success: true, note: singleHealthNote.health });
    }
    catch (err) {
        next(err);
    }
};

export const getSinglePersonalNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const singlePersonalNote = await NotesCollection.findById(id);
        res.json({ success: true, note: singlePersonalNote.personal });
    }
    catch (err) {
        next(err);
    }
};

export const getSingleBusinessNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const singleBusinessNote = await NotesCollection.findById(id);
        res.json({ success: true, note: singleBusinessNote.business });
    }
    catch (err) {
        next(err);
    }
};

export const getSingleInspirationsNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const singleInspirationNote = await NotesCollection.findById(id);
        res.json({ success: true, note: singleInspirationNote.inspirations });
    }
    catch (err) {
        next(err);
    }
};

export const updateHealthNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const updatedHealthNote = await NotesCollection.findByIdAndUpdate(id, { health: req.body }, { new: true });
        res.json({ success: true, note: updatedHealthNote });
    }
    catch (err) {
        next(err);
    }
};

export const updatePersonalNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const updatedPersonalNote = await NotesCollection.findByIdAndUpdate(id, { personal: req.body }, { new: true });
        res.json({ success: true, note: updatedPersonalNote });
    }
    catch (err) {
        next(err);
    }
};

export const updateBusinessNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const updatedBusinessNote = await NotesCollection.findByIdAndUpdate(id, { business: req.body }, { new: true });
        res.json({ success: true, note: updatedBusinessNote });
    }
    catch (err) {
        next(err);
    }
};

export const updateInspirationsNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const updatedInspirationsNote = await NotesCollection.findByIdAndUpdate(id, { inspirations: req.body }, { new: true });
        res.json({ success: true, note: updatedInspirationsNote });
    }
    catch (err) {
        next(err);
    }
};

export const deleteHealthNote = async (req, res, next) => {

    try {
        const id = req.params.id;
        const existingHealthNote = await NotesCollection.findById(id);

        if (existingHealthNote) {
            const deleteStatus = await NotesCollection.deleteOne({
                _id: existingHealthNote._id,
            });
            res.json({ success: true, status: deleteStatus });
        } else {
            throw new Error("ToDo id doesn't exist!");
        }
    }
    catch (err) {
        next(err);
    }
};

export const deletePersonalNote = async (req, res, next) => {

    try { 
        const id = req.params.id;
        const existingPersonalNote = await NotesCollection.findById(id);

        if (existingPersonalNote) {
            const deleteStatus = await NotesCollection.deleteOne({
                _id: existingPersonalNote._id,
            });
            res.json({ success: true, status: deleteStatus });
        } else {
            throw new Error("ToDo id doesn't exist!");
        }
    }
    catch (err) {
        next(err);
    }
};

export const deleteBusinessNote = async (req, res, next) => {

    try { 
        const id = req.params.id;
        const existingBusinessNote = await NotesCollection.findById(id);

        if (existingBusinessNote) {
            const deleteStatus = await NotesCollection.deleteOne({
                _id: existingBusinessNote._id,
            });
            res.json({ success: true, status: deleteStatus });
        } else {
            throw new Error("ToDo id doesn't exist!");
        }
    }
    catch (err) {
        next(err);
    }
};

export const deleteInspirationsNote = async (req, res, next) => {

    try { 
        const id = req.params.id;
        const existingInspirationNote = await NotesCollection.findById(id);

        if (existingInspirationNote) {
            const deleteStatus = await NotesCollection.deleteOne({
                _id: existingInspirationNote._id,
            });
            res.json({ success: true, status: deleteStatus });
        } else {
            throw new Error("ToDo id doesn't exist!");
        }
    }
    catch (err) {
        next(err);
    }
};

