import { connect } from "@tarojs/redux";
import { createStructuredSelector } from "reselect";
import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import { setPageIndexDetail } from "../../actions/index";
import {
  makeDetailData,
  makeIndexDetailAdvertising
} from "../../selects/pageIndex";
import Layer from "../../components/layer";
import VideoPlay from "../../components/videoComponent/video-play";
@connect(
  createStructuredSelector({
    index_detail: makeDetailData,
    detailAdvertising: makeIndexDetailAdvertising
  }),
  dispatch => ({
    onSetPageIndexDetail: detailData => {
      dispatch(setPageIndexDetail(detailData));
    }
  })
)
class IndexDetail extends Component {
  handleClose = () => {

  };
  render() {
    const { index_detail, detailAdvertising } = this.props;
    const { isPic } = index_detail;
    return (
      <View>
        {/* <navigator url="/pages/index/index" open-type="navigateBack"> */}

        {isPic ? (
          <Layer {...index_detail} handleClose={this.handleClose} />
        ) : (
          <VideoPlay {...index_detail} />
        )}
        {/* </navigator> */}
      </View>
    );
  }
}

export default IndexDetail;
