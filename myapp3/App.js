import React,{useState,useEffect} from 'react';
import {
StyleSheet,View,Text,
BackHandler,ToastAndroid,AsyncStorage,
} from 'react-native';
import{Router,Scene,Tabs,Actions,Overlay,Drawer,Lightbox,Modal} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native';
import List from './src/goods/List';
import Persion from './src/user/Persion';
import Survice from './src/home/Survice';
import Getmsg from './src/user/Getmsg';
import SplashScreen from 'react-native-splash-screen'
import Two from './Two';
import Swipper from './src/zujian/Swipper';
import Login from './src/zujian/Login'
import Sign from './src/zujian/Sign'
console.disableYellowBox = true;

const App=()=> {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
  }
  if(isInstall){
		return(
			<>
			<View style={{flex:1}}>
				<Swipper afterInstall={afterInstall}/>
			</View>
			</>
		)
  }
	// if(isInstall){
	// 	return(
	// 		<>
	// 		<View style={{flex:1}}>
	// 			<Swipper afterInstall={afterInstall}/>
	// 		</View>
	// 		</>
	// 	)
  // }
  return (
		<>
			<Router
				backAndroidHandler={()=>{
					console.log(Actions.currentScene)
					if(Actions.currentScene == '_home' ||  Actions.currentScene == 'login'){
					if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						} 
					}else{
						Actions.pop();
						return true;
					}
				}}
			>
				<Overlay>
					<Modal key="modal" hideNavBar>
						<Lightbox key="lightbox">
							<Drawer 
								key="drawer"
								contentComponent={()=><Text>drawer</Text>}
								drawerIcon={()=><Icon name="menu"/>}
								drawerWidth={400}>
								<Scene key="root">
									<Tabs 
										key='tabbar'
										hideNavBar
										activeTintColor="#f23030"
										inactiveTintColor="#b7b6b3"
									>
										<Scene 
											key='home'
											title='首页'
											component={List}
											hideNavBar
											icon={({focused})=><Icon 
													color={focused?'#f34343':'#949494'} 
													name="home"
													/>}>
										</Scene>
										<Scene 
											key='list'
											hideDrawerButton
											hideNavBar
											icon={({focused})=><Icon 
													color={focused?'#f34343':'#949494'} 
													name='appstore'/>}
													title="商品分类"
													component={List}/>
										<Scene 
											key='file'
											hideDrawerButton
											hideNavBar
											component={Survice}
											icon={({focused})=><Icon 
													color={focused?'#f34343':'#949494'} 
													name='shopping-cart'/>}
													title="购物车"
													/>
										<Scene 
											key='persion'
											hideDrawerButton 
											titleStyle={{flex:1,marginLeft:'35%',color:'#fff'}}
																navBarButtonColor="white"
																navigationBarStyle={{backgroundColor:'red'}}
											icon={({focused})=><Icon 
													color={focused?'#f34343':'#949494'} 
													name='user'/>}
													title="个人中心">
											<Scene component={Persion} hideNavBar/>
											<Scene key="mygetmsg" component={Getmsg} hideTabBar></Scene>
										</Scene>
									</Tabs>
								</Scene>
							</Drawer>
						</Lightbox>
						<Scene initial={!isLogin} key="login" component={Login} />
						<Scene key="sign" component={Sign} />
					</Modal>
				</Overlay>
			</Router>
		</>
		
  );
};

const styles = StyleSheet.create({
  
});

export default App;
