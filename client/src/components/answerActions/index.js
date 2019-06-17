import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import styles from "./index.module.scss";

class AnswerActions extends Component {
  render() {
    const { bindItemTap, good_num, comment_num } = this.props;
    return (
      <View className="answer-actions" onClick={bindItemTap}>
        <View className="like dot">
          <A>{good_num + " 赞同"}</A>
        </View>
        <View className="comments dot">
          <A>{comment_num + " 评论"}</A>
        </View>
        <View className="follow-it">
          <A>关注问题</A>
        </View>
      </View>
    );
  }
}
export default AnswerActions;
