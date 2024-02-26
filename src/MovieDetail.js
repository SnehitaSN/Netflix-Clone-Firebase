import React from 'react'
import NetflixOriginals from './NetflixOriginals'
import TopRated from './TopRated'
import NetflixDocumentaries from './NetflixDocumentaries'
import Action from './Action'
import Comedy from './Comedy'
import Horror from './Horror'

function MovieDetail() {
  return (
    <div>
        <NetflixOriginals/>
        <TopRated/>
        <NetflixDocumentaries/>
        <Action/>
        <Comedy/>
        <Horror/>
    </div>
  )
}

export default MovieDetail