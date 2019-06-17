import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";


class QuestionName extends Component {

    render() {
        const { question_id, bindQueTap, question } = this.props;
        return (
            <View
                className={styles['question']}
                qid={question_id}
                onClick={bindQueTap}
            >
                <A className="question-link">
                    <Text   className={styles['text']}>{question}</Text>
                </A>
            </View>
        );
    }
}
export default QuestionName;


