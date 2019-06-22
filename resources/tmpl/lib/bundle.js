import { Component } from 'react'
import PropTypes from 'prop-types'

class AsyncLoadModule extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired
  }
  static defaultProps = {}

  state = {
    mod: null
  }

  componentWillMount = () => {
    this.load(this.props)
  }

  load = props => {
    this.setState({
      mod: null
    })

    Promise.resolve(props.load()).then(mod => {
      const modReal = mod.default ? mod.default : mod
      this.setState({
        mod: modReal
      })
    })
  }

  render = () => {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

export default AsyncLoadModule
