// Toggle Example
// babel src/tryout/toggle.js --out-file public/scripts/app.js --presets=env,react --watch

let visible = false;

let toggleFunction = () =>{
    visible = !visible;
    renderApp();
}

let renderApp = () =>{
    let template = (
        <div>
            <button onClick={toggleFunction}>
                {visible ? "Hide" : "Show"}
            </button>
            {visible && (
                <p>Now you can see me!!!</p>
            )}
        </div>
    );

    ReactDOM.render(template,document.getElementById("root"));
}

renderApp();