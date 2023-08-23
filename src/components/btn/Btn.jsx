import React from "react";
import "./btn.scss";

export default class Btn extends React.Component {
  render() {
    const { name, ...props } = this.props;
    return <button {...props}>{name}</button>;
  }
}
