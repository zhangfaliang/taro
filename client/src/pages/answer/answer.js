import Nerv from "nervjs";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro-h5";
import withWeapp from "@tarojs/with-weapp";
import "./answer.scss";
//answer.js
var util = require("../../utils/util.js");

var app = Taro.getApp();

@withWeapp("Page")
class Answer extends Taro.Component {
  state = {
    motto: "知乎--微信小程序版",
    userInfo: {}
  };
  toQuestion = () => {
    Taro.navigateTo({
      url: "../question/question"
    });
  };
  componentWillMount = () => {
    console.log("onLoad");
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  };
  tapName = event => {
    console.log(event);
  };
  config = {
    navigationBarTitleText: "回答"
  };

  render() {
    return (
      <View className="container">
        <View className="question" onClick={this.toQuestion}>
          <Text className="question-title">
            选择 Kindle 而不是纸质书的原因是什么？
          </Text>
        </View>
        <View className="answerer-wrp">
          <View className="bg-half" />
          <View className="answerer flex-wrp">
            <View className="avatar flex-item">
              <Image src={require("../../images/icon1.jpeg")} />
            </View>
            <View className="answerer-info flex-item">
              <Text className="answerer-name">Rebecca</Text>
              <Text className="answerer-des">
                WEB前端*不靠谱天气预报员*想做代码小仙女
              </Text>
            </View>
            <View className="follow flex-item">
              <Text>十 关注</Text>
            </View>
          </View>
        </View>
        <View className="answer-content">
          <Text>
            难道不明白纸质书更贵啊！！！
            若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
            另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
            而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
            碎片时间阅读总不能天天背着一本书吧，那么占地方。
            看到描述最后一段，感觉有骗答案的嫌疑
          </Text>
          <Image src={require("../../images/1444983318907-_DSC1826.jpg")} />
          <Text>
            难道不明白纸质书更贵啊！！！
            若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
            另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
            而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
            碎片时间阅读总不能天天背着一本书吧，那么占地方。
            看到描述最后一段，感觉有骗答案的嫌疑
          </Text>
          <Image src={require("../../images/1444983318907-_DSC1826.jpg")} />
        </View>
        <View className="answer-footer flex-wrp">
          <View className="good flex-item">
            <View className="good-bad">
              <Image src={require("../../images/good-bad.png")} />
            </View>
            <View className="good-num">2.1k</View>
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
                <Text>302</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }
}

export default Answer;
