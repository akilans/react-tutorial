class CounterApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count // getting count from default props
        },
        this.addCounter = this.addCounter.bind(this);
        this.minusCounter = this.minusCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    addCounter(){
        this.setState((prevState) =>{
            return{
                count: prevState.count + 1
            }
        })
    }

    minusCounter(){
        this.setState((prevState) =>{
            return{
                count: prevState.count - 1
            }
        })
    }

    resetCounter(){
        this.setState(() =>{
            return{
                count: 0
            }
        })
    }
    0
    render() {
        return (
            <div>
                <h1>Counter Appplication</h1>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.addCounter}>+1 Add</button>
                <button onClick={this.minusCounter}>-1 minus</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

// Defining default props
CounterApp.defaultProps = {
    count: 100
}

// overriding default props

ReactDOM.render(<CounterApp count={10} />, document.getElementById("root"));

