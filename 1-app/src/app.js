class SkillApp extends React.Component {
    render() {
        const app_name = "Skill Application";
        const action_name = "Improve your skills";
        const skills = ["PHP", "PYTHON", "RUBY"];

        return (
            <div>
                <Header app_name={app_name} />
                <Actions action_name={action_name} />
                <Options skills={skills} />
                <AddSkills />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.app_name}</h1>
            </div>
        );
    }
}


class Actions extends React.Component {

    handleAction() {
        alert("Handle Action")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAction}>{this.props.action_name}</button>
            </div>
        );
    }
}


class Options extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.skills);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.skills.map((skill, index) => <Option key={index} skill={skill} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.skill}</p>
            </div>
        );
    }
}


class AddSkills extends React.Component {

    handleSubmitEvent(e) {
        e.preventDefault();

        let skill = e.target.elements.skill.value.trim();

        if (skill) {
            alert(skill);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitEvent}>
                    <input type="text" name="skill" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<SkillApp />, document.getElementById("root"));