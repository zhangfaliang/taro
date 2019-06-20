import Nerv from "nervjs";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { get } from "lodash";
import "./question.scss";
import QuestionTag from "../../components/questionTag";
import QuestionName from "../../components/questionName";
import UserLabel from "../../components//answerUserInfo/userLabel";
import {
  QueFollow,
  FollowLeft,
  QuestionLabel
} from "../../components/queFollow";
import { AnswerTodo, AnswerTodoWrap } from "../../components/answerTodo";
import AnswerAction from "../../components/answerActions";
import IndexAnswerInfo from "../../components/indexAnswerInfo/index";
import AnswerQuestionContent from "../../components/answerQuestionContent/index";

import Buttons from "../../components/button/index";
//answer.js
var util = require("../../utils/util.js");

var app = Taro.getApp();

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
      console.log(userInfo, "=============================");
      that.setData({
        userInfo: userInfo
      });
    });
    const question_id = get(this, "$router.params.question_id");
    // this.props.onGetAnswerPageData(answer_id);
  };
  tapName = event => {
    console.log(event);
  };
  config = {
    navigationBarTitleText: "问题"
  };

  render() {
    const data = {
      tag: ["阅读", "电子书", "Kindle", "书籍", "文学"],
      title: "选择 Kindle 而不是纸质书的原因是什么",
      user_label: "WEB前端*不靠谱天气预报员*想做代码小仙女",
      watch_num: 3316,
      comment_num: 27,
      answer_name: "Rebecca",
      answerInfo: [
        {
          answer_name: "Rebecca",
          answer_id: 3,
          answer_txt:
            "难道不明白纸质书更贵啊！！！若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的...",
          texts: [
            {
              text: "34",
              showDot: true
            },
            {
              text: "514",
              showDot: true
            },
            {
              text: "2个月前",
              showDot: false
            }
          ]
        },
        {
          answer_name: "Rebecca",
          answer_id: 3,
          answer_txt:
            "难道不明白纸质书更贵啊！！！若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的...",
          texts: [
            {
              text: "34",
              showDot: true
            },
            {
              text: "514",
              showDot: true
            },
            {
              text: "2个月前",
              showDot: false
            }
          ]
        }
      ]
    };
    return (
      <View className="container">
        <View className="question-wrp">
          <View className="question-item">
            <QuestionTag tags={data.tag} />
            <QuestionName classNames="que-title" question={data.title} />
            <UserLabel user_label={data.user_label} />
            <QueFollow>
              <FollowLeft>
                <QuestionLabel
                  imageUrl={require("../../images/eye.png")}
                  text={data.watch_num}
                />
                <QuestionLabel
                  imageUrl={require("../../images/comment2.png")}
                  text={data.comment_num}
                />
              </FollowLeft>
              <Buttons />
            </QueFollow>
          </View>
          <AnswerTodoWrap>
            <AnswerTodo
              text="邀请回答"
              imageUrl={require("../../images/invite.png")}
            />
            <AnswerTodo
              text="写回答"
              imageUrl={require("../../images/write.png")}
            />
          </AnswerTodoWrap>
          <View className="answer-feed">
            {data.answerInfo &&
              data.answerInfo.map((item, idx) => {
                const { answer_name, answer_txt, texts } = item;
                return (
                  <View onClick={this.bindItemTap} className="feed-item">
                    <IndexAnswerInfo
                      feed_source_img={require("../../images/icon1.jpeg")}
                      feed_source_name={answer_name}
                      feed_source_txt={""}
                    />

                    <View className="feed-content">
                      <View className="answer-body">
                        <View>
                          <AnswerQuestionContent
                            bindItemTap={this.bindItemTap}
                            answer_ctnt={answer_txt}
                            answer_id={1}
                          />
                          <View>
                            <Text className="answer-txt" />
                          </View>
                          <AnswerAction texts={texts} />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      </View>
    );
  }
}

export default Question;
