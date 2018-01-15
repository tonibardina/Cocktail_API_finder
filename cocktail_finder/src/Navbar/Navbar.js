import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { categoryList, ingredients } from '../API/ApiCalls'

import './Navbar.style.css'

class NavbarComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      ingredients: []
    }
  }

  componentWillMount () {
    categoryList.then(data => {
      data.data.drinks.map(categories => {
        this.setState({
          categories: [...this.state.categories, categories.strCategory]
        })
      })
    })
    ingredients.then(data => {
      data.data.drinks.map(ingredients => {
        this.setState({
          ingredients: [...this.state.ingredients, ingredients.strIngredient1]
        })
      })
    })
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#brand'>The Cocktail Finder</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title='Ingredients' id='basic-nav-dropdown'>
              <div className={'ingredients-container'} >
                {
                  this.state.ingredients.map(category => {
                    let itemList = category
                    return (
                      <button className={'category-btn'} key={Math.random() * 1000}>{ itemList }</button>
                    )
                  })
                }
              </div>
            </NavDropdown>
            <NavDropdown eventKey={3} title='Category' id='basic-nav-dropdown'>
              <div className={'category-container'} >
                {
                  this.state.categories.map(category => {
                    let itemList = category
                    return (
                      <button className={'category-btn'} key={Math.random() * 1000}>{ itemList }</button>
                    )
                  })
                }
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
