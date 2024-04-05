import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

import {
  TaskContainer,
  LeftPanel,
  TaskCreation,
  Heading,
  Label,
  CategoryItem,
  CategoryButton,
  BuutonContainer,
  Option,
  Select,
  Input,
  AddTaskButton,
  Tags,
  RightPanel,
  TaskList,
  NoTask,
} from './styledComponents'

import Task from './components/Task'
// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    inputTask: '',
    myTaskList: [],
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = v4()
    const bgColor = false

    if (taskName.length !== 0) {
      this.setState(prevState => ({
        myTaskList: [...prevState.myTaskList, {id, taskName, taskCategory}],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onChangeInputTask = event => this.setState({inputTask: event.target.value})

  onChangeSelectTag = event => this.setState({selectTag: event.target.value})

  onClickTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {inputTask, myTaskList, selectTag, activeTag} = this.state
    const filteredTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)
    return (
      <TaskContainer>
        <LeftPanel>
          <TaskCreation>
            <Heading>Create a task!</Heading>
            <Label htmlFor="textInput">Task</Label>
            <Input
              value={inputTask}
              id="textInput"
              onChange={this.onChangeInputTask}
              placeholder="Enter the task here"
            />
            <Label htmlFor="tagsList">Tags</Label>
            <Select
              id="tagsList"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(eachTag => (
                <Option value={eachTag.optionId}>{eachTag.displayText}</Option>
              ))}
            </Select>
          </TaskCreation>
          <AddTaskButton type="button" onClick={this.onClickAddButton}>
            Add Task
          </AddTaskButton>
        </LeftPanel>
        <RightPanel>
          <Tags>Tags</Tags>
          <BuutonContainer>
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId
              return (
                <CategoryItem>
                  <CategoryButton
                    type="button"
                    value={eachTag.optionId}
                    onClick={this.onClickTag}
                    isActive={isActive}
                  >
                    {eachTag.displayText}
                  </CategoryButton>
                </CategoryItem>
              )
            })}
          </BuutonContainer>
          <Tags>Tasks</Tags>
          <TaskList>
            {filteredTaskList.length === 0 ? (
              <NoTask>No Tasks Added Yet</NoTask>
            ) : (
              filteredTaskList.map(eachTask => (
                <Task key={eachTask.id} taskDetails={eachTask} />
              ))
            )}
          </TaskList>
        </RightPanel>
      </TaskContainer>
    )
  }
}

export default App
