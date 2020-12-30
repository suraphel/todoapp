import React, {Component} from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import  { deletePost } from '../Actions/postAction'

class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    } 

    // state = {
    //     post: null
    // }
    //  componentDidMount(){
    //     let id = this.props.match.params.post_id; 
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({  
    //         post: res.data
    //     })         
    //    })       
    // } 
    render(){
        const post = this.props.post ? (
            <div className = "post">
            <h4 className = "center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className = "center">
                <button className = "btn grey" onClick = {this.handleClick}>Delete </button>
            </div>
            </div>
        ) : (
            <div>
            <h4 className = "center">"Loading..." </h4>
            </div>
        )
        return(
            <div className="container ">
                { post }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.post.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch, id) => {
    // let id = ownProps.match.params.post_id;
    // const dispatch = useDispatch(function);
    return{
        deletePost: (id) => { dispatch(deletePost(id))} 

    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Post); 