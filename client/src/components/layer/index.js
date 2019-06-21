import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";
class Layer extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    const { handleClose, imageUrl } = this.props;
    handleClose && handleClose(imageUrl);
  };
  render() {
    const { openLayer, imageUrl } = this.props;
    const layerCls = classnames({
      [styles["layer"]]: true,
      [styles["close"]]: !openLayer
    });
    return (
      <View className={layerCls} onClick={this.handleClose}>
        <Image className={styles["image"]} src={imageUrl} />
      </View>
    );
  }
}

export default Layer;
