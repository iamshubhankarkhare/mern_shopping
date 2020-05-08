import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid';


export default class ShoppingList extends Component {
    state = {
        items: [
            { id: uuidv4(), name: 'bread' },
            { id: uuidv4(), name: 'milk' },
            { id: uuidv4(), name: 'butter' },
            { id: uuidv4(), name: 'lai' }
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button color="dark" style={{ marginBottom: '2rem' }} onClick={() => {
                    const name = prompt(" Enter item");
                    if (name) {
                        this.setState(state => ({ items: [...state.items, { id: uuidv4(), name }] }))
                    }
                }}>Add item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping--list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }))
                                        }}>&times;</Button>
                                    {name}
                                </ListGroupItem>

                            </CSSTransition>
                        ))}
                    </TransitionGroup>

                </ListGroup>
            </Container>
        )
    }
}
