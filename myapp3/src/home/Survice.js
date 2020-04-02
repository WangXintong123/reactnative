import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import {Icon} from '@ant-design/react-native'
import Swiper from 'react-native-swiper';

const {width}=Dimensions.get('window');
const s=width/640


export default class Survice extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#f23030" barStyle="dark-content" />
        <ScrollView>
          <View>
            <View style={styles.sertop}>
              <View style={styles.search}>
                <View style={styles.input}>
                  <Icon name="search" style={styles.searchimg}/>
                  <TextInput placeholder="请输入商品名称" placeholderTextColor="white"/> 
                </View>
                <Icon name="shopping-cart" style={{fontSize:20,color:'white',marginLeft:25,marginTop:10}}/>
              </View>
            </View>
            <View style={styles.banner}>
              <Swiper 
                      height={270*s}
                      width={'100%'}
                      horizontal={true}
                      paginationStyle={{bottom: 10}}
                      showsButtons={false}
                      autoplay={true}   
                      autoplayTimeout={2}
                      dot={<View style={styles.dotSty}/>}
                      activeDot={<View style={styles.activeSty}/>}
                      >
                  <View style={styles.slide}>
                      <Image style={{width: width, height: 270*s}}
                          resizeMode="stretch"
                          source={ require('../../assets/images/banner1.png')}>
                      </Image>
                  </View>
                  <View style={styles.slide}>
                      <Image style={{width: width, height: 270*s}}
                          resizeMode="stretch"
                          source={require('../../assets/images/banner2.png')}>
                      </Image>
                  </View>
              </Swiper>
            </View>
            <View style={styles.line}>
              <View style={styles.inner}>
                <View style={[styles.circle,{backgroundColor:'#ffcccc'}]}>
                  <Image style={{width:55*s,height:55*s}} source={require('../../assets/images/l1.png')}/>
                </View>
                <Text style={styles.ltext}>居家维修保养</Text>
                <Icon name="right" style={{position:'absolute',right:30*s}}/>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.inner}>
                <View style={[styles.circle,{backgroundColor:'#ffe1b1'}]}>
                  <Image style={{width:55*s,height:55*s}} source={require('../../assets/images/l2.png')}/>
                </View>
                <Text style={styles.ltext}>住宿优惠</Text>
                <Icon name="right" style={{position:'absolute',right:30*s}}/>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.inner}>
                <View style={[styles.circle,{backgroundColor:'#bfe6a8'}]}>
                  <Image style={{width:55*s,height:55*s}} source={require('../../assets/images/l3.png')}/>
                </View>
                <Text style={styles.ltext}>出行接送</Text>
                <Icon name="right" style={{position:'absolute',right:30*s}}/>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.inner}>
                <View style={[styles.circle,{backgroundColor:'#c3ddf2'}]}>
                  <Image style={{width:55*s,height:55*s}} source={require('../../assets/images/l4.png')}/>
                </View>
                <Text style={styles.ltext}>E族活动</Text>
                <Icon name="right" style={{position:'absolute',right:30*s}}/>
              </View>
            </View>
            <View style={styles.bottom}>
              <View style={styles.but}>
                <Text style={{fontSize:20,color:'white'}}>发布需求</Text>
              </View>
              <Text>©E族之家 版权所有</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sertop:{
    height:80*s,
    backgroundColor:'#f23030',
    justifyContent:'center',
    alignItems:'center',
  },
  search:{
    width:590*s,
    height:55*s,
    flexDirection:'row',
    backgroundColor:'#f23030',
  },
  searchimg:{
    marginLeft:30,
    marginTop:10,
    color:'white'
  },
  input:{
    backgroundColor:'#fbb8b8',
    height:55*s,
    width:525*s,
    borderRadius:24,
    flexDirection:'row'
  },
  banner:{
    height:270*s,
  },
  line:{
    height:120*s,
    marginTop:10,
    backgroundColor:'white'
  },
  inner:{
    width:630*s,
    height:120*s,
    flexDirection:'row',
    alignItems:'center'
  },
  circle:{
    width:100*s,
    height:100*s,
    borderRadius:100*s/2,
    marginLeft:15*s,
    justifyContent:'center',
    alignItems:'center'
  },
  ltext:{
    fontSize:20,
    marginLeft:45,
  },
  lright:{
    fontSize:20,
    position:'relative',
    top:50,
    right:20
  },
  bottom:{
    height:210*s,
    justifyContent:'center',
    alignItems:'center'
  },
  but:{
    width:540*s,
    height:65*s,
    backgroundColor:"#f23030",
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center'
  },
  dotSty:{
    backgroundColor:'white',
    width:10,
    height:10,
    borderRadius:5,
    marginLeft:5
  },
  activeSty:{
    backgroundColor:'red',
    width:10,
    height:10,
    borderRadius:5,
    marginLeft:5
  }
})