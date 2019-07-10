import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCounter, removeCounter} from './../store/action'

function CounterRedux(props) {
  console.log(props)
  return (
    <div>
     <h5> {props.name}</h5>
      Counter dari redux dengan angka {props.counter}
      <button onClick={() => props.addCounter(10)}>Tambah aku mas</button>
      <button onClick={() => props.removeCounter()}>Kurangi aku mas</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    name: state.name
  }
}

const mapDispatchToProps = {addCounter, removeCounter}

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux)
