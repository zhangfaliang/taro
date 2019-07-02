import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text, Image } from "@tarojs/components";
import styles from "./index.module.scss";
class ImageWrap extends Component {
  handleImgClick = (pics, index) => {
    const { handleImgClick } = this.props;
    handleImgClick && handleImgClick(pics, index);
  };
  render() {
    const { imageUrl, bigImgUrl, pics } = this.props;
    const todoCls = classnames({
      [styles["imageWrap"]]: true
    });

    return (
      <View className={todoCls}>
        {pics &&
          pics.map((pic, index) => {
            const { geo, url, pid } = pic;
            const { height, width } = geo;
            return (
              <Image
                key={pid}
                style={{
                  height: `${height > 300 ? 300 : height}rpx`,
                  width: `${width > 300 ? 300 : width < 250 ? 300 : width}rpx`
                }}
                src={url}
                onClick={this.handleImgClick.bind(this, pics, index)}
              />
            );
          })}
      </View>
    );
  }
}

export default ImageWrap;
