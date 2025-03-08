import * as v from "valibot";

export const BlogSchema = v.object({
  id: v.string(),
  date: v.string(),
});

export type BlogInput = v.InferInput<typeof BlogSchema>;
export type Blog = v.InferOutput<typeof BlogSchema>;
