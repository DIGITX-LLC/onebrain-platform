"use client";
import { useParams } from "next/navigation";
import { createBlogData, slugify } from "../../utils/slugify";
import { notFound } from "next/navigation";
import { componentMap } from "@/app/component/blog/componentMap";



export default function BlogPost() {
  const { slug } = useParams();
  const blogs = createBlogData();

  const blog = blogs.find((b) => slugify(b.title) === slug);

  if (!blog) {
    notFound();
  }

  // get component name or use default
  const Component = componentMap[blog.component] || componentMap["default"];

  return (
    <Component 
      title={blog.title}
      image={blog.image}
      content={blog.content}
    />
  );
}
