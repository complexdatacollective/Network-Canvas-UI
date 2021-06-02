import { serialize } from 'remark-slate';

const serializeNodes = (nodes) => (
  nodes.map((n) => serialize(n))
    .join('\n')
    .replace(/\*/g, '\\*')
    .replace(/_/g, '\\_')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
);

export default serializeNodes;
