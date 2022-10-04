import "./App.css";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shops/shoppage.component";
import Header from "./components/header.component";
import SignInAndSignUpPage from "../src/pages/signinnsignup";
import { Switch,Route ,Link,Redirect} from "react-router-dom";
import React  from "react";
import { auth,createUserProfileDocument } from './components/firebase.utils';
import { connect } from "react-redux";
import { setCurrentUser } from "../src/redux/user/user.actions";
import CheckoutPage  from "./pages/checkoutpage";

// import { Redirect } from "react-router-dom";
const Hats=(props)=>{

  console.log("h",props)
  return( <div>
    <h1>
    Hats Component
    {/* <Link to="/">Home</Link>    
    <Link to={`${props.match.url}/2`}>2</Link> 
    <Link to={`${props.match.url}/3`}>3</Link> 
    <Link to={`${props.match.url}/4`}>4</Link>  */}
      </h1>
      </div>
  )
}
// const HatLists=(props)=>{
 
//   console.log("hl",props)
//   return (<div>
//     <h1>
//     Hats {props.match.params.hid} Component
//     <button onClick={()=>props.history.push('/hats')}>hats</button>
//       </h1>
//       </div>
//   )
// }
 class App extends React.Component {
  
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {//subscription from firebase is added so that continous data is obtained..
      console.log("user",userAuth);//only from authetication..no db inbovd
      if (userAuth) {
        //from here its for users collectiok
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {//..on obtainining the existing or newly created snapshot
          setCurrentUser({//if obtained adds to state
            
              id: snapShot.id,
              ...snapShot.data()//data required for getting the data 
          
          });

          // console.log(this.state);
        });
      }

      setCurrentUser(userAuth );//if not then null value
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();//when app.js is removed from dom subscription from firebase is removed
  }

  render(){
    return (
     
      <div>
        <Header/>
        
      <Route exact  path='/' component={HomePage}/>
      <Route path='/hats' component={Hats}/>
      <Route path='/checkout' component={CheckoutPage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signinnup' render={()=>this.props.currentUser?<Redirect to="/"></Redirect>:<SignInAndSignUpPage></SignInAndSignUpPage>}/>
      {/* //render used becuase it caccepts javascript */}
      {/* <Route exact path='/a/b/hats' component={Hats}/>
      <Route  path='/a/b/hats/:hid' component={HatLists}/>
      <Route exact path='/a/c/hats' component={Hats}/>
      <Route  path='/a/c/hats/:hid' component={HatLists}/>
       */}
      
      </div>
    );

  }

}
const mapStatetoProps=({user})=>({//destructuring is mandatory as it is state
  currentUser:user.currentUser
  
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default  connect(mapStatetoProps,mapDispatchToProps)(App);
