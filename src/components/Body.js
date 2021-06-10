import React from 'react';

export const Body = (props)=>{
    return (
        <div>
            <p>{props.title} {props.num} {props.myFunc(4,1010)}</p>
        </div>
    )
}
// export default Body;

