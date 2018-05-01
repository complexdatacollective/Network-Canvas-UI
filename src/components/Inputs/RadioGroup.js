/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputLabel from './InputLabel';
import RadioInput from './RadioInput';

class RadioGroup extends Component {
  static propTypes = {
   className: PropTypes.string,
    children: PropTypes.node,
    errorText: PropTypes.node,
    tooltip: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onRadioClick: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.any,
    inline: PropTypes.bool,
  }

  handleKeyDown = (e) => {
    const { children } = this.props;
    const currentIndex = [...e.currentTarget.children].indexOf(e.target);
    switch (e.key) {
      case 'Enter': {
        this.props.onChange(children[currentIndex].props.value);
        break;
      }
      case 'ArrowRight':
      case 'ArrowDown': {
        const nextIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
        this.props.onChange(children[nextIndex].props.value);
        break;
      }

      case 'ArrowLeft':
      case 'ArrowUp': {
        const prevIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
        this.props.onChange(children[prevIndex].props.value);
        break;
      }
      default: {
        break;
      }
    }
  }

  render() {
    const {
     className,
      children,
      errorText,
      tooltip,
      name,
      label,
      onRadioClick,
      options,
      value,
      inline,
      ...rest // eslint-disable-line
    } = this.props;

    return (
      <div className="radio-group__container" onKeyDown={this.handleKeyDown}>
        <InputLabel
          name={name}
          label={label}
          errorText={errorText}
          tooltip={tooltip}
        />
        <div className={inline ? 'grid__container grid--x-bookend' : 'grid__stack'}>
          {
            options ? options.map((option, idx) => (
              <RadioInput
                key={idx}
                onChange={onRadioClick}
                checked={value === option}
                name={name}
                value={option}
              />
            )) :
              React.Children.map(children, (child) => {
                if (child.type === RadioInput) {
                  return React.cloneElement(child, {
                    name,
                    checked: child.props.value === value,
                    onChange: onRadioClick,
                  });
                }
                return child;
              })
          }
        </div>
      </div>
    );
  }
}

export default RadioGroup;
