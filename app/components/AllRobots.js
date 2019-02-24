import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux'
import Robot from './Robot'
import axios from 'axios'
import { fetchNewRobot } from '../redux'

class AllRobots extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      fuelType: 'electric',
      fuelLevel: 100.00,
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.fetchRobots()
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      alert('A robot was submitted: ' + this.state.name);
      // const res = await axios.post('/api/robots', this.state)
      this.props.fetchNewRobot(this.state)
    } catch (err) {
      console.error(err)
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        {(this.props.robots && this.props.robots.length)
          ? this.props.robots.map(robot =>
            <Robot key={robot.id} robot={robot} />
          )
          : `Where are the robots???`
        }



        <div id='container'>
          <div id='navbar'>
            <h3>Add A Robot!</h3>
          </div>
          <form onSubmit={this.handleSubmit}>


            <label htmlFor='name'>Name:</label>
            <input value={this.state.name} type='text' name='name' onChange={this.handleChange} />


            <div>
              <label htmlFor='fuelType'>
                Pick your fuel type:
          <select value={this.state.value} name='fuelType' onChange={this.handleChange}>
                  <option value="gas">Electric</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Gas</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor='fuelLevel'>What's your fuel level?</label>
              <input value={this.state.fuelLevel} type='number' name='fuelLevel' onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor='imageUrl'>What's your image URL?</label>
              <input value={this.state.imageUrl} type='text' name='imageUrl' onChange={this.handleChange} />
            </div>

            <button type='submit'>Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  robots: state.robots
})

const fakeNewRobot = {
  name: 'fake new robot',
  fuelType: 'electric',
  fuelLevel: 100.00,
  imageUrl: ''
}
const mapDispatchToProps = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots()),
  fetchNewRobot: (fakeNewRobot) => dispatch(fetchNewRobot(fakeNewRobot))
})

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllRobots))
export default connect(mapStateToProps, mapDispatchToProps)(AllRobots)
