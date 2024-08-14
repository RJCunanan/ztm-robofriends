import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, index) => {
                    // NOTE: When you do a loop in React DOM, always have a unique key prop; in this case the index
                    // BONUS: key prop should have something that doesn't change. For example, index 
                    // (or index in our case) could change if array items get moved. So a better key in 
                    // this case would be something unique like id.
                    return (
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                        />
                    );
                })
            }
        </div> 
    );
}

export default CardList;