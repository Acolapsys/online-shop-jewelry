
import axios from 'axios'
import { setError, setIsLoading } from '../store/actions/generalAction';



const baseUrl = "http://localhost:3000/db.json"

const getData = () => {
  setIsLoading(true);
  return axios
        .get(baseUrl)
        .then((res) => {
          setIsLoading(false);
          return res.data
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
   
}

export default getData
