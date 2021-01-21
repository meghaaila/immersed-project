import {Component} from "react";
import "./Container.scss";
import AreaChart from "../AreaChart/AreaChart";
import axios from "axios";
import Filters from "../Filters/Filters"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Container extends Component {
  constructor(props){
    super(props);
    this.state={
      data: {},
      options: [
        {value: 'nov2020', label: '11/2020 - 12/2020'},
        {value: 'dec2020', label: '12/2020 - 01/2021'},
        {value: 'jan2021', label: '01/2021-01/2021'}],
      ind : 0,
      createRolesToggle: false
    };
    this.getData =  this.getData.bind(this);
  }
  async getData() {
    await axios.get('./data/data.json')
    .then((res)=> {
      this.setState({data: res.data.chartData[this.state.ind]})

    }).catch((err)=>{
      console.log(err);
    })
 }

  componentDidMount(){
     this.getData();
  }
  render(){
    return (
      <div id="container">
        <div style={{padding: "10px", height: "50px"}}>
          <button className="primary">Teams</button>
          <button className="secondary">Self</button>
          <div style={{float:'right'}}>
              <button className="primary" onClick={() => this.setState({ createRolesToggle : true})}>Create roles</button>
          </div>
        </div>
        <Filters options = {this.state.options} onClickCallBack={(val) =>  this.setState({ind: 1}, () => this.getData()) }/>
        <div className="chart-areas">
           <div className="article">{this.state.data.length >0 && <AreaChart data={this.state.data} type="area" />}</div>
          <div className="article">{this.state.data.length >0 && <AreaChart data={this.state.data} type="bar"/>}</div>
        </div>
        {this.createRolesToggle &&  <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>}
      </div>
    );
  }

}
