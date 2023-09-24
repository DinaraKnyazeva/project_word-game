import React from "react";
import "./btn.scss";

export default class Btn extends React.Component {
  render() {
    const { name, disabled, ...props } = this.props;
    return (
      <button disabled={disabled} {...props}>
        {name}
      </button>
    );
  }
}
