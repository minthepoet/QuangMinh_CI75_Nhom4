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
      <Title text = "C+"/>
      <Title text = "C++"/>
      <Title text = "Javascript"/>
      <Title text = "Java"/>
      <Title text = "PHP"/>
      <Section content = "A Simple Component
React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component 
can be accessed by render() via this.props." img="https://image-us.eva.vn/upload/4-2020/images/2020-10-13/image5-1602573283-593-width640height459.jpg"/>
      <Section content = "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). 
      When a component’s state data changes, the rendered markup will be updated by re-invoking render()." img = "https://sieupet.com/sites/default/files/nguon-goc-xuat-xu-cua-husky-768x512_0.jpg"/>
      <Section content = "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that 
      the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation." img = "https://tunglocpet.com/wp-content/uploads/2014/11/husky-06.jpg"/>
      <Section content = "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, 
      to convert the <textarea>’s value in real time." img = "https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div> 
  )
}

export default App;
