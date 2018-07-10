class SkillApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: props.skills
        };
        this.handleAction = this.handleAction.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);
    }

    handleAction() {
        let skillIndex = Math.floor(Math.random() * this.state.skills.length);
        let skill = this.state.skills[skillIndex];
        alert(skill);
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                skills: []
            }
        })
    }

    handleAddSkill(skill) {
        if (!skill) {
            return "Enter valid skill";
        } else if (this.state.skills.indexOf(skill) > -1) {
            return `${skill} already exists`;
        }

        this.setState((prevState) => {
            return {
                skills: prevState.skills.concat(skill)
            }
        })

    }

    render() {
        const app_name = "Skill Application";
        const action_name = "Improve your skills";

        return (
            <div>
                <Header app_name={app_name} />
                <Actions
                    action_name={action_name}
                    handleAction={this.handleAction}
                    hasSkills={this.state.skills.length > 0}
                />
                <Options
                    skills={this.state.skills}
                    handleRemoveAll={this.handleRemoveAll}
                    hasSkills={this.state.skills.length > 0}
                />
                <AddSkills handleAddSkill={this.handleAddSkill} />
            </div>
        );
    }
}

// Stateless component. So class based component not needed
const Header = (props) => {
    return (
        <div>
            <h1>{props.app_name}</h1>
        </div>
    );
}

// Stateless component. So class based component not needed
const Actions = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasSkills}
                onClick={props.handleAction}>
                {props.action_name}
            </button>
        </div>
    );
}

// Stateless component. So class based component not needed
const Options = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasSkills}
                onClick={props.handleRemoveAll}>Remove All</button>
            {props.skills.map((skill, index) => <Option key={index} skill={skill} />)}
        </div>
    );
}

// Stateless component. So class based component not needed
const Option = (props) => {
    return (
        <div>
            <p>{props.skill}</p>
        </div>
    );
}

// Stateful component. So class based component needed
class AddSkills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    }

    handleSubmitEvent(e) {
        e.preventDefault();

        let skill = e.target.elements.skill.value.trim();
        let error = this.props.handleAddSkill(skill);

        if (error) {
            this.setState(() => {
                return {
                    error: error
                }
            })
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.handleSubmitEvent}>
                    <input type="text" name="skill" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

// Setting default skills in props
SkillApp.defaultProps = {
    skills: []
}

// overriding defaulr props with values
ReactDOM.render(<SkillApp skills={["php","python"]}/>, document.getElementById("root"));