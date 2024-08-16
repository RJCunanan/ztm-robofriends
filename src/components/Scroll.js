import React from "react";

// Note: Every props has children
const Scroll = (props) => {
    return (
        // {{}} -> JS expression with an object that can have CSS styles
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;