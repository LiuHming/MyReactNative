import * as React from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

let goldenRatio = 0.618
export default class MyBtn extends React.Component{

    static propTypes = {
        style: PropTypes.object,
        bgColor: PropTypes.string,
        fColor: PropTypes.string,
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        size: PropTypes.number,
        cornerRadius: PropTypes.number
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {style,bgColor,fColor,text,onPress,size,cornerRadius} = this.props;
        let w = size*goldenRatio
        let h = size - w
        return (
            <TouchableOpacity onPress={onPress}>
                <Text style={{
                    paddingHorizontal:w,
                    paddingVertical:h,
                    shadowRadius:10,
                    shadowOpacity:1,
                    shadowOffset:{width:-5,height:5},
                    shadowColor:'#999',
                    fontWeight:'bold',
                    color:fColor === undefined? "#fff":fColor,
                    textAlign:'center',
                    backgroundColor:bgColor === undefined? '#2980B9':bgColor,
                    borderRadius:cornerRadius === undefined? 20:cornerRadius,
                    ...style
                }}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

