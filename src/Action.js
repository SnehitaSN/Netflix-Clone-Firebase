import React from 'react'
import Axios from "axios"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"



function Action() 
{
    const [data, setData] = React.useState([])

    const API_KEY = "b51f0638b8f73a05ed97b86ba8174ff8"
    const BASE_URL = "https://image.tmdb.org/t/p/original"

    const [info, setInfo] = React.useState("")

    React.useEffect(function()
    {
        Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`)
        .then(function(result)
        {
            setData(result.data.results)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }, [])

    function playTrailer(data)
    {
        console.log(data)
        movieTrailer(data.name)
        .then(function(i)
        {
            const id = new URLSearchParams(new URL(i).search).get("v")
            console.log(i)
            setInfo(id)
            
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }

    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 0,
        }
      }

  return (
    <div>
        <h2 style={{color: 'white', padding: 10, fontSize: 20, fontWeight: 900, marginLeft: 11}}>ACTION MOVIES</h2>
        <div id="box" style={{display: 'flex', overflow: 'auto'}}>
            {
                data.map(function(i)
                {
                    return (
                        <img onClick={()=>
                        {
                            return playTrailer(i)
                        }} src={BASE_URL+i.poster_path} height="200px" style={{margin: 10}}/>
                    )
                })
            }
        </div>
        {info && <Youtube videoId={info} opts={opts}/>}
    </div>
  )
}

export default Action