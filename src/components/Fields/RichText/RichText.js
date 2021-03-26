import React, { useCallback, useState, useEffect, useMemo } from 'react';
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
import { MODES, TOOLBAR_MODES } from './options';
import RichTextContainer from './RichTextContainer';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
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
 * These are the types you will see in `options.js`, that
 * are set using the `buttons.js` components.
 *
 * The other notable feature is our normalizer. When
 * document is updated, this method is run for each node
 * and is how we restrict block types and force single
 * line mode.
 *
 * This editor has modes:
 * - 'full': All markdown features available
 * - 'marks': Inline features, such as italic, bold are
 *   enabled. Multiline is enabled.
 * - 'single': Same as 'marks', but no multiline.
 *
 * @param {bool} autoFocus Focus input automatically when
 * rendered.
 * @param {string} mode One of 'single', 'full' (default),
 * 'marks'.
 * @param {func} onChange Will receive a markdown value when
 * the document changes
 * @param {string} value Expects a value which will be used
 * as the *starting* value for the field, will not be used
 * subsequently as state is managed internally.
 */

const RichText = ({
  autoFocus,
  mode,
  onChange,
  value: initialValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const normalizeOptions = {
    mode,
  };

  const [withEditList, onKeyDown, { Editor, Transforms }] = EditListPlugin();

  const editor = useMemo(
    () => compose(
      withEditList,
      withShortcuts,
      withNormalize(normalizeOptions),
      withHistory,
      withReact,
    )(createEditor()),
    [],
  );

  // TODO: it needs to rerender when selection changes
  const renderToolbar = useCallback(() => {
    const inList = Editor.isSelectionInList(editor);

    return (
      <div>
        <div
          className={inList ? 'active' : ''}
          onClick={() =>
            inList
              ? Transforms.unwrapList(editor)
              : Transforms.wrapInList(editor)
          }
        >
          <i className="fa fa-list-ul fa-lg" />
        </div>

        <div
          className={inList ? '' : 'disabled'}
          onClick={() => Transforms.decreaseItemDepth(editor)}
        >
          <i className="fa fa-outdent fa-lg" />
        </div>

        <div
          className={inList ? '' : 'disabled'}
          onClick={() => Transforms.increaseItemDepth(editor)}
        >
          <i className="fa fa-indent fa-lg" />
        </div>

        <span className="sep">·</span>

        <div onClick={() => Transforms.wrapInList(editor)}>
          Wrap in list
        </div>
        <div onClick={() => Transforms.unwrapList(editor)}>
          Unwrap from list
        </div>

        <div onClick={() => Transforms.toggleList(editor, 'ol_list')}>
          Toggle ordered list
        </div>
        <div onClick={() => Transforms.toggleList(editor)}>
          Toggle unordered list
        </div>

        <div
          onClick={() => {
            console.log(JSON.stringify(editor.selection, null, 2))
            console.log(JSON.stringify(Editor.getItemsAtRange(editor), null, 2))
          }}
        >
          Dump selection
        </div>
      </div>
    );
  });

  // Set starting state from prop value on start up
  useEffect(() => {
    parse(initialValue)
      .then((newValue) => {
        console.log(JSON.stringify({ parsed: newValue, initialValue }, null, 2));
        return newValue;
      })
      .then(setValue);
  }, []);

  // Update upstream on change
  useEffect(() => {
    onChange(serialize(value));
    console.log(JSON.stringify({ serialized: serialize(value), value }, null, 2));
  }, [onChange, value]);

  // const handleKeyDown = (event) => {
  //   Object.keys(HOTKEYS).forEach((hotkey) => {
  //     if (isHotkey(hotkey, event)) {
  //       event.preventDefault();
  //       const mark = HOTKEYS[hotkey];
  //       toggleMark(editor, mark);
  //     }
  //   });
  // };

  const controls = TOOLBAR_MODES[mode];

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <RichTextContainer>
        <Toolbar controls={controls} />
        <div className="rich-text__editable">
          <Editable
            renderElement={Element}
            renderLeaf={Leaf}
            placeholder=""
            spellCheck
            autoFocus
            onKeyDown={onKeyDown(editor)}
          />
        </div>
      </RichTextContainer>
    </Slate>
  );
};

RichText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.oneOf(Object.values(MODES)),
  autoFocus: PropTypes.bool,
};

RichText.defaultProps = {
  value: '',
  onChange: () => {},
  mode: MODES.full,
  autoFocus: false,
};

export default RichText;
