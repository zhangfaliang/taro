import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text, Image } from "@tarojs/components";
import styles from './index.module.scss';
class ImageWrap extends Component {
  handelClik = () => {
    const { imageUrl, handelImgClik } = this.props;
    handelImgClik(imageUrl)

  }
  render() {
    const { text, imageUrl } = this.props;
    const todoCls = classnames({
      [styles["imageWrap"]]: true,

    });
    return (
      <View className={todoCls}>
        <Image src={imageUrl} onClick={this.handelClik} />
      </View>
    );
  }
}

export default ImageWrap;
