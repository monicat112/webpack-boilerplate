const todo = {
    id: 'ninerniner',
    text: 'Go to lunch',
    completed: false,
    colorCode: 'pink'
}

const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`)
}

printTodo(todo)

