import Taro, { Component } from "@tarojs/taro";
import classnames from "classnames";
import { View, Image } from "@tarojs/components";

import styles from "./index.module.scss";
class Layer extends Component {
    constructor(props) {
        super(props);

    }
    static getDerivedStateFromProps(props, state) {
        if (props.isOpen !== state.isOpen) {
            return { isOpen: props.isOpen };
        }
        return null;
    }
    handleClose = (e) => {
        const { handleClose } = this.props;
        handleClose && handleClose()
    }
    render() {
        const { imageUrl, isOpen } = this.props;
        const layerCls = classnames({
            [styles.layer]: true,
            [styles.close]: !isOpen,
        })
        return (
            <View className={layerCls}  onClick={this.handleClose} >
                <Image className={styles.image} src={imageUrl} />
            </View>
        );
    }
}
export default Layer;
