import React from 'react';

//component that is a container for our tables.
const AppComponent = (props) => {
    return(<div className="background">
        <div className="ui container">
            <h1>App Component</h1>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>);


}
export default AppComponent;



