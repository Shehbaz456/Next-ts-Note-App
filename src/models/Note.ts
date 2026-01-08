// import mongoose from "mongoose";

// const NoteSchema = new mongoose.Schema(
//   {
//     title: String,
//     content: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Note || mongoose.model("Note", NoteSchema);


import mongoose, { Schema, Document, Model } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const NoteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Note: Model<INote> =
  mongoose.models.Note || mongoose.model("Note", NoteSchema);

export default Note;

