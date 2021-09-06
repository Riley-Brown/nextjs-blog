import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(require('remark-prism'), {
      plugins: ['line-numbers']
    })
    .process(markdown);
  return result.toString();
}
