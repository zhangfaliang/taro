import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text } from "@tarojs/components";

import styles from "./index.module.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    state = {
      isActive: props.isActive || false
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.isActive !== state.isActive) {
      return { isActive: props.isActive };
    }
    return null;
  }
  handleClick = () => {
    const { handleClick } = this.props;
    this.setState(
      {
        isActive: !this.state.isActive
      },
      () => {
        handleClick && handleClick(this.state.isActive);
      }
    );
  };
  render() {
    //require("../../images/eye.png")
    const { text, className } = this.props;
    const btnCls = classnames({
      [styles[className || "btn"]]: true,
      [styles[isActive]]: this.state.isActive
    });
    return (
      <View className={btnCls} onClick={this.handleClick}>
       {text||'关注'} 
      </View>
    );
  }
}

export default Button;
