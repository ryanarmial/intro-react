import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


function useApi() {
  // loading, error, berhasil
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [data, setData] = useState({})
}


function CounterHooks(props) {
  const [counter, setCounter] = useState(1)
  const [name, setName] = useState('Kosasih')
  const [swapi, setSwapi] = useState([])
  
  // cara ke dua 
  // const [state, setState] = useState({
  //   counter: 0,
  //   name: 'kosasih'
  // })

  useEffect(() => {
    console.log('trigger ga nich?')
    axios.get(`https://swapi.co/api/people/${counter}`)
      .then(({data}) => {
        console.log(data)
        setSwapi(data)
      })
  }, [counter])

  return (
    <div>
      <h3>Jumlah Aku adalah {counter}</h3>

      <h4>Nama saya {name}</h4>

      <button onClick={() => setCounter(counter + 1)}>Tambahkan aku mas</button>
    
      <h3>I am your father 🎅🏿</h3>

      {JSON.stringify(swapi)}
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(CounterHooks)

