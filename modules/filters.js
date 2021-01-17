import dayjs from 'dayjs';
import { renderToString } from 'react-dom/server'
import path from "path"
import remark from "remark"
import html from "remark-html"
import matter from "gray-matter";

export async function importPosts(dir = 'news', limit = 6) {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../content/news', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2))
    // .sort((a,b) => (a.slug + '').localeCompare(b.slug))
    .reverse()
    .slice(0,limit > 0 ? limit : -1);
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/${dir}/${path}`);
      // console.log(renderToString(markdown.react({})));
      const excerpt = renderToString(markdown.react({})).replace(/(<([^>]+)>)/gi, "").slice(0, 100) + '...';
      return { ...markdown.default.attributes, excerpt , slug: path.substring(0, path.length - 3) };
    })
  );
};


const DIR = path.join(process.cwd(), "content")
const EXTENSION = ".md"

export async function readContentFile(fs, slug) {
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf8')
  const matterResult = matter(raw)
  const { title, date: rawDate } = matterResult.data
  const parsedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const content = parsedContent.toString()
  return {
    title,
    date: dateFormat(rawDate),
    content,
    slug,
  }
}

export function dateFormat(dateString) {
  const d = dayjs(dateString)
  return d.format('YYYY-MM-DD')
}