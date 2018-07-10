"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillApp = function (_React$Component) {
    _inherits(SkillApp, _React$Component);

    function SkillApp(props) {
        _classCallCheck(this, SkillApp);

        var _this = _possibleConstructorReturn(this, (SkillApp.__proto__ || Object.getPrototypeOf(SkillApp)).call(this, props));

        _this.state = {
            skills: props.skills
        };
        _this.handleAction = _this.handleAction.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddSkill = _this.handleAddSkill.bind(_this);
        _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
        return _this;
    }

    _createClass(SkillApp, [{
        key: "handleAction",
        value: function handleAction() {
            var skillIndex = Math.floor(Math.random() * this.state.skills.length);
            var skill = this.state.skills[skillIndex];
            alert(skill);
        }
    }, {
        key: "handleRemoveOne",
        value: function handleRemoveOne(skillToRemove) {

            this.setState(function (prevState) {
                return {
                    skills: prevState.skills.filter(function (skill) {
                        return skillToRemove !== skill;
                    })
                };
            });
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {

            this.setState(function () {
                return { skills: [] };
            });
            /*
            this.setState(() => {
                return {
                    skills: []
                }
            })
            */
        }
    }, {
        key: "handleAddSkill",
        value: function handleAddSkill(skill) {
            if (!skill) {
                return "Enter valid skill";
            } else if (this.state.skills.indexOf(skill) > -1) {
                return skill + " already exists";
            }

            this.setState(function (prevState) {
                return { skills: prevState.skills.concat(skill) };
            });
            /*
            this.setState((prevState) => {
                return {
                    skills: prevState.skills.concat(skill)
                }
            })
            */
        }
    }, {
        key: "render",
        value: function render() {
            var app_name = "Skill Application";
            var action_name = "Improve your skills";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { app_name: app_name }),
                React.createElement(Actions, {
                    action_name: action_name,
                    handleAction: this.handleAction,
                    hasSkills: this.state.skills.length > 0
                }),
                React.createElement(Options, {
                    skills: this.state.skills,
                    handleRemoveAll: this.handleRemoveAll,
                    handleRemoveOne: this.handleRemoveOne,
                    hasSkills: this.state.skills.length > 0
                }),
                React.createElement(AddSkills, { handleAddSkill: this.handleAddSkill })
            );
        }
    }]);

    return SkillApp;
}(React.Component);

// Stateless component. So class based component not needed


var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.app_name
        )
    );
};

// Stateless component. So class based component not needed
var Actions = function Actions(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: !props.hasSkills,
                onClick: props.handleAction },
            props.action_name
        )
    );
};

// Stateless component. So class based component not needed
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: !props.hasSkills,
                onClick: props.handleRemoveAll },
            "Remove All"
        ),
        props.skills.map(function (skill, index) {
            return React.createElement(Option, {
                key: index,
                skill: skill,
                handleRemoveOne: props.handleRemoveOne
            });
        })
    );
};

// Stateless component. So class based component not needed
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            props.skill
        ),
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleRemoveOne(props.skill);
                } },
            "Remove"
        )
    );
};

// Stateful component. So class based component needed

var AddSkills = function (_React$Component2) {
    _inherits(AddSkills, _React$Component2);

    function AddSkills(props) {
        _classCallCheck(this, AddSkills);

        var _this2 = _possibleConstructorReturn(this, (AddSkills.__proto__ || Object.getPrototypeOf(AddSkills)).call(this, props));

        _this2.state = {
            error: ""
        };
        _this2.handleSubmitEvent = _this2.handleSubmitEvent.bind(_this2);
        return _this2;
    }

    _createClass(AddSkills, [{
        key: "handleSubmitEvent",
        value: function handleSubmitEvent(e) {
            e.preventDefault();

            var skill = e.target.elements.skill.value.trim();
            var error = this.props.handleAddSkill(skill);

            if (error) {
                this.setState(function () {
                    return { error: error };
                });
                /*
                this.setState(() => {
                    return {
                        error: error
                    }
                })
                */
            } else {
                this.setState(function () {
                    return { error: "" };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmitEvent },
                    React.createElement("input", { type: "text", name: "skill" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Add"
                    )
                )
            );
        }
    }]);

    return AddSkills;
}(React.Component);

// Setting default skills in props


SkillApp.defaultProps = {
    skills: []

    // overriding defaulr props with values
};ReactDOM.render(React.createElement(SkillApp, { skills: ["php", "python"] }), document.getElementById("root"));
