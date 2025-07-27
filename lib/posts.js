import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the posts directory relative to the project root. When building
// statically this resolves to `<project>/posts`.
const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Reads all markdown files in the `posts` directory and returns an array
 * of post metadata objects. Metadata is extracted from the front matter
 * using gray-matter. Results are sorted by date in descending order.
 *
 * @returns {Promise<Array<{slug: string, title: string, date: string|null, excerpt: string}>>}
 */
export async function getAllPostsMetadata() {
  let fileNames = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (e) {
    // If the directory does not exist or is empty just return an empty list.
    return [];
  }
  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        // Use provided excerpt or derive one from the content.
        const excerpt =
          data.excerpt ||
          content
            .replace(/\n+/g, ' ')
            .trim()
            .substring(0, 160);
        return {
          slug,
          title: data.title || slug,
          date: data.date || null,
          excerpt,
        };
      })
  );
  // Sort posts by date descending. Null dates are last.
  return posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });
}

/**
 * Reads a single markdown file from the `posts` directory and returns its
 * metadata and HTML content. Returns null if the file does not exist.
 *
 * @param {string} slug The slug identifying the post (filename without .md)
 * @returns {Promise<{slug: string, title: string, date: string|null, excerpt: string, contentHtml: string}|null>}
 */
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    excerpt: data.excerpt || '',
    contentHtml,
  };
}
