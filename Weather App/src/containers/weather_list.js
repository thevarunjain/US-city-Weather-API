import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Sparklines,SparklinesLine} from "react-sparklines";

class weather_list extends Component {
    renderCity(cityData){
        const temps = cityData.list.map(w =>w.main.temp)
       return (
        <tr key = {cityData.city.name}>
            <td>{cityData.city.name}</td>
            <td>
                <Sparklines height={120} width={180} data={temps}>
                    <SparklinesLine color = "red" />
                </Sparklines>/
            </td>

        </tr>
       );
    }
  render() {
    return (
      <div>
        <table className="table table-hover">
        <thead>
<tr> 
<th> city</th>
<th> t</th>
<th> p</th>
<th> h</th>
</tr>
</thead>
<tbody>
{this.props.weather.map(this.renderCity)}
</tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({weather}){
    return {weather}
}
export default connect(mapStateToProps)(weather_list);

