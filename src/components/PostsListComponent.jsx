import React from 'react';

const PostsListComponent = (props) => {

    let postsArray = [];
    let posts = props.children[1];

    for (let post of  posts) {
        postsArray.push(
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>);
    }


    return <div>
        <h2>Posts List Component</h2>
        <table className="ui inverted grey table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {postsArray}
            </tbody>
        </table>
    </div> ;

}
export default PostsListComponent;



