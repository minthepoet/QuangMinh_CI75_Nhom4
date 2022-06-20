import './App.css';
import Title from './Components/Title'
import Button from './Components/Button'
import Section from './Components/Section';

const App = () =>{
  return(
    <div>
      <Button title = "save"/>
      <Button title = "cancle"/>
      <Button title = "renting"/>
      <Button title = "buy"/>
      <Button title = "set auction"/>
      <Title text = "C#"/>
      <Title text = "C++"/>
      <Title text = "Javascript"/>
      <Title text = "Java"/>
      <Title text = "PHP"/>
      <Section content = "A Simple Component
React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component 
can be accessed by render() via this.props."/>
      <Section content = "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()."/>
      <Section content = "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation."/>
      <Section content = "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time."/>
    </div> 
  )
}

export default App;
