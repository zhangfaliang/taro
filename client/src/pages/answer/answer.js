import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { get } from "lodash";
import { makeAnswerDetail } from "../../selects/answer";
import "./answer.scss";
import { getAnswerPageData } from "../../actions/answer";
@connect(
  createStructuredSelector({
    answerDetail: makeAnswerDetail
  }),
  dispatch => ({
    getAnswerPageData: answer_id => {
      dispatch(getAnswerPageData(answer_id));
    }
  })
)
class Toggle extends Component {
  componentWillMount = () => {
    const answer_id = get(this, "$router.params.answer_id");
    this.props.getAnswerPageData(answer_id);
  };
  render() {
    const data = get(this.props, "answerDetail", {});
    console.log(data,'datadatadatadatadata')
    return <View>{JSON.stringify(data)}</View>;
  }
}
export default Toggle;
