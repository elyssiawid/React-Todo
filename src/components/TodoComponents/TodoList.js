// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
    constructor(){super();}
    return (
    this.props.array.map((item) => {
        render() {
            <Todo task={item.task} />
            )
    }
    })
}