import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import useApi from './../hooks/useApi'

function CounterHooks() {
  const [counter, setCounter] = useState(1)
  const [name, setName] = useState('Kosasih')
  const [loadingSwapi, errorSwapi, swapi] = useApi(`https://swapi.co/api/people/${counter}`)
  
  return (
    <div>
      <h3>Jumlah Aku adalah {counter}</h3>

      <h4>Nama saya {name}</h4>

      <button onClick={() => setCounter(counter + 1)}>Tambahkan aku mas</button>
    
      <h3>I am your father 🎅🏿</h3>

      {loadingSwapi && 'Tahan dlu mas lagi di proses'}

      {!loadingSwapi && swapi && <div>{JSON.stringify(swapi)}</div> }

      {!loadingSwapi && errorSwapi && <div>{JSON.stringify(errorSwapi)}</div>}

    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(CounterHooks)

