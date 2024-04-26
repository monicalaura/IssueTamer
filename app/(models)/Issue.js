import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const issueSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    status: String,
    progress: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.models.Issue || mongoose.model("Issue", issueSchema);
export default Issue;
