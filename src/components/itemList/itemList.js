import React, {Component} from 'react';
import GotService from '../../services/gotService';
import './itemList.css';

export default class ItemList extends Component {

    // AllCharacters = GotService.getAllCharacters();

    render() {
        return (
            <ul className="item-list list-group">

                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}