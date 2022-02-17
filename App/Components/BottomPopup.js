import React from 'react';
import {Modal, Dimensions, TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';


const deviceHeight = Dimensions.get("window").height
export class BottomPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }
    show=()=>{
        this.setState({show: true})
    }
    close=()=>{
        this.setState({show:false})
    }
    renderOutsideTouchable(onTouch){
        const view = <View style={{flex:1, width:'100%', }}/>
        if(!onTouch) return view
        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex:1, width:'100%',}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }
    renderTitle = ()=>{
        const{ title }=this.props
        return (
<View> 
                            <Text style={{
                                color:'#182E44',
                                fontSize:20,
                                fontWeight:'bold',
                                margin:15,

                            }}>
                                {title}

                            </Text>
                         </View>
        )
    }
    rederContent = ()=>{
        const {data} = this.props
        return(
            <View>
                <FlatList
                style={{
                    marginBottom:20
                }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={this.renderItem}
                extraData={data}
                keyExtractor={(item, index)=> index.toString()}
                ItemSeparatorComponent={this.renderSeparator}
                contentContainerStyle={{
                    paddingBottom:40,

                }}
                >

                </FlatList>
            </View>
        )
    }
     renderItem=({item})=>{
         return(
             <View>
                 <Text>{item.name}</Text>
             </View>
         )
     }
     renderSeparator=()=>(
         <View
         style={{
             opacity:0.1,
             backgroundColor:'#182E44',
             height:1
         }}
         />
         )
render(){
        let {show} = this.state
        const {onTouchOutside, title} = this.props
        return(
            <Modal
               animationType={'fade'}
               transparent={true}
               visible={true}
               onRequestClose={this.close}
            
            >
                <View 
                style={{flexx:1, 
                backgroundColor:'#000000AA', 
                justifyContent:'flex-end'}}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor:'#FFFFFF',
                        width:'100%',
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10,
                        paddingHorizontal:10,
                        maxHeight: deviceHeight*0.5
                    }}>
                        {this.renderTitle()}
                        {this.rederContent()}

                    </View>

                </View>

            </Modal>
        )
    }
}

export default BottomPopup;