import {ListItem, Name, Category} from './styledComponents'

const Task = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails
  return (
    <ListItem>
      <Name>{taskName}</Name>
      <Category>{taskCategory}</Category>
    </ListItem>
  )
}
export default Task
