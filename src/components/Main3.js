import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logojd from '../jd.png';
import bkgrd from '../jd222.jpg';
let def;
class Main3 extends React.Component{
   constructor(props){
    super();
    def = props.translation;
    this.state = {flag : 0,currValue : props.translation};
    console.log(this.state.currValue);
  }

  handleSubmit(){}

  handleChange(event){
    let currNew = event.target.value;
    this.setState(prevState =>{
      if(currNew === def)
      return {
        flag: 1,
        currValue : currNew
      }
      else {
        return {
          flag :0,
          currValue :currNew
        }
      }
    })
  }

  render(){
    let ll = (<div>
      <p> {this.props.word}
      <input type = "text" id = "inp" value = {this.props.translation} onChange = {() =>this.handleChange(this.value)}/>
      </p>
    </div>);
    if(this.state.flag === 1){
      ll.push(<input type="submit" value="Submit" className = "button button1" />);
    }
      return ll;
  }
}
export default Main3
