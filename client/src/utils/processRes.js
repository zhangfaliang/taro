const { get } = require("lodash");

var processRes = data => {
  return JSON.stringify(
    get(data, "data.cards", []).map(item => {
      const mblog = get(item, "mblog", {});
      let {
        text,
        page_info,
        retweeted_status,
        thumbnail_pic,
        bmiddle_pic,
        original_pic,
        pics
      } = mblog;
      if (pics) {
        let texts = [],
          reg = /[^A-z|0-9|=|>|<|\-|\；|\:|\"|\\|/|.|;|\? |+, +|,|\?|\.|\&|\%]+/g;
        let res = true;
        while (res) {
          res = get(reg.exec(text), "0");
          res && texts.push(res);
        }
        return {
          text: text,
          thumbnail_pic,
          bmiddle_pic,
          original_pic,
          title: texts.join(","),
          pics,
          type: "pic"
        };
      } else if (page_info) {
        // 视频展示
        let texts = [],
          reg = /[^A-z|0-9|=|>|<|\-|\；|\:|\"|\\|/|.|;|\? |+, +|,|\?|\.|\&|\%]+/g;
        let res = true;
        while (res) {
          res = get(reg.exec(text), "0");
          res && texts.push(res);
        }
        const media_info = get(page_info, "media_info", {});
        const { page_pic, type } = page_info;
        const { mp4_hd_url } = media_info;
        return {
          text: text,
          title: texts.join(","),
          mp4_hd_url,
          page_pic: get(page_pic, "url"),
          type,
          isMedia: true,
          type: "Media"
          // video_details,
        };
      }
    })
  );
};

module.exports.processRes = processRes;
