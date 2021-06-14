import React, { useState, useEffect } from 'react';
import remark from 'remark';
import strip from 'strip-markdown';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import MarkdownLabel from '../Fields/MarkdownLabel';
import SpeakText from '../SpeakText';

const variants = {
  enter: (backwards) => ({
    x: backwards ? '-25%' : '25%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (backwards) => ({
    x: backwards ? '25%' : '-25%',
    opacity: 0,
  }),
};

/**
  * Renders a single prompt.
  */
const Prompt = (props) => {
  const {
    id,
    text,
    backwards,
    speakable,
  } = props;
  const [rawText, setRawText] = useState(null);

  useEffect(() => {
    remark().use(strip).process(text, (_, { contents }) => {
      setRawText(contents);
    });
  }, [text]);

  return (
    <motion.div
      key={id}
      custom={backwards}
      variants={variants}
      className="prompt"
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 600, damping: 35 },
        opacity: { duration: 0.2 },
      }}
    >
      { speakable && rawText && <SpeakText text={rawText} />}
      {' '}
      <MarkdownLabel label={text} inline className="prompt__text" />
    </motion.div>
  );
};

Prompt.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backwards: PropTypes.bool,
  speakable: PropTypes.bool,
};

Prompt.defaultProps = {
  backwards: false,
  speakable: false,
};

export default Prompt;
