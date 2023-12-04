import React, { Component } from 'react'
import { MovieData } from '../shared/ListofMovies.js'
import MoviePre from './MoviePre.js'
import Intro from './Intro/Intro.js'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            movieFromMain: MovieData
        }
    }
        render() {
            return (
                <div>
                    <Intro/>
                    <MoviePre moviesParams={this.state.movieFromMain} />
                </div>
            );
        }
    }