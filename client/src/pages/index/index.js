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
import AnswerQuestionContent from "../../components/answerQuestionContent/index";
import QuestionName from "../../components/questionName/index";
import ImageWrap from "../../components/images";
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
  bindQueTap = question_id => {
    // Taro.navigateTo({
    //   url: `../question/question?question_id=${question_id}`
    // });
  };

  componentWillMount() {
    this.props.asyncPageIndexGetData();
  }
  render() {
    const { feedData } = this.props;
    const { feed } = feedData;
    console.log(feedData);

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
                  title,
                  bmiddle_pic,
                  original_pic,
                  thumbnail_pic,
                  _id
                } = item;
                return (
                  <Block data-idx={idx}>
                    <View className="feed-item">
                      {/* <IndexAnswerInfo
                        feed_source_img={feed_source_img}
                        feed_source_name={feed_source_name}
                        feed_source_txt={feed_source_txt}
                      /> */}

                      <View className="feed-content">
                        <QuestionName
                          question_id={_id}
                          bindQueTap={this.bindQueTap.bind(this, _id)}
                          question={title}
                        />

                        <View className="answer-body">
                          <ImageWrap imageUrl={original_pic} />

                          <AnswerAction
                            texts={[
                              {
                                text: "赞同",
                                showDot: true
                              },
                              {
                                text: "评论",
                                showDot: true
                              },
                              {
                                text: "关注问题",
                                showDot: false
                              }
                            ]}
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
