import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';
import { MarkButton, BlockButton, ToolbarButton } from './ToolbarButton';
import { TOOLBAR_MODES } from './options';

const DEFAULT_CONTROLS = TOOLBAR_MODES.full;

const Toolbar = ({ controls, editor }) => (
  <div className="rich-text__toolbar">
    { includes(controls, 'bold') && <MarkButton format="bold" icon="bold" tooltip="Bold" /> }
    { includes(controls, 'italic') && <MarkButton format="italic" icon="italic" tooltip="Italic" /> }
    { includes(controls, 'headings') && (
      <>
        <div className="toolbar-spacer" />
        <BlockButton format="heading_one" icon="h1" tooltip="Heading One" />
        <BlockButton format="heading_two" icon="h2" tooltip="Heading Two" />
        <BlockButton format="heading_three" icon="h3" tooltip="Heading Three" />
        <BlockButton format="heading_four" icon="h4" tooltip="Heading Four" />
      </>
    )}
    { includes(controls, 'quote') && (
      <>
        <div className="toolbar-spacer" />
        <BlockButton format="block_quote" icon="quote" tooltip="Quote" />
      </>
    )}
    { includes(controls, 'lists') && (
      <>
        <div className="toolbar-spacer" />
        <BlockButton format="ol_list" icon="ol" tooltip="Numbered List" />
        <BlockButton format="ul_list" icon="ul" tooltip="Bulleted List" />
      </>
    )}
    { includes(controls, 'history') && (
      <>
        <div className="toolbar-spacer" />
        <ToolbarButton
          icon="undo"
          tooltip="Undo"
          action={editor.undo}
        />
        <ToolbarButton
          icon="redo"
          tooltip="Redo"
          action={editor.redo}
        />
      </>
    )}
  </div>
);

Toolbar.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.string),
  editor: PropTypes.object.isRequired,
};

Toolbar.defaultProps = {
  controls: DEFAULT_CONTROLS,
};

export default Toolbar;
