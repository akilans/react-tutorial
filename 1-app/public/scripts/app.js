"use strict";

// Skill Application
// babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch

// Define users
var user = {
    name: "Akilan",
    age: 29,
    skills: []
    // Select the ID to populate HTML content

};var appRoot = document.getElementById("root");

// Add Skill function
var addSkill = function addSkill(e) {
    e.preventDefault();
    var skill = e.target.elements.skill.value;

    if (skill) {
        user.skills.push(skill);
        e.target.elements.skill.value = "";
        renderApp();
    }
};

// Select the random skill from the skills array
var selectSkill = function selectSkill() {
    var skillIndex = Math.floor(Math.random() * user.skills.length);
    var skill = user.skills[skillIndex];
    alert(skill);
};

// Remove all the skills 
var removeAllSkills = function removeAllSkills() {
    user.skills = [];
    renderApp();
};

// Render the application function
var renderApp = function renderApp() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Skill Application"
        ),
        React.createElement(
            "p",
            null,
            "Name : ",
            user.name,
            " "
        ),
        user.skills.length > 0 && React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: selectSkill },
                "Choose Skill to Improve"
            ),
            React.createElement(
                "button",
                { onClick: removeAllSkills },
                "Remove All"
            )
        ),
        React.createElement(
            "ol",
            null,
            user.skills.map(function (skill, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    skill
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: addSkill },
            React.createElement("input", { type: "text", name: "skill" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
