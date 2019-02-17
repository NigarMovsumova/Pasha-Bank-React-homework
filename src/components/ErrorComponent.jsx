import React from 'react';
//Error Handling is simple now, but this component is for the case
// if Error Component will be modified in the future into a more complex error handling

const ErrorComponent = (props) => {
    console.log(props);
    return (
        <div>
            Error: {props.errorMessage}
        </div>);

}
export default ErrorComponent;



