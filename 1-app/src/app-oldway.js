// Skill Application
// babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch

// Define users
let user = {
    name: "Akilan",
    age: 29,
    skills: []
}
// Select the ID to populate HTML content

let appRoot = document.getElementById("root");

// Add Skill function
let addSkill = (e) =>{
    e.preventDefault();
    let skill = e.target.elements.skill.value;

    if(skill){
        user.skills.push(skill);
        e.target.elements.skill.value = "";
        renderApp();
    }
}

// Select the random skill from the skills array
let selectSkill = () =>{
    let skillIndex = Math.floor(Math.random() * user.skills.length);
    let skill = user.skills[skillIndex];
    alert(skill);
}

// Remove all the skills 
let removeAllSkills = () =>{
    user.skills = [];
    renderApp();
}

// Render the application function
let renderApp = () => {

    let template = (
        <div>   
            <h1>Skill Application</h1>
            <p>Name : {user.name} </p>
            {user.skills.length > 0 && (
                <div>
                    <button onClick={selectSkill}>Choose Skill to Improve</button>
                    <button onClick={removeAllSkills}>Remove All</button>
                </div>
            )}
            <ol>
                {user.skills.map((skill,index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ol>
            <form onSubmit={addSkill}>
                <input type="text" name="skill" />
                <button type="submit">Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();