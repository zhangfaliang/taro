import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { Block, ScrollView, View, Image, Text } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./index.scss";
//index.js
var util = require("../../utils/util.js");
import { getData, getDataUpper, getDataLower } from "../../actions/index";
import { makePageIndex, makeFeed } from "../../selects/pageIndex";
import { makeCounter } from "../../selects/count";
import { add } from "../../actions/counter";
import Search from "../../components/Search/index";
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
    add() {
      dispatch(add());
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
  bindItemTap = () => {
    console.log('===========')

    Taro.navigateTo({
      url: "../answer/answer"
    });
  };
  bindQueTap = () => {
    console.log('---------')
    Taro.navigateTo({
      url: "../question/question"
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
                      <View className="feed-source">
                        <A className>
                          <View className="avatar">
                            <Image src={feed_source_img} />
                          </View>
                          <Text>{feed_source_name + feed_source_txt}</Text>
                        </A>
                        <Image
                          className="item-more"
                          mode="aspectFit"
                          src={require("../../images/more.png")}
                        />
                      </View>
                      <View className="feed-content">
                        <View
                          className="question"
                          qid={question_id}
                          onClick={this.bindQueTap}
                        >
                          <A className="question-link">
                            <Text>{question}</Text>
                          </A>
                        </View>
                        <View className="answer-body">
                          <View onClick={this.bindItemTap}>
                            <Text className="answer-txt" aid={answer_id}>
                              {answer_ctnt}
                            </Text>
                          </View>
                          <View
                            className="answer-actions"
                            onClick={this.bindItemTap}
                          >
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
