import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: String,
    content: { type: String, required: true },
    coverImageUrl: String,
    author: String,
    tags: [String],
    published: { type: Boolean, default: false },
    publishedAt: Date,
  },
  { timestamps: true }
);

export default models.Blog || model("Blog", BlogSchema);
