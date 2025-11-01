import React, { useContext, useEffect } from 'react';
import { AuthContex } from '../Context/AuthContex';

const MyBids = () => {
 const {user} = useContext(AuthContex);

 useEffect(()=> {
  if(user.email){
    fetch(`http://localhost:3000/bids?byer_email=${user.email}`)
    .then(res => res.json())
    .then(data => {
      console.log("This is ",data);
    })
  }
},[user.email])

  return (
    <div>
      sadasd
    </div>
  );
};

export default MyBids;