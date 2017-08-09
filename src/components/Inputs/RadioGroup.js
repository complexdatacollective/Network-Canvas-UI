import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';
import RadioInput from './RadioInput';

class RadioGroup extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    onRadioClick: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.any,
  }

  handleKeyDown = (e) => {
    const { children } = this.props;
    const currentIndex = [...e.currentTarget.children].indexOf(e.target);
    switch (e.key) {
      case 'Enter':
        this.props.onChange(children[currentIndex].props.value);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        const nextIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
        this.props.onChange(children[nextIndex].props.value);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        const prevIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
        this.props.onChange(children[prevIndex].props.value);
        break;
      default:
        break;
    }
  }

  render() {
    const {
      className,
      children,
      errorText,
      name,
      label,
      onRadioClick,
      options,
      value,
      ...rest
    } = this.props;

    return (
      <div className="radio-group__container" onKeyDown={this.handleKeyDown}>
        <div className="grid__stack">
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
          React.Children.map(children, (child, index) => {
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
        <InputLabel
          name={name}
          label={label}
          errorText={errorText}
        />
      </div>
    );
  }
}

export default RadioGroup;

