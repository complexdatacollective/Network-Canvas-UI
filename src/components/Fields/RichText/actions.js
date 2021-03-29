import {
  Element as SlateElement,
  Editor,
  Transforms,
} from 'slate';
import { EditListPlugin } from '@productboard/slate-edit-list';

const LIST_TYPES = ['ul_list', 'ol_list'];

const [withEditList, onKeyDown, { Transforms: EditListTransforms }] = EditListPlugin();

const getNewType = ({ isActive, format }) => {
  // If isActive is set, format already set. Remove it.
  if (isActive) { return 'paragraph'; }

  // Otherwise return the new format ready to apply
  return format;
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => (
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    ),
  });

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  console.log('toggleBlock', isActive, isList, editor, format);

  if (isList) {
    EditListTransforms.toggleList(editor, format);
    return;
  }

  const newProperties = {
    type: getNewType({ isActive, format }),
  };

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  console.log('toggleMark', editor, format);
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export {
  toggleMark,
  toggleBlock,
  isMarkActive,
  isBlockActive,
};
