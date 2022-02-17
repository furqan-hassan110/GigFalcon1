import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true

    };
  }
  modalHandler=()=>{
    this.setState({isVisible: !this.state.isVisible});
  }
  render(){
    const {isVisible} = this.state;
    return(
      <View style={{flex:1, backgroundColor:'grey'}}>
        <Modal
        animationType='slide'
        visible={isVisible}
        transparent={true}
        >
          <TouchableOpacity 
          style={{flex:1, justifyContent:'center', alignItems:'center'}}
          onPress={()=> this.modalHandler()}
          >
            <TouchableWithoutFeedback>
          <View style={{height:'30%', width:'70%', backgroundColor:'white'}}>

          </View>
          </TouchableWithoutFeedback>
          </TouchableOpacity>
          

        </Modal>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  
})

export default App;