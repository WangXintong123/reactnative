import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  AsyncStorage
} from 'react-native';
import {Icon} from '@ant-design/react-native'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'

const {width}=Dimensions.get('window');
const s=width/640
const options = {
    title: '头像',
    takePhotoButtonTitle: '拍照',
    cancelButtonTitle: '取消',
    chooseFromLibraryButtonTitle: '在相册中选择图片',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class Persion extends Component {
  constructor(){
    super();
    this.state={
      avatarSource:''
    }
  }
  myPhoto=()=>{
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        console.log('Error:', response.error);
      } else if (response.customButton) {
        console.log('custom:', response.customButton);
      } else {
        AsyncStorage.setItem("myphoto",response.uri)  
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  backLogin=()=>{
    AsyncStorage.removeItem("user")
    Actions.login()
  }
  componentDidMount(){
    AsyncStorage.getItem("myphoto").then((res)=>{
      const source = { uri: res };
      this.setState({
        avatarSource: source,
      });
    })
  }
  render() {
    
    return (
      <View>
        <StatusBar backgroundColor="#f23030" barStyle="dark-content" />
        <ScrollView>
          <View>
            <View style={styles.top}>
              <View style={styles.my}>
                <Button onPress={()=>{this.myPhoto()}}style={StyleSheet.mypoto}>
                {
                  this.state.avatarSource.uri==null?
                  <Image style={{width: 160*s, height: 160*s,borderRadius:80*s}}  source={require('../../assets/images/user1.png')}/>:
                  <Image style={{width: 160*s, height: 160*s,borderRadius:80*s}}  source={this.state.avatarSource}/> 
                }
        
                </Button>
                <Text style={styles.mytext}>BINNU DHILLON</Text>
              </View>
            </View>
            <View style={styles.center}>
            <View style={styles.mycenter}>
                <View style={styles.mydetail}>
                  <Image style={{width: 30*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                  <Text style={{fontSize:20,marginLeft:20,color:'#4f4e4e'}}>个人中心</Text>
                </View>
              </View>
              <View style={styles.mybottom}>
                <View style={styles.zhanghu}>
                  <View style={styles.left}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>账户管理</Text>
                  </View>
                  <View style={styles.middle}>
                    <Image style={{width: 30*s, height: 30*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>收货地址</Text>
                  </View>
                  <View style={styles.right}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的信息</Text>
                  </View>
                  <View style={styles.left}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的订单</Text>
                  </View>
                  <View style={styles.middle}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的二维码</Text>
                  </View>
                  <View style={styles.right}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的积分</Text>
                  </View>
                  <View style={styles.left}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的收藏</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.mycenter}>
                <View style={styles.mydetail}>
                  <Image style={{width: 30*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                  <Text style={{fontSize:20,marginLeft:20,color:'#4f4e4e'}}>E族活动</Text>
                </View>
              </View>
              <View style={styles.mybottom}>
                <View style={styles.zhanghu}>
                  <View style={styles.left}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>居家维修保养</Text>
                  </View>
                  <View style={styles.middle}>
                    <Image style={{width: 30*s, height: 30*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>出行接送</Text>
                  </View>
                  <View style={styles.right}>
                    <Image style={{width: 30*s, height: 30*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的受赠人</Text>
                  </View>
                  <View style={styles.left}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:18,color:'#4f4e4e'}}>我的住宿优惠</Text>
                  </View>
                  <View style={styles.middle}>
                    <Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的活动</Text>
                  </View>
                  <View style={styles.right}>
                    <Button onPress={()=>Actions.mygetmsg()}><Image style={{width: 35*s, height: 35*s}}  source={require('../../assets/images/14.png')}/></Button>
                    <Text style={{fontSize:20,color:'#4f4e4e'}}>我的发布</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{width:width,height:100*s,alignItems: 'center',justifyContent:'center'}}>
            <Button onPress={()=>{this.backLogin()}}><Text style={styles.off}> 退出登录</Text></Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  top:{
    height:310*s,
    backgroundColor:'#f23030',
    alignItems: 'center',
    justifyContent:'center'
  },
  my:{
    width:215*s,
    height:215*s,
    justifyContent:'center'
  },
  myphoto:{
    width:160*s,
    height:160*s,
    borderColor:'white',
    borderStyle:'solid',
    borderWidth:3,
    borderRadius:160*s/2
  },
  mytext:{
    fontSize:20,
    color:'white'
  },
  center:{
    height:465*s,
    backgroundColor:'white',
  },
  mycenter:{
    height:80*s,
    borderBottomColor:'#eeeeee',
    borderBottomWidth:2,
    borderStyle:'solid',
    justifyContent:'center'
  },
  mydetail:{
    flexDirection:'row',
    alignItems:'center',
    height:40*s,
    marginLeft:20*s
  },
  mybottom:{
    height:380*s
  },
  zhanghu:{
    width:640*s,
    height:310,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  left:{
    width:150*s,
    height:90*s,
    alignItems:'center',
    marginLeft:30*s,
    marginTop:35*s
  },
  middle:{
    width:150*s,
    height:90*s,
    alignItems:'center',
    marginLeft:60*s,
    marginTop:35*s
  },
  right:{
    width:150*s,
    height:90*s,
    alignItems:'center',
    marginLeft:70*s,
    marginTop:35*s
  },
  footer:{
    height:360*s,
    backgroundColor:'white',
    marginTop:10*s
  },
  mybottom:{
    width:640*s,
    height:280*s,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  off:{
    width:80,
    height:40,
    backgroundColor:'red',
    color:'white',
    borderRadius:5,
    fontSize:18,
    lineHeight:40,
  }
});