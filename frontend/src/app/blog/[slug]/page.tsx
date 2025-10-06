"use client";
import { useParams } from 'next/navigation';
import { createBlogData, slugify } from '../../utils/slugify';
import BlogDetail from '../../component/blog/BlogDetail';
import { notFound } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();
  const blogs = createBlogData();
  const blog = blogs.find(b => slugify(b.title) === slug);

  if (!blog) {
    notFound();
  }

  return (
    <BlogDetail
      title={blog.title}
      image={blog.image}
      content={blog.content}
    />
  );
}
