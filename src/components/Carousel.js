import React, { Component } from 'react';
import ekceer from '../img/ekceer.png'
import profile from '../img/profile.png'
import quench from '../img/quench.png'
import Card from './Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Ekceer',
                    subTitle: 'A beauty and clinic app',
                    imgSrc: ekceer,
                    link: "https://tahseens.azurewebsites.net",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Github',
                    subTitle: 'Small projects on github',
                    imgSrc: profile,
                    link: 'https://github.com/Adman94',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Quench',
                    subTitle: 'Non-profit affordable water project',
                    imgSrc: quench,
                    link: 'https://quenchpoverty.org/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click = {(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel