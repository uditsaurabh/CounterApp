import React from 'react';


export const Card = ({ background, children }) => {
    return (
        <div className={`App-header ${background || 'bgBlack'}`}>
            {children}
        </div>
    )
}

// export function CardBlue(props) {
//     return (
//         <div className="App-header bgBlue">
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

// export function CardGreen(props) {
//     return (
//         <div className="App-header bgGreen">
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

// export function CardRed(props) {
//     return (
//         <div className="App-header bgRed">
//             <h1>{props.title}</h1>
//         </div>
//     )
// }
