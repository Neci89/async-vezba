import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/posts/posts.actions';
import Post from '../Post/Post';

class Posts extends Component {

    componentDidMount(){
        this.props.getPosts();
    }

    renderPosts(){
        if(this.props.loading) return <div>Loading...</div>
        return this.props.posts.map(post => {
            return <Post key={post.id} post={post}/>
        })
    }


    render() {
        return (
            <div>
                {this.renderPosts()}    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.allPosts.loading,
        posts: state.allPosts.posts
    }
}

export default connect(mapStateToProps, {
    getPosts
})(Posts);