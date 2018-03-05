import React, { Component } from 'react';
import Hooper from './images/hooper.jpg';
import Flag from './images/usa.png'
// importando css del componenete
import './Aside.css';

// Notas:
// no permite comentarios dentro del componente
// las etiquetas deben cerrarse incluso hr

class Aside extends Component {
  render() {
    return (
      <aside className="summary col-md-3">
        <table className="summary-table">
          <thead>
            <tr>
              <th colSpan={2}>Grace Murray Hooper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <img src={Hooper} alt="GraceHooper"></img>
                <p>Rear Admiral Grace M. Hopper, 1984</p>
              </td>
            </tr>
            <tr>
              <th>Nickname(s)</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>December 9, 1906</td>
            </tr>
            <tr>
              <th>Died</th>
              <td>January 1,1992(aged 85)</td>
            </tr>
            <tr>
              <th>Allegiance</th>
              <td><img src={Flag} alt="usa"></img>United States of America</td>
            </tr>
            <tr>
              <th>Service/branch</th>
              <td> United States Navy</td>
            </tr>
            <tr>
              <th>Years of service</th>
              <td>1943–1966, 1967–1971, 1972–1986</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>Rear admiral (lower half)</td>
            </tr>
          </tbody>
        </table>
        </aside>
  );
 }
}
export default Aside;
