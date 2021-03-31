import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Editable, withReact, Slate } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import isHotkey from 'is-hotkey';
import { compose } from 'lodash/fp';
import { EditListPlugin } from '@productboard/slate-edit-list';
import withNormalize from './withNormalize';
import withShortcuts from './withShortcuts';
import Toolbar from './Toolbar';
import { toggleMark } from './actions';
import { Element, Leaf } from './renderers';
import serialize from './serialize';
import parse, { defaultValue } from './parse';
import RichTextContainer from './RichTextContainer';
import { INLINE_DISALLOWED_ITEMS } from './options';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
};

/**
 * This rich text component is UI for editing markdown.
 *
 * It uses the `slate` library to manage the document,
 * which uses it's own tree-like structure internally,
 * and parse and serialize methods to read and set the
 * value externally.
 *
 * Slate's internal tree is not specific to markdown,
 * the element types and leaf types are arbitrary - in
 * this case we are using the types provided by our
 * very opinionated serialize/parse library `remark-slate`.
 *
 * The other notable feature is our normalizer. When
 * document is updated, this method is run for each node
 * and is how we restrict block types and force single
 * line mode.
 *
 * This editor has two props that set its operation:
 * - 'inline' (bool):
 *   determines if elements that would cause a line
 *   break or block level element can be created.
 *   Default is false.
 *
 * - 'disallowedTypes' (array):
 *   Array containing any 'type' listed in options.js
 *   which will then be excluded from the toolbar and
 *   markdown shortcuts.
 *
 * @param {bool} autoFocus Focus input automatically when
 * rendered.
 * @param {bool} inline determines if elements that would
 * cause a line break or block level element can be created.
 * @param {array} disallowedTypes Array containing any
 * 'type' listed in options.js which will then be excluded
 * from the toolbar and markdown shortcuts.
 * @param {func} onChange Will receive a markdown value when
 * the document changes
 * @param {string} value Expects a value which will be used
 * as the *starting* value for the field, will not be used
 * subsequently as state is managed internally.
 */

const RichText = ({
  autoFocus,
  inline,
  disallowedTypes,
  onChange,
  value: initialValue,
  placeholder,
}) => {
  const [value, setValue] = useState(defaultValue);

  const [withEditList, onKeyDown, { Editor, Transforms }] = EditListPlugin({
    maxDepth: 1, // Restrict list depth to one, for now.
  });

  // Use the inline prop to optionally merge additional disallowed items
  const disallowedTypesWithDefaults = [
    ...disallowedTypes,
    ...[...(inline ? INLINE_DISALLOWED_ITEMS : [])],
  ];

  const withOptions = (e) => Object.assign(e, {
    inline,
    disallowedTypes: disallowedTypesWithDefaults,
  });

  const editor = useMemo(
    () => compose(
      withNormalize,
      withShortcuts,
      withOptions,
      withEditList,
      withHistory,
      withReact,
    )(createEditor()),
    [],
  );

  // Set starting state from prop value on start up
  useEffect(() => {
    parse(initialValue)
      .then(setValue);
  }, []);

  // Test if there is no text content in the tree
  const everyChildEmpty = (children) => children.every((child) => {
    if (child.children) {
      return everyChildEmpty(child.children);
    }

    return child.text === '' || !/\S/.test(child.text);
  });

  // Update upstream on change
  useEffect(() => {
    // If all content is empty, set an empty value so that validation
    // can pick up on it
    if (everyChildEmpty(editor.children)) {
      // Remove <br> and \n and see if string is empty?
      onChange('');
      return;
    }
    onChange(serialize(value));
  }, [value]);

  const handleKeyDown = (event) => {
    Object.keys(HOTKEYS).forEach((hotkey) => {
      if (isHotkey(hotkey, event)) {
        event.preventDefault();
        const mark = HOTKEYS[hotkey];
        toggleMark(editor, mark, Transforms, Editor);
      }
    });
  };

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <RichTextContainer>
        <Toolbar editor={editor} />
        <div className={`rich-text__editable ${inline ? 'rich-text__editable--inline' : ''}`}>
          <Editable
            renderElement={Element}
            renderLeaf={Leaf}
            placeholder={(<em style={{ userSelect: 'none' }}>{placeholder}</em>)}
            spellCheck
            autoFocus={autoFocus}
            onKeyDown={(e) => {
              handleKeyDown(e);
              onKeyDown(editor)(e);
            }}
          />
        </div>
      </RichTextContainer>
    </Slate>
  );
};

RichText.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inline: PropTypes.bool,
  disallowedTypes: PropTypes.array,
  autoFocus: PropTypes.bool,
};

RichText.defaultProps = {
  value: '',
  placeholder: 'Enter some text...',
  onChange: () => {},
  inline: false,
  disallowedTypes: [],
  autoFocus: false,
};

export default RichText;
