import Nerv from "nervjs";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./question.scss";
//answer.js
var util = require("../../utils/util.js");

var app = Taro.getApp();

@withWeapp("Page")
class Question extends Taro.Component {
  state = {
    motto: "知乎--微信小程序版",
    userInfo: {}
  };
  bindItemTap = () => {
    Taro.navigateTo({
      url: "../answer/answer"
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
    navigationBarTitleText: "问题"
  };

  render() {
    return (
      <View className="container">
        <View className="question-wrp">
          <View className="question-item">
            <View className="que-tag">
              <Text className="tag">阅读</Text>
              <Text className="tag">电子书</Text>
              <Text className="tag">Kindle</Text>
              <Text className="tag">书籍</Text>
              <Text className="tag">文学</Text>
            </View>
            <View className="que-title">
              选择 Kindle 而不是纸质书的原因是什么？
            </View>
            <View className="que-content">
              WEB前端*不靠谱天气预报员*想做代码小仙女
            </View>
            <View className="que-follow">
              <View className="left">
                <View className="watch">
                  <Image src={require("../../images/eye.png")} />
                  <Text>3316</Text>
                </View>
                <View className="comment">
                  <Image src={require("../../images/comment2.png")} />
                  <Text>27</Text>
                </View>
              </View>
              <View className="right">关注</View>
            </View>
          </View>
          <View className="que-operate flex-wrp">
            <View className="invite flex-item">
              <Image src={require("../../images/invite.png")} />
              <Text>邀请回答</Text>
            </View>
            <View className="write flex-item">
              <Image src={require("../../images/write.png")} />
              <Text>写回答</Text>
            </View>
          </View>
        </View>
        <View className="answer-feed">
          <View onClick={this.bindItemTap} className="feed-item">
            <View className="feed-source">
              <A className bindTap>
                <View className="avatar">
                  <Image src={require("../../images/icon1.jpeg")} />
                </View>
                <Text>Rebecca</Text>
              </A>
            </View>
            <View className="feed-content">
              <View className="answer-body">
                <View>
                  <Text className="answer-txt">
                    难道不明白纸质书更贵啊！！！
                    若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                    另外，用kindle看小说的...
                  </Text>
                </View>
                <View className="answer-actions">
                  <View className="like dot">
                    <A>3.9K 赞同</A>
                  </View>
                  <View className="comments dot">
                    <A>254 评论</A>
                  </View>
                  <View className="time">
                    <A>2 个月前</A>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View onClick={this.bindItemTap} className="feed-item">
            <View className="feed-source">
              <A className bindTap>
                <View className="avatar">
                  <Image src={require("../../images/icon1.jpeg")} />
                </View>
                <Text>Rebecca</Text>
              </A>
            </View>
            <View className="feed-content">
              <View className="answer-body">
                <View>
                  <Text className="answer-txt">
                    难道不明白纸质书更贵啊！！！
                    若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                    另外，用kindle看小说的...
                  </Text>
                </View>
                <View className="answer-actions">
                  <View className="like dot">
                    <A>3.9K 赞同</A>
                  </View>
                  <View className="comments dot">
                    <A>254 评论</A>
                  </View>
                  <View className="time">
                    <A>2 个月前</A>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View onClick={this.bindItemTap} className="feed-item">
            <View className="feed-source">
              <A className bindTap>
                <View className="avatar">
                  <Image src={require("../../images/icon1.jpeg")} />
                </View>
                <Text>Rebecca</Text>
              </A>
            </View>
            <View className="feed-content">
              <View className="answer-body">
                <View>
                  <Text className="answer-txt">
                    难道不明白纸质书更贵啊！！！
                    若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                    另外，用kindle看小说的...
                  </Text>
                </View>
                <View className="answer-actions">
                  <View className="like dot">
                    <A>3.9K 赞同</A>
                  </View>
                  <View className="comments dot">
                    <A>254 评论</A>
                  </View>
                  <View className="time">
                    <A>2 个月前</A>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View onClick={this.bindItemTap} className="feed-item">
            <View className="feed-source">
              <A className bindTap>
                <View className="avatar">
                  <Image src={require("../../images/icon1.jpeg")} />
                </View>
                <Text>Rebecca</Text>
              </A>
            </View>
            <View className="feed-content">
              <View className="answer-body">
                <View>
                  <Text className="answer-txt">
                    难道不明白纸质书更贵啊！！！
                    若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                    另外，用kindle看小说的...
                  </Text>
                </View>
                <View className="answer-actions">
                  <View className="like dot">
                    <A>3.9K 赞同</A>
                  </View>
                  <View className="comments dot">
                    <A>254 评论</A>
                  </View>
                  <View className="time">
                    <A>2 个月前</A>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View onClick={this.bindItemTap} className="feed-item">
            <View className="feed-source">
              <A className bindTap>
                <View className="avatar">
                  <Image src={require("../../images/icon1.jpeg")} />
                </View>
                <Text>Rebecca</Text>
              </A>
            </View>
            <View className="feed-content">
              <View className="answer-body">
                <View>
                  <Text className="answer-txt">
                    难道不明白纸质书更贵啊！！！
                    若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                    另外，用kindle看小说的...
                  </Text>
                </View>
                <View className="answer-actions">
                  <View className="like dot">
                    <A>3.9K 赞同</A>
                  </View>
                  <View className="comments dot">
                    <A>254 评论</A>
                  </View>
                  <View className="time">
                    <A>2 个月前</A>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View onClick={this.bindItemTap} className="feed-item">
            <View className="feed-source">
              <A className bindTap>
                <View className="avatar">
                  <Image src={require("../../images/icon1.jpeg")} />
                </View>
                <Text>Rebecca</Text>
              </A>
            </View>
            <View className="feed-content">
              <View className="answer-body">
                <View>
                  <Text className="answer-txt">
                    难道不明白纸质书更贵啊！！！
                    若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                    另外，用kindle看小说的...
                  </Text>
                </View>
                <View className="answer-actions">
                  <View className="like dot">
                    <A>3.9K 赞同</A>
                  </View>
                  <View className="comments dot">
                    <A>254 评论</A>
                  </View>
                  <View className="time">
                    <A>2 个月前</A>
                  </View>
                </View>
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

export default Question;
