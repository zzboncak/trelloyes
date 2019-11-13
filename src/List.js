import React from 'react';
import './List.css';
import Card from "./Card";

class List extends React.Component {
    constructor(props){
        super(props);
    }
    
    static defaultProps = {
        cards: [],
    };
    
    render() {
        return (
            <section className="List">
            <header className="List-header">
                <h2>{this.props.header}</h2>
            </header>
            <div className="List-cards">
                {this.props.cards.map(card => (
                    <Card 
                        key = {card.id}
                        id = {card.id}
                        listId = {this.props.id}
                        title = {card.title}
                        content = {card.content}
                        handleDelete = {this.props.handleDelete}
                    />
                ))}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
        )
    }
}


export default List;
