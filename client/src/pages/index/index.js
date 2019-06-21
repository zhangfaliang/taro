import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { Block, ScrollView, View, Swiper, SwiperItem } from "@tarojs/components";
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
import Layer from '../../components/layer'
const unitIds = [
  "adunit-5b52c23dc48e67d0",
  "adunit-f82e6a9a31001447",
  "adunit-75627d57477ad83a",
  "adunit-67b6b05a19f6019d",
  "adunit-4856a5023651b5fb",
  "adunit-4354cb870f22b96c",
  "adunit-71c20c574a7c1c9a",
  "adunit-6974905e183638a5",
  "adunit-83554f94033c767b",
  "adunit-6c6b7749174508fa"
];
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
    this.state = {
      isOpenLayer: false,
      imageUrl: ''
    }
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
  handelImgClik = (imageUrl) => {
    this.setState({
      isOpenLayer: true,
      imageUrl
    })
  }

  handleClose = () => {
    this.setState({
      isOpenLayer: false,

    })
  }
  componentWillMount() {
    this.props.asyncPageIndexGetData();
  }
  render() {
    const { feedData } = this.props;
    const { feed } = feedData;
    return (
      <View>
        {/* <Search /> */}
        <Swiper
          className='test-w'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots={false}
          interval={3000}
          autoplay>
          {unitIds.map(item => (<SwiperItem>
            <ad unit-id={item}></ad>
          </SwiperItem>))}
        </Swiper>

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
                          <ImageWrap imageUrl={original_pic} handelImgClik={this.handelImgClik} />
                        </View>
                      </View>
                    </View>
                  </Block>
                );
              })}
          </View>
        </ScrollView>
        <Layer handleClose={this.handleClose} isOpen={this.state.isOpenLayer} imageUrl={this.state.imageUrl} />
      </View>
    );
  }
}
