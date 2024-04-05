import styled from 'styled-components'

export const NoTask = styled.p`
   font-size: 28px;
   text-align: center;
`
export const TaskList = styled.ul`
   display: flex;
   flex-direction: column;
   list-style-type: none;
`
export const Tags = styled.h1`
    font-size: 25px;
`

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: cneter;
`

export const AddTaskButton = styled.button`
    background-color: #f3aa4e;
    width: 100px;
    height: 40px;
    cursor: pointer;
    outline: none;
    color: #f8f8f8;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    align-self: center;
`
export const Option = styled.option``
export const Select = styled.select`
    width: 300px;
    height: 40px;
    border: none;
    outline: none;
    color:#475569;
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border: none;
    outline: none;
    color:#475569;
    font-size: 16px;
`

export const BuutonContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 500px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    outline: none;
    color: #f8f8f8;
    font-size: 12px;
    height: 30px;
    background-color: ${props =>
      props.isActive === true ? ' #f3aa4e' : 'transparent'};
    border: ${props =>
      props.isActive === true ? 'none' : '1px solid  #f3aa4e'};
    border-radius: 10px;
    padding: 6px;
`

export const CategoryItem = styled.li`
    list-style-type: none;

`

export const Label = styled.label`
    color: #f1f5f9;
    font-size: 17px;
    margin: 5px;
`

export const Heading = styled.h1`
    color: #f3aa4e;
    font-size: 30px;
`

export const TaskCreation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px;
`

export const TaskContainer = styled.div`
    background-color: #000000;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px;
    font-family: 'Roboto';
    color: #fff;
`
export const LeftPanel = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
    
`
