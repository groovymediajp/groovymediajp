import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { dateFormat } from "./funcs";

export async function convertContent(raw) {
  const matterResult = matter(raw.trim());
  const { title, date: rawDate } = matterResult.data;
  const parsedContent = await remark().use(html).process(matterResult.content);
  const content = parsedContent.toString();
  return {
    title,
    date: dateFormat(rawDate),
    content,
  };
}
