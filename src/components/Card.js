import React from "react";

const Card = ({ name, email, id }) => {
    return (
        // NOTE: Remember you can only return one thing, in this case the <div>
        // We'll worry about putting a title later...
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                {/* NOTE: props.name and props.email must be in { } since it is a JS expression */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;