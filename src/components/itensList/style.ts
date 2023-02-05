import styled from "styled-components";

type ContainerProps = {
  done:boolean
}
export const Container = styled.div(({done}:ContainerProps)=>(
` 
  display: flex;
  align-items: center;
  background-color: #20212c;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;

  input{
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  label{
    color: #fff;
    text-decoration:${done ? 'line-through' : 'initial'};
  }
`
));
