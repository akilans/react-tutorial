// Counter Example
// babel src/tryout/counter.js --out-file public/scripts/app.js --presets=env,react --watch

let count = 0;
let appRoot = document.getElementById("root");

let addCounter = () => {
    count++;
    renderApp();
}

let minusCounter = () => {
    count--;
    renderApp();
}

let resetCounter = () => { 
    count = 0;
    renderApp();
}

let renderApp = () =>{
    let template = (
        <div>
            <h1>Count : {count} </h1>
            <button onClick={addCounter}>+1 Add</button>
            <button onClick={minusCounter}>-1 minus</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );

    ReactDOM.render(template,appRoot)
}

renderApp();