import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getComments } from './actions';

const Comment = ({getComments, comments}) => {
   
    console.log(comments);
   useEffect (() => {
     getComments();
   },[]);

  return (
    <div>{
      comments.map(comment => (<><p>{comment.name}</p></>))
    }</div>
  )
}

const mapStateToProps = state => {
    return { comments: state.comments};
}

const mapDispatchToProps = dispatch => ({
    getComments: () => dispatch(getComments())
});
    
export default connect(mapStateToProps,mapDispatchToProps)(Comment);