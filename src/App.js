import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop-page/shopPage.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header-component/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubcribeFromAuth=null

  componentDidMount(){  
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef= await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>{
            console.log(this.state)
          })
        })
        
      }
      else{
        this.setState({currentUser:userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render(){
    return (
    
      <div>
         <Header currentUser={this.state.currentUser}/>
           <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/shop' element={<ShopPage/>}/>
             <Route path='/signin' element={<SignInAndSignUpPage/>}/>
           </Routes>
      </div>
   );
 }
 

}
  
export default App;
