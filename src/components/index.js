import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';
import { increamentCounter, decerementCounter } from '../actions';
import { connect } from 'react-redux';


// Two inputs for FlatList
// Total Data (As a Data ko Array)    2. How to render each Data Row (As a function)


const Icons = {
    greenIcon: "https://www.freeiconspng.com/uploads/green-glossy-ball-png-23.png",
    redIcon : "https://sensiblesoccer.de/community/img/event/234/timthumb.png"
}


const response = [{
    "id": 1,
    "first_name": "George",
    "last_name": "Bluth",
    "desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    "status": {
        "online": true,
        "last_online": "34 minutes ago"
    }
}
    , {
    "id": 2,
    "first_name": "Janet",
    "last_name": "Weaver",
    "desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
    "status": {
        "online": false,
        "last_online": "34 minutes ago"
    }
}
    , {
    "id": 3, "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
    "desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "status": {
        "online": true,
        "last_online": "1 hour ago"
    }
}];


class HomePage extends Component {


    render() {
        console.log(this.props);
        const { location, time } = this.props.homePageData.fetched_data;
        if(this.props.homePageData.data_loaded){
        return (
            // <FlatList
            //     style={{marginTop: 33}}
            //     data={response} 
            //     keyExtractor={(item) => {
            //         return item.first_name;
            //     }}
            //     renderItem={                   
            //         ({ item }) => 
            //             <TouchableOpacity onPress={() => {
            //                 Actions.push("next");
            //             } }>
            //             <View style={styles.container}>
            //                 <View style={styles.title}>
            //                     <Image source={{ uri: item.avatar }} style={{ width: 100, height: 100, borderRadius:20 }} />
            //                 </View>
            //                 <View style={styles.body}>
            //                     <View style={{ flex: 1 }}>
            //                         <Text style={{fontSize:16, color:'#000'}}>{item.first_name}</Text>
            //                     </View>


            //                     <View style={{ flex: 1, margin:10 }}>
            //                         <Text style={{fontSize:16,  color:'#000'}}> {item.desc} </Text>
            //                     </View>


            //                     <View style={{ flex: 1 }}>


            //                         <View style={{ flex: 1 }}>
            //                             <Text style={{fontSize:16,  color:'#000', fontWeight:'bold'}}>
            //                                 {item.status.last_online}
            //                             </Text>
            //                         </View>
            //                         <View style={{ flex: 1 }}>
            //                                <Image  source={{uri: item.status.online? Icons.greenIcon : Icons.redIcon }} style={styles.image} />
            //                         </View>
            //                     </View>


            //                 </View>
            //             </View>
            //             </TouchableOpacity>


            // } />
            <View style={{flex:1, flexDirection: 'column', justifyContent:'center'}}>
                <View style={{flex:1,alignSelf:'center'}}>
                    <Text style={{flex:1, color:'#000'}}> Location: </Text>
                    <Text style={{flex:1, color:'#000'}}>
                        {location}
                    </Text>
                </View>
                <View style={{flex:1,alignSelf:'center'}}>
                    <Text style={{flex:1, color:'#000'}}> Time: </Text>
                    <Text style={{flex:1, color:'#000'}}>
                        {time}
                    </Text>
                </View>
            </View>


        );
    }
    else{
        return (
            <View>
                <Text>Loading</Text>
                </View>
        );
    }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        zIndex: 10,
        borderWidth: 1,
        backgroundColor: '#FFF',
        paddingTop: 10

    },
    leftContainer: {
        flex: 1,
        margin: 10

    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        margin: 10
    },
    title: {
        margin: 10
    },
    body: {

    },
    bottom: {

    },
    image: {
        height: 100,
        width: 100
    }

});

const n = (state) => {

    return {
        homePageData: state
    }
}

//           <-----             Redux FrameWork<------------Component
export default connect  (mapStateToProp, { increamentCounter, decerementCounter })     (HomePage);
                //   mapStateToProps     mapDispatchToProp


                









