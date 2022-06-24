import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop-page/shopPage.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header-component/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './pages/redux/user/user.action';

class App extends React.Component {
 
  unsubcribeFromAuth=null

  componentDidMount(){  
    const {setCurrentUser}=this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef= await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          },)
        })
        
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render(){
    return (
    
      <div>
         <Header/>
           <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/shop' element={<ShopPage/>}/>
             <Route path='/signin' element={<SignInAndSignUpPage/>}/>
           </Routes>
      </div>
   );
 }
 

}
  
const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps) (App);
 