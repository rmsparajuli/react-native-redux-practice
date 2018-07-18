import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {decerementCounter, increamentCounter} from '../actions';
import {connect} from 'react-redux';

class Counter extends Component {

    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={{alignSelf:'center', fontSize:40, fontWeight:'bold', color:'#0000FF'}}>
                        {/* Store State Count */}
                        {this.props.count}
                    </Text>
                </View>
                <View style={{flexDirection:'row', flex:1}} >

                    <TouchableOpacity onPress={() => {
                        this.props.decerementCounter(this.props.count);
                    }}
                    style={{flex:1}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>
                                -
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        // A way to increase Store State COunt by 1
                        this.props.increamentCounter(this.props.count);
                    }} 
                    style={{flex:1}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>
                                +
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        count: state.current_count
    }
}


export default connect( mapStateToProp , {decerementCounter,increamentCounter} )(Counter);