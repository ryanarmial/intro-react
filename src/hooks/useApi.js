import axios from 'axios'
import {useState, useEffect} from 'react'

export default function useApi(url) {
  // loading, error, berhasil
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [data, setData] = useState({})

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(({data}) => {
        console.log(data)
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return [loading, error, data]
}