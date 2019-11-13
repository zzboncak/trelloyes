import React from 'react';
import './App.css';
import List from './List';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
  }
  
  handleDelete = (cardInfo) => {
    let newLists = this.state.lists.map(list => {
      if (cardInfo.listId !== list.id) {
        return list;
      }else{
        let newCards = list.cardIds.filter(id => {
          if(id === cardInfo.id){
            return false;
          }else{
            return true;
          }
        })
        list.cardIds = newCards;
        return list
      }
    })
    this.setState({
      lists: newLists,
    })
  }

  newRandomCard = (cardInfo) => {
    console.log(cardInfo);
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    
    let newCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }

    //adding the new random card to the allCards object
    let currentState = this.state.allCards;
    currentState[newCard.id] = newCard;
 
    let newLists = this.state.lists.map(list => {
      if (cardInfo !== list.id) {
        return list;
      }else{
        list.cardIds.push(newCard.id);
        return list;
      }
    })

    this.setState({
      lists: newLists,
      allCards: currentState,
    })

    console.log(this.state.allCards);
  }
  
  
  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => (
            <List 
              key = {list.id}
              id = {list.id}
              header = {list.header}
              cards = {list.cardIds.map(id => 
                this.state.allCards[id])}
              handleDelete = {this.handleDelete}
              newRandomCard = {this.newRandomCard}
            />
                ))}
        </div>
      </main>
    );
  }
}

export default App;