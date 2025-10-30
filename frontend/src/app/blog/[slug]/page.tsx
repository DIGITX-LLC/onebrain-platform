"use client";
import { useParams } from 'next/navigation';
import { createBlogDataSanitized as createBlogData, slugify } from '../../utils/slugify';
import BlogDetail from '../../component/blog/BlogDetail';
import BlogDetailsElevenLabs from '../../component/about/BlogDetailsSix';
import { notFound } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();
  const blogs = createBlogData();

  // Special-case: some blog detail pages are implemented as full React components
  // (e.g. `BlogDetailsSix`). If the route slug matches one of those, render the
  // dedicated component instead of looking it up in the sanitized data array.
  const elevenSlug = slugify('Buy ElevenLabs AI in Bangladesh');
  if (slug === elevenSlug) {
    // Render the full component for ElevenLabs blog instead of the HTML string
    return <BlogDetailsElevenLabs />;
  }

  // Normalize possible slug sources for each blog item and match robustly.
  const blog = blogs.find((b) => {
    // 1) slug from title
    if (slugify(b.title) === slug) return true;

    // 2) slug from explicit link property like `/blog/some-slug`
    if (b.link && typeof b.link === 'string') {
      try {
        const parts = b.link.split('/').filter(Boolean); // removes empty
        const linkSlug = parts[parts.length - 1];
        if (linkSlug === slug) return true;
      } catch (e) {
        // ignore
      }
    }

    // 3) explicit slug field (if some entries include it in the future)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (b.slug && b.slug === slug) return true;

    return false;
  });

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
