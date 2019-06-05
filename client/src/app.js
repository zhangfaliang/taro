import '@tarojs/async-await'; 
import {Provider} from '@tarojs/redux';
import configStore from './store';
import Taro from "@tarojs/taro";
import "./app.scss";
import Index from "./pages/copy/index";
Taro.cloud.init({
  env: "chiji-test-3e054b"
});
export const testDB = Taro.cloud.database();
const store = configStore();

class App extends Taro.Component {
  componentWillMount = () => {
    //调用API从本地缓存中获取数据
    var logs = Taro.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    Taro.setStorageSync("logs", logs);
  };
  getUserInfo = cb => {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    } else {
      //调用登录接口
      Taro.login({
        success: function() {
          Taro.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  };
  globalData = {
    userInfo: null
  };
  config = {
    pages: [
      "pages/index/index",
      "pages/discovery/discovery",
      "pages/notify/notify",
      "pages/chat/chat",
      "pages/more/more",
      "pages/answer/answer",
      "pages/question/question"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#0068C4",
      navigationBarTitleText: "知乎",
      navigationBarTextStyle: "white",
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "",
          iconPath: "images/index.png",
          selectedIconPath: "images/index_focus.png"
        },
        {
          pagePath: "pages/discovery/discovery",
          text: "",
          iconPath: "images/discovery.png",
          selectedIconPath: "images/discovery_focus.png"
        },
        {
          pagePath: "pages/notify/notify",
          text: "",
          iconPath: "images/ring.png",
          selectedIconPath: "images/ring_focus.png"
        },
        {
          pagePath: "pages/chat/chat",
          text: "",
          iconPath: "images/chat.png",
          selectedIconPath: "images/chat_focus.png"
        },
        {
          pagePath: "pages/more/more",
          text: "",
          iconPath: "images/burger.png",
          selectedIconPath: "images/burger_focus.png"
        }
      ]
    },
    networkTimeout: {
      request: 10000,
      downloadFile: 10000
    },
    debug: true,
    sitemapLocation: "sitemap.json"
  };

  componentWillMount() {
    this.$app.globalData = this.globalData;
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
} //app.js

export default App;
Taro.render(<App />, document.getElementById("app"));
