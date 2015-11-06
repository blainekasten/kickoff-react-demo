import React, { PropTypes } from 'react';
import style from './style.css';

export default class Input extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string.isRequired,
  }

  state = {
    value: '',
    focused: false,
  }

  toggleFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    let labelClassName;
    let legacyTitle;
    const placeholderSupported = true; // fancy dom introspection

    if (!placeholderSupported) {
      legacyTitle = <div>{this.props.placeholder}</div>;
    }

    if (this.state.value.length && this.state.focused) {
      labelClassName = style.koActive;
    }

    return (
      <div className={style.koField}>
        {legacyTitle}

        <label className={labelClassName}>{this.props.placeholder}</label>
        <input
          {...this.props}
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
        />
      </div>
    );
  }
}
