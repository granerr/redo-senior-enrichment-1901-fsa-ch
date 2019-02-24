import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// import { fetchNewRobot } from '../redux'

class NewRobot extends React.Component {
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

  // componentDidMount() {
  //   this.props.fetchNewRobot()
  // }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      alert('A robot was submitted: ' + this.state.name);
      // fetchNewRobot(this.state)
      const res = await axios.post('/api/robots', this.state)
    } catch (err) {
      next(err)
    }
  }

  // async handleSubmit(event) {
  //   try {
  //     event.preventDefault();
  //     alert('A robot was submitted: ' + this.state.name);
  //     const res = await axios.post('/api/robots', this.state)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  handleChange(event) {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
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
    )
  }
}

// const mapStateToProps = (state) => {
//   return ({
//     // robots: state.robots
//   })
// }

// const mapDispatchToProps = (dispatch) => ({
//   // fetchNewProject: (project) => dispatch(fetchNewProject(project))
// })

const ConnectedNewRobot = connect()(NewRobot)

export default ConnectedNewRobot;
