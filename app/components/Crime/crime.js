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
return (
<div className="Crime">
<div className = "Header"></div>


 <h2>Highlighted Incidents</h2>

<h2>
   <div className = "custom-select">
          
          
          <select name="district" id="woop" value={this.state.area}
            onChange={(e) => this.handleArea(e)} className="styleOne"
          >
            <option value="Wilshire" className="styleOne" key="Wilshire">Wilshire</option>
            <option value="Hollywood" key="Hollywood">Hollywood</option>
            <option value="Van Nuys" key="Van Nuys">Van Nuys</option>
            <option value="Olympic" key="Olympic">Olympic</option>
            <option value="Mission" key="Mission">Mission</option>
            <option value="West Valley" key="West Valley">West Valley</option>
            <option value="West LA" key="West LA">West LA</option>
            <option value="N Hollywood" key="N Hollywood">North Hollywood</option>
            <option value="Southeast" key="Southeast">Southeast LA</option>
            <option value="Northeast" key="Northeast">Northeast LA</option>
          </select>
          
          </div>
        </h2>



<div className="find-places">
{this.state.newArea && this.state.newArea.map((item) => {
console.log("item", item)
return (
  <div className="data">

      
     <p className="dating"><b>Date Occured:</b> {item.date_occ}</p>

       <p className="incidenting"><b>Incident:</b> {item.crm_cd_desc}</p>

     <p className="premising"><b>Premise:</b> {item.premis_desc}</p>

     <p className="omg"><b>Address:</b> {item.location}</p>

     
     <p className="cross"><b>Cross Street:</b> {item.cross_street}</p>

      <p><b>Age:</b> {item.vict_age}</p>

      <p><b>Sex:</b> {item.vict_sex}</p>

    
  
  </div>
)
})}

</div>
</div>

);

  }

}



export default Crime;


