import { serialize } from 'remark-slate';

const escapeMarkdownChars = (string) => string
  .replace(/\\/g, '\\\\')
  .replace(/(^\d+)+(\.)/g, '$1\\$2')
  .replace(/\*/g, '\\*')
  .replace(/_/g, '\\_')
  .replace(/-/g, '\\-')
  .replace(/(\s*)#+(\s)/g, '$1\\#$2')
  .replace(/`/g, '\\`')
  .replace(/\[/g, '\\[')
  .replace(/\]/g, '\\]');

const escapeNode = (node) => {
  if (node.children) {
    const mutatedNode = {
      ...node,
      children: node.children.map((child) => escapeNode(child)),
    };
    return mutatedNode;
  }

  if (node.text) {
    return {
      ...node,
      text: escapeMarkdownChars(node.text),
    };
  }

  return node;
};

const serializeNodes = (nodes) => {
  console.log('serialize nodes', nodes);
  return (
    nodes.map((n) => {
      const result = serialize(escapeNode(n));
      console.log('result', result);
      return result;
    })
      .join('')

  );
};

export default serializeNodes;
