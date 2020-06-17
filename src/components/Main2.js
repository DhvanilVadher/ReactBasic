import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logojd from '../jd.png';
import bkgrd from '../jd222.jpg';
import Main3 from './Main3'
let ENUS = [{id : "1" ,word:"color",translation:"colour"}];
let ENCAN = [{id: "1", word:'can_of_soda', translation : "can_of_pop"}];
let FRCAN = [{id: "1", word:"yes", translation : "yes"}];
let flag = 0;
let arrayList = [];
class Main2 extends React.Component {
  constructor(){
    super()
    this.state = { value: "En-Us" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    //alert("Your favorite flavor is: " + this.state.value);
  }
  handleChange = event => {
    this.setState({ value: event.target.value });

  };
  render() {
    arrayList = [];
      let sectionStyle = {
        marginLeft : 10,
        marginTop : 10
      };
      if(this.state.value === "En-Us"){
        arrayList = [];
        arrayList = ENUS.map(
          function(obj){
            return <Main3 key = {obj.id} word = {obj.word} translation = {obj.translation} />
          }
        );
      }
      else if(this.state.value == "En-Ca"){
        arrayList = [];
        arrayList = ENCAN.map(
          function(obj){
            return <Main3 key = {obj.id} word = {obj.word} translation  = {obj.translation} />
          }
        );
      }
      arrayList.unshift(<form onSubmit={this.handleSubmit} className = "center">
          <select value={this.state.value} onChange={this.handleChange} style = {{backgroundColor: 'rgba(52, 52, 52, 0.2)'}} className = "selected-option">
            <option value="En-Us" className = "selection">English - US</option>
            <option value="En-Ca" className = "selection">English - Canada</option>
            <option value="Ca-Fr" className = "selection">English - Franch</option>
          </select>
        <input type="submit" value="Submit" className = "button button1" />
      </form>);
      return arrayList;
  }
}
export default Main2
