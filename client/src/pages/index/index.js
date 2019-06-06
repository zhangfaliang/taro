import Nerv from "nervjs";
import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import {
  Block,
  ScrollView,
  View,
  Image,
  Input,
  Text
} from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./index.scss";
//index.js
var util = require("../../utils/util.js");
import { getData, getDataUpper,getDataLower } from "../../actions/index";
import { makePageIndex, makeFeed } from "../../selects/pageIndex";
import { makeCounter } from "../../selects/count";
import { add } from "../../actions/counter";

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
    console.log("getDataUpper");
  };
  lower = e => {
    this.props.getDataLower();
    console.log("lower");
  };
  onClick = e => {
    e.stopPropagation();
    this.props.add();
  };
  componentWillMount() {
    this.props.asyncPageIndexGetData();
  }
  render() {
    const { pageIndex, feedData } = this.props;
    const { feed, feed_length } = feedData;
    const answer_id = 0;
    const question_id = 6;
    console.log(feedData);
    return (
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
          <View className="search flex-wrp">
            <View className="search-left flex-item">
              <Image src={require("../../images/search.png")} />
              <Input
                placeholder="搜索话题, 问题或人"
                placeholderClass="search-placeholder"
              />
            </View>
            <View className="search-right flex-item" onClick={this.onClick}>
              <Image src={require("../../images/lighting.png")} />
            </View>
          </View>
          {feed &&
            feed.map((item, idx) => {
              return (
                <Block data-idx={idx}>
                  <View className="feed-item">
                    <View className="feed-source">
                      <A className>
                        <View className="avatar">
                          <Image src={item.feed_source_img} />
                        </View>
                        <Text>
                          {item.feed_source_name + item.feed_source_txt}
                        </Text>
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
                          <Text>{item.question}</Text>
                        </A>
                      </View>
                      <View className="answer-body">
                        <View onClick={this.bindItemTap}>
                          <Text className="answer-txt" aid={answer_id}>
                            {item.answer_ctnt}
                          </Text>
                        </View>
                        <View
                          className="answer-actions"
                          onClick={this.bindItemTap}
                        >
                          <View className="like dot">
                            <A>{item.good_num + " 赞同"}</A>
                          </View>
                          <View className="comments dot">
                            <A>{item.comment_num + " 评论"}</A>
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
    );
  }
}
