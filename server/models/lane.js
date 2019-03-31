import mongoose from 'mongoose';
import Note from './note';

const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const laneSchema = new Schema({
    name: { type: 'String', required: true },
    notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
    id: { type: 'String', required: true, unique: true },
});

function populateNotes(next) {
    this.populate('notes');
    next();
}
 
function deleteNotes(next) {
    const notesToDelete = this.notes;
    notesToDelete.forEach(noteToDelete => {
        Note.findOne({ "id": noteToDelete.id }, function(err, note) {
            note.remove();
        })        
    });
    next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
laneSchema.pre('remove', deleteNotes);

export default mongoose.model('Lane', laneSchema);
