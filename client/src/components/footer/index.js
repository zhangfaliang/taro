import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./index.scss";
class Footer extends Component {

  render() {
      const { answerDetail } = this.props;
    return (
      <View className="answer-footer flex-wrp">
        <View className="good flex-item">
          <View className="good-bad">
            <Image src={require("../../images/good-bad.png")} />
          </View>
          <View className="good-num">{answerDetail.goodNum}</View>
        </View>
        <View className="operation-wrp flex-item">
          <View className="operation flex-wrp flex-tab">
            <View className="operation-btn flex-item">
              <Image src={require("../../images/flag.png")} />
              <Text>没有帮助</Text>
            </View>
            <View className="operation-btn flex-item">
              <Image src={require("../../images/heart2.png")} />
              <Text>感谢</Text>
            </View>
            <View className="operation-btn flex-item">
              <Image src={require("../../images/star2.png")} />
              <Text>收藏</Text>
            </View>
            <View className="operation-btn flex-item">
              <Image src={require("../../images/comment.png")} />
              <Text>{answerDetail.commentNum}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Footer;
