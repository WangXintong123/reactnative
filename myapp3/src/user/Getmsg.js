import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Button from 'react-native-button';
const {width}=Dimensions.get('window');
const s=width/640

export default class Getmsg extends Component {
  constructor(){
    super();
    this.state={
      tits:[],
      page:1
    }
  }
  down=()=>{
    if(this.state.page>1){
      this.setState({
        page:this.state.page-1
      })
    }
    if(this.state.page==1){
      ToastAndroid.show("当前是第一页！",1000);
    }
  }
  up=()=>{
    this.setState({
      page:this.state.page+1
    })
  }
  componentDidMount(){

    var url='https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10'
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      this.setState({
        tits:res.data,
      })
    })
  }
  componentDidUpdate(){
    var url='https://cnodejs.org/api/v1/topics?page='+this.state.page+'&limit=10'
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      this.setState({
        tits:res.data
      })
    })
  }
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#f23030" barStyle="dark-content" />
        <ScrollView>
          <View>
            <View style={styles.contener}>
              <View style={styles.list}>
                {
                  this.state.tits.map((item)=>(
                  <View style={styles.line}>
                    <Text style={styles.title}>
                      {item.title.length>15?item.title.substr(0,15)+'...':item.title}
                    </Text>
                    <Text style={styles.time}>{item.create_at.substr(0,10)}</Text>
                    {
                      item.create_at[9]%2==0?<Text style={[styles.asked,{color:'#333333'}]}>
                      已回复
                    </Text>:<Text style={[styles.asked,{color:'red'}]}>
                      待回复
                    </Text>
                    }
                  </View>
                  ))
                }
              </View>
              <View style={styles.bottom}>
                <Button onPress={this.down} style={styles.pgup}>上一页</Button>
                <Text>第{this.state.page}页</Text>
                <Button onPress={this.up} style={styles.pgdn}>下一页</Button>
              </View>  
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contener:{
    backgroundColor:'white',
    marginTop:5,
    justifyContent:'center'
  },
  list:{
    width:'100%',
    height:800*s,
  },
  line:{
    height:65*s,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
  },
  title:{
    fontSize:15,
    color:'#333333',
    marginLeft:20
  },
  time:{
    fontSize:15,
    color:'#333333',
    position:"absolute",
    left:400*s
  },
  asked:{
    fontSize:15,
    position:"absolute",
    left:550*s

  },
  bottom:{
    width:'100%',
    height:80*s,
    flexDirection:'row',
    marginTop:20
  },
  pgdn:{
    width:150*s,
    height:50*s,
    borderRadius:25*s,
    backgroundColor:'#f23030',
    padding:5,
    marginRight:150,
    marginLeft:10,
    color:'#fff'
  },
  pgup:{
    width:150*s,
    height:50*s,
    borderRadius:25*s,
    backgroundColor:'#f23030',
    padding:5,
    marginLeft:100,
    marginRight:10,
    color:'#fff'
  }
})