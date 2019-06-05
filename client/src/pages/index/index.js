import Nerv from "nervjs";
import { connect } from '@tarojs/redux'
import { createStructuredSelector } from 'reselect';
import {
    Block,
    ScrollView,
    View,
    Image,
    Input,
    Text
} from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./index.scss";
//index.js
var util = require("../../utils/util.js");
import { getData } from '../../actions/index'
import { makePageIndex, makeFeed } from '../../selects/pageIndex';
import { makeCounter } from '../../selects/count';
import { add } from '../../actions/counter'

@connect(createStructuredSelector({
    pageIndex: makePageIndex,
    feed: makeFeed,
    counter: makeCounter
}),
    (dispatch) => ({
        asyncPageIndexGetData: () => {
            dispatch(getData())
        },
        add() {
            dispatch(add())
        },
    })
)
class Toggle extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (e) => {
        e.stopPropagation()
        this.props.add()
    }
    componentWillMount(){
        this.props.asyncPageIndexGetData()
    }
    render() {
        const { pageIndex } =this.props
        return (
            <View className='todo'>
                <Button className='add_btn' onClick={this.onClick}>+</Button>
                <Button className='dec_btn' onClick={this.getData}>-</Button>
                <Button className='dec_btn' onClick={this.onClick}>async</Button>
                <View>{this.props.counter.num}{JSON.stringify(pageIndex)}</View>
            </View>

        )
    }
}