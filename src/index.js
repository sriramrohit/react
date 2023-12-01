import React from 'react';
import ReactDOM from 'react-dom';

const header = React.createElement(
    "div",{className: "Title", key:"Title"},
    [React.createElement("h1",{key : "h1"},"This is Heading-1 using h1 tag"),
     React.createElement("h1",{key : "h1"},"This is Heading-1 using h1 tag"),
     React.createElement("h1",{key : "h1"},"This is Heading-1 using h1 tag"),
]);
//ReactDOM.render( header , document.getElementById("root"))
console.log(header)

const Header2 = () => {
    return (
        <div className = 'Title'>
            <h1>"This is Heading-1 using fumction1 component</h1>
            <h2>"This is Heading-1 using fumction1 component</h2>
            <h3>"This is Heading-1 using fumction1 component</h3>
        </div>
    )
};
//ReactDOM.render(< Header2/> , document.getElementById("root"))

const header3 =(
    <div className='Title'>
        <h1 style={{color:"red"}}>"This is Heading-1 using jsx"</h1>
        <h2>"This is Heading-2 using jsx"</h2>
        <h3>"This is Heading-3 using jsx</h3>   
    </div>
)
//ReactDOM.render( Header3 , document.getElementById("root"))
