import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text, Image } from "@tarojs/components";
import styles from "./index.module.scss";
class ImageWrap extends Component {
  handleImgClick = bigImgUrl => {
    const { handleImgClick } = this.props;
    handleImgClick && handleImgClick(bigImgUrl);
  };
  render() {
    const { imageUrl, bigImgUrl } = this.props;
    const todoCls = classnames({
      [styles["imageWrap"]]: true
    });
    return (
      <View className={todoCls}>
        <Image
          src={imageUrl}
          onClick={this.handleImgClick.bind(this, bigImgUrl)}
        />
      </View>
    );
  }
}

export default ImageWrap;
