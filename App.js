// //nested kind of structure

// <div id="parent">
//     <div id="child">
//         <h1>iam h1 tag</h1>
//         <h2>iam h2 tag</h2>
//     </div>

//     <div id="child2">
//         <h1>iam h1 tag</h1>
//         <h2>iam h2 tag</h2>
//     </div>
//     </div>
//     ReactElement(Object)=>HTMLAllCollection(Browser Understands)   



const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"Iam an h1 tag"),
            React.createElement("h2",{},"Iam an h1 tag"),
        ]
    ),
    React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{},"Iam an h1 tag"),
            React.createElement("h2",{},"Iam an h1 tag"),
        ]
    )
]
);
// const heading=React.createElement(
//     "h1",
//     {id: "heading",xyz:"abc",},
//      "hello world from react!"
//     );
    console.log(parent );//obj
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 