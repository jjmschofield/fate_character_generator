import React, { Component } from 'react'
import '../App.css'
import './CharacterForm.css'
import '../components/CharacterDetail.css'
import { withRouter } from 'react-router-dom'

class CharacterForm extends Component {

  constructor(props){
    super(props)
    this.state={
      id:'',
      name:'',
      aspects: {
        highConcept:'',
        trouble:'',
        relationship: '',
        aspectOne: '',
        aspectTwo: ''
      },
      approaches: {
        careful: '',
        clever: '',
        flashy: '',
        forceful: '',
        quick: '',
        sneaky: ''
      },
      stunts: [''],
      consequences: {
        mild: '',
        moderate: '',
        severe: ''
      },
      refresh : 3
    }
  }

  handleNameChange = (event) => {
    this.setState({name:event.target.value})
  }

  handleHighConceptChange = (event) => {
    const aspects = this.state.aspects
    aspects.highConcept = event.target.value
    this.setState({aspects : aspects})
  }

  handleTroubleChange = (event) => {
    const aspects = this.state.aspects
    aspects.trouble = event.target.value
    this.setState({aspects : aspects})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const id = Date.now()
    const name = this.state.name.trim()
    const highConcept = this.state.aspects.highConcept.trim()
    const trouble = this.state.aspects.trouble.trim()

    if(!name || !highConcept || !trouble){
      return
    }

    this.props.onCharacterCreated({
      id:id,
      name:name,
      aspects: {
        highConcept:highConcept,
        trouble:trouble,
        relationship: '',
        aspectOne: '',
        aspectTwo: ''
      },
      approaches: {
        careful: '',
        clever: '',
        flashy: '',
        forceful: '',
        quick: '',
        sneaky: ''
      },
      stunts: [],
      consequences: {
        mild: '',
        moderate: '',
        severe: ''
      },
      refresh : 3
    })

    this.setState({
      id:'',
      name:'',
      aspects: {
        highConcept:'',
        trouble:''
      },
      approaches: {
        careful: '',
        clever: '',
        flashy: '',
        forceful: '',
        quick: '',
        sneaky: ''
      },
      stunts: [],
      consequences: {
        mild: '',
        moderate: '',
        severe: ''
      },
      refresh : 3
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <main>
        <h1>Add a New Character</h1>
        <form className="character-sheet character-sheet-text" onSubmit={this.handleSubmit}>
          <section className="character-stats character-form-section">
            <input 
              className="character-name character-sheet-item-primary character-name-input"
              type="text" 
              id="characterName" 
              placeholder="Character Name" 
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
            <label htmlFor="refresh" className="refresh-form-header character-sheet-text">Refesh:</label>
            <input
              className="character-refresh-input"
              type="text"
              id="refresh"
            />
          </section>
          <label htmlFor="characterConcept">High Concept</label>
            <input 
              type="text" 
              id="characterConcept" 
              placeholder="Make sure they sound banging!" 
              value={this.state.aspects.highConcept}
              onChange={this.handleHighConceptChange}
              required
            />  
          <label htmlFor="characterTrouble">Trouble</label>
            <input 
              type="text" 
              id="characterTrouble" 
              placeholder="Make it dark and mysterious" 
              value={this.state.aspects.trouble}
              onChange={this.handleTroubleChange}
              required
            />
          <input className="primary-button" type="submit" value="Add Character"/>
        </form>
      </main>
    )
  }
}

export default withRouter(CharacterForm)