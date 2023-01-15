import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetials} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  // useEffect(()=>{
  //   console.log("useEffect working....");
  //   // const {userId} = postDetials
  //   const userId = "5y0Ltye6FYTPhhbzQ3tko1GUlGA3"
  //   console.log(userId);
  //   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  //     console.log("res");
  //     res.forEach(doc =>{
  //       setUserDetails(doc.data())
  //       console.log(userDetails);
  //     })
  //   }).catch(error=>{
  //     console.log(error.message);
  //   })
  // },[])

  useEffect(()=>{
    async function postValues(){
      console.log("useEffect working....");
      const userId = "5y0Ltye6FYTPhhbzQ3tko1GUlGA3"
      console.log(userId);
      const userData =await firebase.firestore().collection('users').where('id','==',userId).get()
      .then((res)=>{
        console.log("res");
        res.forEach(doc =>{
          setUserDetails(doc.data())
          console.log(userDetails);
        })
      }).catch(error=>{
        console.log(error.message);
      })
    }
    postValues()
  },[])
  
  return (
    <div className="viewParentDiv">
      <h1>Hello</h1>
      {/* <div className="imageShowDiv">
        <img
          src={postDetials.url}
          alt="lol"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetials.price} </p>
          <span>{postDetials.name}</span>
          <p>{postDetials.category}</p>
          <span>{postDetials.createdAt}</span>
        </div>
    {userDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
  }
      </div> */}
    </div>
  );
}
export default View;
