import React, { useState, useEffect , Component} from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";
import PropTypes from 'prop-types'

class JokeList extends React.Component{
  //set default props
  static defaultProps ={
    numJokesToGet:10
  }

  //props
  constructor(props){
    super(props)
    this.state = {
      jokes:[]
    }
    //use bind to remember this context
    this.generateNewJokes = this.generateNewJokes.bind(this);
    this.resetVotes = this.resetVotes.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.vote = this.vote.bind(this);
  }

  componentDidMount() {
    //getJokes from API if jokes state is less than the required
      if (this.state.jokes.length < this.props.numJokesToGet) {
        this.getJokes();
      }
  }

  async getJokes() {
    let jokes = this.state.jokes;
    let jokeVotes = JSON.parse(
      window.localStorage.getItem("jokeVotes") || "{}"
    )
    let seenJokes = new Set(jokes.map(j => j.id));

    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" }
      });
      let { status, ...joke } = res.data;

      if (!seenJokes.has(joke.id)) {
        seenJokes.add(joke.id);
        jokeVotes[joke.id] = jokeVotes[joke.id] || 0;
        jokes.push({ ...joke, votes: jokeVotes[joke.id], locked: false });
      } else {
        console.log("duplicate found!");
      }
    }
    this.setState({jokes})
  }

  generateNewJokes() {
    this.setState(st => ({ jokes: st.jokes.filter(j => j.locked)}));
  }

  resetVotes() {
    window.localStorage.setItem("jokeVotes", "{}");
    this.setState(st => ({
      jokes: st.jokes.map(joke => ({ ...joke, votes: 0 }))
    }));
  }

  /* change vote for this id by delta (+1 or -1) */
  vote(id, delta) {
    let jokeVotes = JSON.parse(window.localStorage.getItem("jokeVotes"));
    jokeVotes[id] = (jokeVotes[id] || 0) + delta;
    window.localStorage.setItem("jokeVotes", JSON.stringify(jokeVotes));
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    }));
  }

  toggleLock(id) {
    this.setState(st => ({
      jokes: st.jokes.map(j => (j.id === id ? { ...j, locked: !j.locked } : j))
    }));
  }

  /* render: either loading spinner or list of sorted jokes. */

  render() {
    let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
    let allLocked =
      sortedJokes.filter(j => j.locked).length === this.props.numJokesToGet;

    return (
      <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={this.generateNewJokes}
          disabled={allLocked}
        >
          Get New Jokes
        </button>
        <button className="JokeList-getmore" onClick={this.resetVotes}>
          Reset Vote Counts
        </button>

        {sortedJokes.map(j => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={this.vote}
            locked={j.locked}
            toggleLock={this.toggleLock}
          />
        ))}

        {sortedJokes.length < this.props.numJokesToGet ? (
          <div className="loading">
            <i className="fas fa-4x fa-spinner fa-spin" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default JokeList;
