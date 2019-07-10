import React, { Component } from 'react'
import {connect} from 'react-redux'
import {hitSwapi} from './../store/action'

class ApiRedux extends Component {
  componentDidMount() {
    this.props.hitSwapi()
  }
  

  render() {
    return (
      <div>
        <h2 className={
          this.props.swapiLoading ? 'loading' : 'success'
        }>state loading</h2>
        { this.props.swapiLoading && <h1>Tunggu Aku Mas</h1>}
        {
          !this.props.swapiLoading && this.props.swapiData
          && <div>{JSON.stringify(this.props.swapiData)}</div>
        }
        {
          !this.props.swapiLoading && this.props.swapiError
          && <div>{JSON.stringify(this.props.swapiError)}</div>
        }

        {/* {
          this.props.swapiLoading
            ? <h1>Tunggu Aku Mas</h1>
            : this.props.swapiData
               ? <div>{JSON.stringify(this.props.swapiData)}</div>  
               : <div>{JSON.stringify(this.props.swapiError)}</div>
        } */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    swapiData: state.swapi.data,
    swapiError: state.swapi.error,
    swapiLoading: state.swapi.loading
  }
}
 
const mapDispatchToProps = {
  hitSwapi
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiRedux)
