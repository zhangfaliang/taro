import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { Block, ScrollView, View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./index.scss";
import { getData, getDataUpper, getDataLower } from "../../actions/index";
import { makePageIndex, makeFeed } from "../../selects/pageIndex";
import { makeCounter } from "../../selects/count";
import Search from "../../components/Search/index";
import IndexAnswerInfo from "../../components/indexAnswerInfo/index";
import AnswerAction from "../../components/answerActions/index";
@connect(
  createStructuredSelector({
    pageIndex: makePageIndex,
    feedData: makeFeed,
    counter: makeCounter
  }),
  dispatch => ({
    asyncPageIndexGetData: () => {
      dispatch(getData());
    },
    getDataUpper() {
      dispatch(getDataUpper());
    },
    getDataLower() {
      dispatch(getDataLower());
    }
  })
)
class Toggle extends Component {
  constructor(props) {
    super(props);
  }
  upper = () => {
    this.props.getDataUpper();
  };
  lower = e => {
    this.props.getDataLower();
  };
  bindItemTap = answer_id => {
    Taro.navigateTo({
      url: `../answer/answer?answer_id=${answer_id}`
    });
  };
  bindQueTap = (question_id) => {
    Taro.navigateTo({
      url: `../question/question?question_id=${question_id}`
    });
  };

  componentWillMount() {
    this.props.asyncPageIndexGetData();
  }
  render() {
    const { feedData } = this.props;
    const { feed } = feedData;

    return (
      <View>
        <Search />
        <ScrollView
          scrollY="true"
          className="container"
          onScrollToUpper={this.upper}
          upperThreshold="10"
          lowerThreshold="5"
          onScrollToLower={this.lower}
          scrollIntoView={true}
          scrollTop={true}
        >
          <View className="todo">
            {feed &&
              feed.map((item, idx) => {
                const {
                  answer_id,
                  question_id,
                  feed_source_img,
                  feed_source_name,
                  feed_source_txt,
                  question,
                  answer_ctnt,
                  good_num,
                  comment_num
                } = item;
                return (
                  <Block data-idx={idx}>
                    <View className="feed-item">
                      <IndexAnswerInfo
                        feed_source_img={feed_source_img}
                        feed_source_name={feed_source_name}
                        feed_source_txt={feed_source_txt}
                      />

                      <View className="feed-content">
                        <View
                          className="question"
                          qid={question_id}
                          onClick={this.bindQueTap.bind(this,question_id)}
                        >
                          <A className="question-link">
                            <Text>{question}</Text>
                          </A>
                        </View>
                        <View className="answer-body">
                          <View onClick={() => this.bindItemTap(answer_id)}>
                            <Text className="answer-txt" aid={answer_id}>
                              {answer_ctnt}
                            </Text>
                          </View>
                          <AnswerAction
                            good_num={good_num}
                            comment_num={comment_num}
                            bindItemTap={this.bindItemTap}
                          />
                        </View>
                      </View>
                    </View>
                  </Block>
                );
              })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
