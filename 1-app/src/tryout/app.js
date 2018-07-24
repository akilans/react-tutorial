// Basic Example
// babel src/tryout/app.js --out-file public/scripts/app.js --presets=env,react --watch
console.log("Loading React Template");

/*
let template = React.createElement(
    "h1",null,"Welcome to React"
);
*/

let template = <h1>Welcome to ReactJS</h1>

let appRoot = document.getElementById("root");

ReactDOM.render(template,appRoot);