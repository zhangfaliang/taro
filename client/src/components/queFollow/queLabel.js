import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import styles from "./index.module.scss";

class QuestionLabel extends Component {
  static COMPONENT_NAME = "QUESTION_LABEL";
  render() {
    const { classNames, text, imageUrl } = this.props;
    return (
      <View className={styles[classNames || "watch"]}>
        <Image src={imageUrl} />
        <Text>{text}</Text>
      </View>
    );
  }
}

export default QuestionLabel;
