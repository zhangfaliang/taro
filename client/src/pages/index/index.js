import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { Block, ScrollView, View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { isEmpty } from "lodash";
import "./index.scss";
import {
  getData,
  getDataUpper,
  getDataLower,
  setPageIndexDetail
} from "../../actions/index";
import { makePageIndex, makeFeed } from "../../selects/pageIndex";
import { makeCounter } from "../../selects/count";
import QuestionName from "../../components/questionName/index";
import ImageWrap from "../../components/images";
import Layer from "../../components/layer";
import VideoComponent from "../../components/videoComponent";

@connect(
  createStructuredSelector({
    pageIndex: makePageIndex,
    feedData: makeFeed,
    counter: makeCounter
  }),
  dispatch => ({
    asyncPageIndexGetData: pageNum => {
      dispatch(getData(pageNum));
    },
    getDataUpper(pageNum) {
      dispatch(getDataUpper(pageNum));
    },
    getDataLower(pageNum) {
      dispatch(getDataLower(pageNum));
    },
    onSetPageIndexDetail: detailData => {
      dispatch(setPageIndexDetail(detailData));
    }
  })
)
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLayer: false,
      pics: [],
      index: 0
    };
  }
  upper = () => {
    this.props.getDataUpper(0);
  };
  lower = e => {
    const { feedData } = this.props;
    const { feed_length } = feedData;
    this.props.getDataLower(Math.round(feed_length / 20));
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
  handleImgClick = (pics, index) => {
    this.props.onSetPageIndexDetail({
      openLayer: true,
      pics,
      index,
      isPic:true
    });
    Taro.navigateTo({
      url: `/pages/index_detail/index`
    });
  };
  handleClose = () => {
    this.setState({
      openLayer: false,
      pics: [],
      index: 0
    });
  };
  videoClick = videoParams => {
    this.props.onSetPageIndexDetail({
      openLayer: true,
      ...videoParams,
      isMedia: true
    });
    Taro.navigateTo({
      url: `/pages/index_detail/index`
    });
  };
  componentWillMount() {
    const { feedData, asyncPageIndexGetData } = this.props;
    const { feed } = feedData;

    isEmpty(feed) && asyncPageIndexGetData(0);
  }
  render() {
    const { feedData } = this.props;
    const { feed } = feedData;
    console.log(
      feed.filter(item => {
        return !isEmpty(item);
      })
    );
    return (
      <View>
        {/* <Search /> */}
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
              feed
                .filter(item => {
                  return !isEmpty(item);
                })
                .map((item, idx) => {
                  const {
                    title,
                    bmiddle_pic,
                    original_pic,
                    thumbnail_pic,
                    pics,
                    _id,
                    type
                  } = item;
                  console.log(type);
                  return (
                    <Block data-idx={idx}>
                      <View className="feed-item">
                        <View className="feed-content">
                          <QuestionName
                            question_id={_id}
                            bindQueTap={this.bindQueTap.bind(this, _id)}
                            question={title}
                          />

                          <View className="answer-body">
                            {type === "pic" ? (
                              <ImageWrap
                                pics={pics}
                                handleImgClick={this.handleImgClick}
                                imageUrl={bmiddle_pic}
                                bigImgUrl={original_pic}
                              />
                            ) : (
                              <VideoComponent
                                videoClick={this.videoClick}
                                {...item}
                              />
                            )}
                          </View>
                        </View>
                      </View>
                    </Block>
                  );
                })}
          </View>
        </ScrollView>
        {/* <Layer {...this.state} handleClose={this.handleClose} /> */}
      </View>
    );
  }
}
