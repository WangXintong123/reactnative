import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from '@ant-design/react-native'

const {width,scale}=Dimensions.get('window');
const s=width/640


export default class List extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <View>
            <View style={styles.top}>
              <View style={styles.search}>
                <TextInput placeholder="请输入商品名称"/>
                <Icon name="search" style={styles.searchimg}/>
              </View>
              <View style={styles.tab}>
                <Text style={[styles.tabcon,styles.red]}>综合</Text>
                <Text style={styles.tabcon}>销量</Text>
                <Text style={styles.tabcon}>新品</Text>
                <Text style={styles.tabcon}>价格</Text>
                <Text style={styles.tabcon}>信用</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.twodetail}>
                <View style={styles.detail}>
                  <Image style={{marginLeft:15}} resizeMode="center" source={require('../../assets/images/a.png')}/>
                  <Text style={{fontSize:14,marginLeft:7}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={{fontSize:14,color:'red',marginLeft:7}}>36.00</Text>
                </View>
                <View style={styles.detail}>
                  <Image style={{marginLeft:25,marginTop:5}} resizeMode="center" source={require('../../assets/images/b.png')}/>
                  <Text style={{fontSize:14,marginTop:5,marginLeft:7}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={{fontSize:14,color:'red',marginLeft:7}}>36.00</Text>
                </View>
              </View>
              <View style={styles.twodetail}>
                <View style={styles.detail}>
                  <Image style={{marginLeft:15}} resizeMode="center" source={require('../../assets/images/a.png')}/>
                  <Text style={{fontSize:14,marginLeft:7}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={{fontSize:14,color:'red',marginLeft:7}}>36.00</Text>
                </View>
                <View style={styles.detail}>
                  <Image style={{marginLeft:25,marginTop:5}} resizeMode="center" source={require('../../assets/images/b.png')}/>
                  <Text style={{fontSize:14,marginTop:5,marginLeft:7}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={{fontSize:14,color:'red',marginLeft:7}}>36.00</Text>
                </View>
              </View>
              <View style={styles.twodetail}>
                <View style={styles.detail}>
                  <Image style={{marginLeft:15}} resizeMode="center" source={require('../../assets/images/a.png')}/>
                  <Text style={{fontSize:14,marginLeft:7}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={{fontSize:14,color:'red',marginLeft:7}}>36.00</Text>
                </View>
                <View style={styles.detail}>
                  <Image style={{marginLeft:25,marginTop:5}} resizeMode="center" source={require('../../assets/images/b.png')}/>
                  <Text style={{fontSize:14,marginTop:5,marginLeft:7}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                  <Text style={{fontSize:14,color:'red',marginLeft:7}}>36.00</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  top:{
    height:100,//100*s
    backgroundColor:'white',
    justifyContent:'center'
  },
  search:{
    flexDirection:'row',
    height:40,
    marginLeft:40,
    marginTop:30,
    borderRadius:10, 
    width:'80%',
    padding:5,
    backgroundColor:'#eeeeee',
  },
  searchimg:{
    position:'relative',
    left:220,
    top:5
  },
  tab:{
    height:55,
    width:'80%',
    padding:5,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
    marginLeft:33
  },
  tabcon:{
    justifyContent: 'center',
    marginLeft:25,
    marginRight:25,
    fontSize:18
  },
  red:{
    color:'red'
  },
  content:{
    justifyContent:'center',
    // padding:2.5,
  },
  twodetail:{
    height:240,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
  },
  detail:{
    width:'47%',
    height:250,
    margin:2.5,
    backgroundColor:'white',
    // padding:2
  },
  right:{
    marginRight:5,
  }
});

