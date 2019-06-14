import { get } from "lodash";
import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./answer.scss";
import { getAnswerPageData } from "../../actions/answer";
import { makeAnswerDetail } from "../../selects/answer";
import Footer from "../../components/footer/index";
@connect(
  createStructuredSelector({
    answerDetail: makeAnswerDetail
  }),
  dispatch => ({
    onGetAnswerPageData: (answer_id) => {
      dispatch(getAnswerPageData(answer_id));
    }
  })
)
class Toggle extends Component {
  componentWillMount() {
    const answer_id = get(this, "$router.params.answer_id");
    console.log(answer_id,'answer_idanswer_idanswer_idanswer_idanswer_id')
    this.props.onGetAnswerPageData(answer_id);
  }
  render() {
    const { answerDetail } = this.props;
    console.log(answerDetail);
    return (
      <View className="container">
        <View className="question" onClick={this.toQuestion}>
          <Text className="question-title">{answerDetail.title}</Text>
        </View>
        <View className="answerer-wrp">
          <View className="bg-half" />
          <View className="answerer flex-wrp">
            <View className="avatar flex-item">
              <Image src={answerDetail.userInfo.userImg} />
            </View>
            <View className="answerer-info flex-item">
              <Text className="answerer-name">
                {answerDetail.userInfo.name}
              </Text>
              <Text className="answerer-des">
                {answerDetail.userInfo.label}
              </Text>
            </View>
            <View className="follow flex-item">
              <Text>十 关注</Text>
            </View>
          </View>
        </View>
        <View className="answer-content">
          {answerDetail.content &&
            answerDetail.content.map(item => {
              const { text, img } = item;
              return (
                <view>
                  {text ? <Text>{text}</Text> : ""}
                  {img ? (
                    <Image src={"../../images/1444983318907-_DSC1826.jpg"} />
                  ) : (
                    ""
                  )}
                </view>
              );
            })}
        </View>
        <Footer />
      </View>
    );
  }
}

export default Toggle;
