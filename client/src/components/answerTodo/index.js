import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text } from "@tarojs/components";

class answerTodo extends Component {
  render() {
    //require("../../images/eye.png")
    const { classNames, text, imageUrl, children } = this.props;
    const todoCls = classnames({
      [styles["invite"]]: true,
      [styles["flex-item"]]: true,
      [styles[classNames || ""]]: classNames
    });
    return (
      <View className={todoCls}>
        <Image src={imageUrl} />
        <Text>{text}</Text>
      </View>
    );
  }
}

export default answerTodo;
