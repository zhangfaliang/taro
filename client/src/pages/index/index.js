import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { Block, ScrollView, View, Swiper, SwiperItem } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import "./index.scss";
import { getData, getDataUpper, getDataLower } from "../../actions/index";
import { makePageIndex, makeFeed } from "../../selects/pageIndex";
import { makeCounter } from "../../selects/count";
import QuestionName from "../../components/questionName/index";
import ImageWrap from "../../components/images";
import Layer from "../../components/layer";
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
    }
  })
)
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLayer: false,
      large: {}
    };
  }
  upper = () => {
    this.props.getDataUpper(0);
  };
  lower = e => {
    const { feedData } = this.props;
    const { feed_length } = feedData;
    this.props.getDataLower(feed_length / 20);
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
  handleImgClick = large => {
    this.setState({
      openLayer: true,
      large
    });
  };
  handleClose = () => {
    this.setState({
      openLayer: false,
      large: {}
    });
  };

  handleClose = () => {
    this.setState({
      isOpenLayer: false,

    })
  }
  componentWillMount() {
    this.props.asyncPageIndexGetData(0);
  }
  render() {
    const { feedData } = this.props;
    const { feed } = feedData;
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
              feed.map((item, idx) => {
                const {
                  title,
                  bmiddle_pic,
                  original_pic,
                  thumbnail_pic,
                  pics,
                  _id
                } = item;
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
                          <ImageWrap
                            pics={pics}
                            handleImgClick={this.handleImgClick}
                            imageUrl={bmiddle_pic}
                            bigImgUrl={original_pic}
                          />
                        </View>
                      </View>
                    </View>
                  </Block>
                );
              })}
          </View>
        </ScrollView>
        <Layer {...this.state} handleClose={this.handleClose} />
      </View>
    );
  }
}
