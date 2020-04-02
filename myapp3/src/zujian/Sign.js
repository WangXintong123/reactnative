import React, { Component } from 'react'
import {View, Text,TextInput, AsyncStorage, TouchableOpacity, ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'

export default class Sign extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd1:'',
            pwd2:'',
            isloading:false,
            wrong:false
        }
        this.user={username:'',pwd:''}
        this.userArr=[]
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd1:text})
    }
    pwdagain = (text)=>{
        this.setState({pwd2:text})
    }
    sign=()=>{
        if(this.state.username===''){
            ToastAndroid.show("用户名不能为空",1000)
            this.setState({wrong:true});
        }
        if(this.state.pwd1===''){
            ToastAndroid.show("密码不能为空",1000)
            this.setState({wrong:true});
        }
        if(this.state.pwd2===''){
            ToastAndroid.show("请再次确认密码",1000)
            this.setState({wrong:true});
        }
        if(this.state.pwd1 !== this.state.pwd2){
            ToastAndroid.show("两次密码不同",1000)
            this.setState({wrong:true});
        }
        if(this.state.wrong===false){
            this.user.username=this.state.username;
            this.user.pwd=this.state.pwd2;
            this.userArr.push(this.user);
            console.log(55)
            Actions.home();
        }
        
    }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
            <View
              style={{ alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder="用户名" 
                    onChangeText={this.userhandle}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="密码" 
                    secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput 
                    onChangeText={this.pwdagain}
                    placeholder="再次确认密码" 
                    secureTextEntry={true}
                />
              </View>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.sign}>
                    <Text>确认注册</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={Actions.login}>
                    <Text>返回登录</Text>
                </TouchableOpacity>
            </View>
          </View>
        )
    }
}
