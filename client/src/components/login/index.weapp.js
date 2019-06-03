import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

export default class Login extends Component {
  state = {
    context: {}
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: { shiny: "shiny" }
      })
      .then(res => {
        this.setState({
          context: res.result
        });
      });
    // 让用户选择一张图片
    // Taro.chooseImage({
    //   success: chooseResult => {
    //     // 将图片上传至云存储空间
    //     Taro.cloud.uploadFile({
    //       // 指定上传到的云路径
    //       cloudPath: "my-photo.png",
    //       // 指定要上传的文件的小程序临时文件路径
    //       filePath: chooseResult.tempFilePaths[0],
    //       // 成功回调
    //       success: res => {
    //         console.log("上传成功", res);
    //       }
    //     });
    //   }
    // });

    // 当然 promise 方式也是支持的
    Taro.cloud.callFunction({
      name: 'add',
      data: {
        a: 12,
        b: 19
      }
    }).then(console.log)
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    );
  }
}
