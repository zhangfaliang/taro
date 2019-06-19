import Taro, { Component } from "@tarojs/taro";
import { get } from "lodash";
import { View, Text } from "@tarojs/components";
import QueLabel from "./queLabel";
import styles from "./index.module.scss";

class FollowLeft extends Component {
    static COMPONENT_NAME='FOLLOW_LEFT'
  render() {
    //require("../../images/eye.png")
    const { classNames, text, imageUrl, children } = this.props;
    const options = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (get(option, "type.COMPONENT_NAME") === "QUESTION_LABEL") {
        <QueLabel {...other} />;
      }
    });
    return (
      <View className={styles[classNames || "left"]}>
       {options}
      </View>
    );
  }
}

export default FollowLeft;
