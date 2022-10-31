import React from 'react';
import { action } from '@storybook/addon-actions';
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
    disabled: false,
    onClick: action('onClick'),
    onLongPress: action('onLongPress'),
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      control: {
        type: 'function',
      },
    },
    onLongPress: {
      control: {
        type: 'function',
      },
    },
  },
};

export const Normal = ({
  label,
  color,
  selected: selectedProp,
  linking,
  onClick,
  onLongPress,
  draggable,
  disabled,
  hidden,
}) => {
  const [selected, setSelected] = React.useState(selectedProp);
  const handleClick = () => {
    setSelected(!selected);
    onClick();
  };

  return (
    <>
      {!hidden && (
        <Node
          label={label}
          color={color}
          selected={selected}
          linking={linking}
          onClick={handleClick}
          draggable={draggable}
          disabled={disabled}
          onLongPress={onLongPress}
        />
      )}
      Next element
    </>
  );
};
