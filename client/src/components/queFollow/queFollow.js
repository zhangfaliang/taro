import Taro, { Component } from "@tarojs/taro";
import { get } from "lodash";
import { View, Text } from "@tarojs/components";
import FollowLeft from "./followLeft";
import Buttons from "../button";
import styles from "./index.module.scss";

class QueFollow extends Component {
  render() {
    //require("../../images/eye.png")
    const { classNames, text, imageUrl, children } = this.props;
    const options = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (get(option, "type.COMPONENT_NAME" === "FOLLOW_LEFT")) {
        return <FollowLeft {...other} />;
      } else if (get(option, "type.COMPONENT_NAME" === "BUTTON")) {
        return <Buttons {...other} />;
      }
    });
    return <View className={styles[classNames || "que-follow"]}>{options}</View>;
  }
}

export default QueFollow;
