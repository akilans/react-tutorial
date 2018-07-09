"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillApp = function (_React$Component) {
    _inherits(SkillApp, _React$Component);

    function SkillApp() {
        _classCallCheck(this, SkillApp);

        return _possibleConstructorReturn(this, (SkillApp.__proto__ || Object.getPrototypeOf(SkillApp)).apply(this, arguments));
    }

    _createClass(SkillApp, [{
        key: "render",
        value: function render() {
            var app_name = "Skill Application";
            var action_name = "Improve your skills";
            var skills = ["PHP", "PYTHON", "RUBY"];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { app_name: app_name }),
                React.createElement(Actions, { action_name: action_name }),
                React.createElement(Options, { skills: skills }),
                React.createElement(AddSkills, null)
            );
        }
    }]);

    return SkillApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.app_name
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Actions = function (_React$Component3) {
    _inherits(Actions, _React$Component3);

    function Actions() {
        _classCallCheck(this, Actions);

        return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
    }

    _createClass(Actions, [{
        key: "handleAction",
        value: function handleAction() {
            alert("Handle Action");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleAction },
                    this.props.action_name
                )
            );
        }
    }]);

    return Actions;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            console.log(this.props.skills);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleRemoveAll },
                    "Remove All"
                ),
                this.props.skills.map(function (skill, index) {
                    return React.createElement(Option, { key: index, skill: skill });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.props.skill
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddSkills = function (_React$Component6) {
    _inherits(AddSkills, _React$Component6);

    function AddSkills() {
        _classCallCheck(this, AddSkills);

        return _possibleConstructorReturn(this, (AddSkills.__proto__ || Object.getPrototypeOf(AddSkills)).apply(this, arguments));
    }

    _createClass(AddSkills, [{
        key: "handleSubmitEvent",
        value: function handleSubmitEvent(e) {
            e.preventDefault();

            var skill = e.target.elements.skill.value.trim();

            if (skill) {
                alert(skill);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
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

ReactDOM.render(React.createElement(SkillApp, null), document.getElementById("root"));
