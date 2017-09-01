import React from 'react';
import {connect} from 'react-redux';

const Home =() => {
  return (
    <div>
        <h2>Home</h2>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        allPost:state.allPost
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        dispatch1:()=>{
           // dispatch(actionCreator)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
