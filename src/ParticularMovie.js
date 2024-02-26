import React from 'react'
import Axios from "axios"
import "./App.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

function ParticularMovie() 
{
    const API_KEY = "b51f0638b8f73a05ed97b86ba8174ff8"
    const BASE_URL = "https://image.tmdb.org/t/p/original"

    const [data, setData] = React.useState([])

    React.useEffect(function()
    {
        Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`)
        .then(function(result)
        {
            console.log(result.data.results)
            setData([result.data.results[Math.floor(Math.random() * result.data.results.length)]])
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
          width: "99%",
          playerVars: {
          autoplay: 0,
        }
      }

      const [info, setInfo] = React.useState("")



  return (
    <div>
        {
            data.map(function(i)
            {
                console.log(i)
                return (
                    <div style={{display: 'flex'}}>
                        <div class="card" style={{width: "98%", height: 950, margin: 10, border: "none"}}>
                            <img src={BASE_URL + i.poster_path} onClick={()=>
                                {
                                    return playTrailer(i)
                                }} height={950} class="card-img-top" alt="..." />
                        </div>
                        <div>
                        </div>
                    </div>
            )
            })
        }
         {info && <Youtube videoId={info} opts={opts}/>}
    </div>
  )
}

export default ParticularMovie