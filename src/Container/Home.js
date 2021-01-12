import React, { Component } from 'react';
// import axios from "axios"; FOR API USE ONLY
import { Link } from 'react-router-dom';
import img from '../img.png';
import { connect } from 'react-redux';

class Home extends Component {
	//  THIS IS A SAMPLE FOR USING A RESTAPI !!!!!!!!!!!!!!!!!!!!!
	// state = {
	//     post: [ ]
	// }
	// componentDidMount(){
	//     axios.get('https://jsonplaceholder.typicode.com/posts')
	//         .then(res =>  {
	//             console.log(res)
	//             this.setState({
	//             post: res.data.slice(0,10)
	//         })
	//     })
	// }

	render() {
		// console.log(this.props)
		const { post } = this.props;
		console.log(post);
		const postList = post.length ? (
			post.map((post) => {
				return (
					<div className="post card" key={post.id}>
						<img src={img} alt="Suri's trail pic" />
						<div className="card-content">
							<Link to={'/' + post.id}>
								<span className="card-title red-text">
									{post.title}
								</span>
							</Link>
							<p> {post.body}</p>
						</div>
					</div>
				);
			})
		) : (
			<div> "There are no elements in the array yet" </div>
		);
		return (
			<div className="container home">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.post
	};
};

// get the data from the Data store and map it to the component

export default connect(mapStateToProps)(Home);
// as connect is a function for a highOrder component
