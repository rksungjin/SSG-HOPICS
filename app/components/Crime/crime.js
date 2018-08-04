import React, { Component } from 'react';
import './crime.css';
import axios from "axios";


class Crime extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data:"",

        // Date Reported //

     

       // Area //
      area:"",
      newArea:"",
    };

  }

  getTheData() {
    axios.get("https://data.lacity.org/resource/djbj-9vsp.json")
    .then((res) => {
      console.log(res)
      this.setState({
        data: res.data,
      })
    })
    .catch(error => {
      console.log(error.response);
    });
  }

 


componentWillMount() {
  this.getTheData();
}

      handleArea = (e) => {

        const where = this.state.data
        .filter((item) => {
          return item.area_name && item.area_name.includes(e.target.value) 
        })

        
        this.setState({
          area: e.target.value,
          newArea: where,
          });
        
        }






  /*this.setState({
    report: e.target.value,
    startDate: newDate},
    () => {
      console.log(this.state.value ,"hello");
    });
*/



/*this.setState({
[startDate]:value,
date_rptd:startDate
});


}
*/
  /*const newData = this.state.data.filter((item) => {

    return item.area_name && item.crm_cd && item.premis_desc && item.location.includes(e.target.value)
  })

  this.setState({
    dataSet: newData,
    userInput: e.target.value
  })
  }
  */

  render() {
<div className="Crime">
<div className = "Header"></div>
<h2>Select a location</h2>

          
          <select name="Place" id="place" value={this.props.place}
            onChange={(e) => this.handleArea.bind(this,e, "place")} className="styleOne"
          >
            <option value="Wilshire" className="styleOne">Wilshire</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Van Nuys">Van Nuys</option>
            <option value="Olympic">Olympic</option>
            <option value="Mission">Mission</option>
            <option value="West Valley">West Valley</option>
            <option value="West LA">West LA</option>
            <option value="Central">Central LA</option>
            <option value="N Hollywood">North Hollywood</option>
            <option value="Southeast">Southeast LA</option>
            <option value="Northeast">Northeast LA</option>
            <option value="77th Street">77th Street</option>
          
          
{this.props.newArea.map(function(option, value) {

  return (<option key={value} value ={option}>{option}</option>)
})}
</select>

</div>

  }}


export default Crime;



