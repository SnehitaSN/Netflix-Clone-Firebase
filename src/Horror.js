import React from 'react'
import Axios from "axios"



function Horror() 
{
    const [data, setData] = React.useState([])

    const API_KEY = "b51f0638b8f73a05ed97b86ba8174ff8"
    const BASE_URL = "https://image.tmdb.org/t/p/original"


    React.useEffect(function()
    {
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`)
        .then(function(result)
        {
            setData(result.data.results)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }, [])


  return (
    <div>
        <h2 style={{color: 'white', padding: 10, fontSize: 20, fontWeight: 900, marginLeft: 11}}>HORROR MOVIES</h2>
        <div id="box" style={{display: 'flex', overflow: 'auto'}}>
            {
                data.map(function(i)
                {
                    return (
                        <img src={BASE_URL+i.poster_path} height="200px" style={{margin: 10}}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Horror