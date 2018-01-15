import React from 'react';
import './index.css';

class App extends React.Component {
  constructor(props) {
		super(props)
    this.state = {
      lumens: '450',
      kWh: '0.06077',
      hours: '5',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

    var inc_wattage = (this.state.lumens * 0.0625).toFixed(1);
    var hal_wattage = (this.state.lumens * 0.0450).toFixed(1);
    var cfl_wattage = (this.state.lumens * 0.0146).toFixed(1);
    var led_wattage =(this.state.lumens * 0.0125).toFixed(1);

    var hoursYear = 365 * this.state.hours;

    return (
      <div id="myCalculator">
              <main>
                  <section class="inc">
                      <div>
                          <h4>Incendenscent</h4>
                          <p>{inc_wattage}</p>
                          <p>{(((inc_wattage * hoursYear) / 1000) * (this.state.kWh / 100)).toFixed(2)}</p>
                      </div>
                  </section>
                  <section class="hal">
                      <div>
                          <h4>Halogen</h4>
                          <p>{hal_wattage}</p>
                          <p>{(((hal_wattage * hoursYear) / 1000) * (this.state.kWh / 100)).toFixed(2)}</p>
                      </div>
                  </section>
                  <section class="cfl">
                      <div>
                          <h4>CFL</h4>
                          <p>{cfl_wattage}</p>
                          <p>{(((cfl_wattage * hoursYear) / 1000) * (this.state.kWh / 100)).toFixed(2)}</p>
                      </div>
                  </section>
                  <section class="led">
                      <div>
                          <h4>LED</h4>
                          <p>{led_wattage}</p>
                          <p>{(((led_wattage * hoursYear) / 1000) * (this.state.kWh / 100)).toFixed(2)}</p>
                      </div>
                  </section>
              </main>

              <form>
                  <div>
                      <h4>Lumens</h4>
                      <p>Brightness <br />of bulb</p>
                      <select name="lumens" value={this.state.lumens} onChange={this.handleChange}>
                        <option value="200">200</option>
                        <option value="450">450</option>
                        <option value="800">800</option>
                        <option value="1100">1100</option>
                        <option value="1600">1600</option>
                        <option value="2400">2400</option>
                        <option value="3100">3100</option>
                        <option value="4000">4000</option>
                      </select>
                  </div>
                  <div>
                      <h4>kWh</h4>
                      <p>Kilowatt-<br />hour cost (€)</p>
                      <input name="kWh" type="number" step="0.00001" value={this.state.kWh} onChange={this.handleChange} />
                  </div>
                  <div>
                      <h4>Hours</h4>
                      <p>Usage <br />per day</p>
                      <input name="hours" type="number" min="0" max="24" value={this.state.hours} onChange={this.handleChange} />
                  </div>
              </form>
          </div>
    );
  }
}

export default App;
