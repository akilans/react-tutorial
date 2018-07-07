// React Elements Example
// babel src/tryout/tryout.js --out-file public/scripts/app.js --presets=env,react --watch

let user ={
    name: "Akilan",
    age: 29,
    skills: ["PHP","PYTHON","RUBY","NODEJS","REACTJS"]
}

let template = (
    <div>
        <h1>User Details</h1>
        <p>Name : {user.name}</p>
        <p>Name : {user.age}</p>
        <ul>
        { user.skills.map((skill,index) => (
            <li key={index}>{skill}</li>
        ))}
        </ul>
    </div>
);

let appRoot = document.getElementById("root");

ReactDOM.render(template,appRoot);