// import { renderToString } from 'react-dom/server';
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { dateFormat } from "./funcs";

const EXTENSION = ".md";

export async function readContentFile(fs, slug) {
  const DIR = path.join(process.cwd(), "content");
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), "utf8");
  const matterResult = matter(raw);
  const { title, date: rawDate } = matterResult.data;
  const parsedContent = await remark().use(html).process(matterResult.content);
  const content = parsedContent.toString();
  return {
    title,
    date: dateFormat(rawDate),
    content,
    slug,
  };
}
