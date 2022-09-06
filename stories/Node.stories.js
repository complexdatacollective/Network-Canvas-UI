import React from 'react';
import { action } from '@storybook/addon-actions';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import Node from '../src/components/Node';
import '../src/styles/_all.scss';
import colors from './helpers/Colors';

export default {
  title: 'Components/Node',
  args: {
    label: 'Node',
    color: 'neon-coral',
    selected: false,
    linking: false,
    draggable: false,
    dontAnimate: false,
    onClick: action('onClick'),
    hidden: false,
  },
  argTypes: {
    hidden: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
    linking: {
      control: {
        type: 'boolean',
      },
    },
    draggable: {
      control: {
        type: 'boolean',
      },
    },
    dontAnimate: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      control: {
        type: 'function',
      },
    },
  },
};

export const Normal = ({
  label,
  color,
  selected,
  linking,
  onClick,
  dontAnimate,
  hidden,
}) => (
  <AnimatePresence>
    {!hidden && (
      <Node
        label={label}
        color={color}
        selected={selected}
        linking={linking}
        onClick={onClick}
        dontAnimate={dontAnimate}
      />
    )}
    Next element
  </AnimatePresence>
);

const variants = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  initial: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

export const List = ({
  label,
  color,
  selected,
  linking,
  onClick,
  dontAnimate,
  hidden,
}) => (
  <motion.div
    initial="initial"
    animate="show"
    variants={variants}
  >
    {[...Array(10).keys()].map((i) => (
      <Node
        key={i}
        label={label}
        color={color}
        selected={selected}
        linking={linking}
        onClick={onClick}
        dontAnimate={dontAnimate}
      />
    ))}
  </motion.div>
);
