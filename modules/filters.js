import { renderToString } from 'react-dom/server'

export const importNews = async (limit = 6) => {
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
      const markdown = await import(`../content/news/${path}`);
      // console.log(renderToString(markdown.react({})));
      const excerpt = renderToString(markdown.react({})).replace(/(<([^>]+)>)/gi, "").slice(0, 100) + '...';
      return { ...markdown.default.attributes, excerpt , slug: path.substring(0, path.length - 3) };
    })
  );
};
