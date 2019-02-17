import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppComponent from "./components/AppComponent";
import ErrorComponent from "./components/ErrorComponent";
import UsersListComponent from "./components/UsersListComponent";
import PostsListComponent from "./components/PostsListComponent";
import LoadingComponent from "./components/LoadingComponent";

//TODO in case of future url add-ons we can put those urls into an array and call them by index.
const postsApiUrl = "https://jsonplaceholder.typicode.com/posts";
const usersApiUrl = "https://jsonplaceholder.typicode.com/users";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: [],
            errorMessage: ''
        };
    }
    componentDidMount() {
        //let's say that we are required to load both tables simultaneously
        //of course, it can be different, but it is just my guess for this time.
        Promise.all([axios.get(postsApiUrl), axios.get(usersApiUrl)]).then((result) => {
                let posts = result[0].data;
                let users = result[1].data;

                this.setState({users: users});
                this.setState({posts: posts});
            }
        ).catch((error) => {
            console.log(error.message);
        })
    }
    render() {
        let usersState = this.state.users;
        let postsState = this.state.posts;
        let errorMessageState = this.state.errorMessage;
        if (errorMessageState && (!usersState || !postsState)) {
            return (
                <ErrorComponent
                    error={errorMessageState}
                />

            );
        }
        else if (!errorMessageState && usersState && postsState) {

            return (
                <AppComponent>
                    <UsersListComponent>
                        usersState={usersState}
                    </UsersListComponent>
                    <PostsListComponent>
                        postsState={postsState}
                    </PostsListComponent>
                </AppComponent>
            );
        }
        return (
            <LoadingComponent/>
        );

    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));