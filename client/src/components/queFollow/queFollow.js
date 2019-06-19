import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

class QueFollow extends Component {
  render() {
    //require("../../images/eye.png")
    const {  children } = this.props;
    console.log(Taro.Children,'TaroTaroTaroTaroTaroTaroTaroTaro')
 
    return <View className={styles["que-follow"]}>{children}</View>;
  }
}


export default QueFollow;
