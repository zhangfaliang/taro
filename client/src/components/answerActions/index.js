import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View } from "@tarojs/components";

import styles from "./index.module.scss";
class AnswerAction extends Component {
  render() {
    const { bindItemTap, good_num, comment_num } = this.props;
    const viewCls = classnames({
      [styles["dot"]]: true,
      [styles["view"]]: true
    });
    const wrapCls = classnames({
      [styles["answer-actions"]]: true
    });
    return (
      <View className={wrapCls} onClick={bindItemTap}>
        <View className={viewCls}>
          <A>{good_num + " 赞同"}</A>
        </View>
        <View className={viewCls}>
          <A>{comment_num + " 评论"}</A>
        </View>
        <View className={viewCls}>
          <A>关注问题</A>
        </View>
      </View>
    );
  }
}
export default AnswerAction;
