class ToggleApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
        this.toggleFunction = this.toggleFunction.bind(this);
    }

    toggleFunction(){
        this.setState((prevState)=>{
            return({
                toggle: !prevState.toggle
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleFunction}>
                    {this.state.toggle ? "Hide" : "Show"}
                </button>
                {this.state.toggle && (
                    <p>Now you can see me!!!</p>
                )}
            </div>
        )
    }


}

ReactDOM.render(<ToggleApp />, document.getElementById("root"));