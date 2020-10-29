import React, {Component} from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddFrom from '../post-add-form';

import './app.css';
import styled from 'styled-components';
import useId from "react-id-generator";
import nextId from 'react-id-generator';
const AppBlock = styled.div `
    margin: 0 auto;
    max-width: 800px;
`;


export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: "Going to learn React", important: false, id: 1},
                {label: "That is so nice", important: false, id: 2},
                {label: "I will be PRO", important: true, id: 3}
            ]
        }
        this.maxId =  4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArray = [...before, ...after];
            return {
                data : newArray
            }
        });
    }
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false, 
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        });
    } 
    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                    <PostList 
                        posts={this.state.data} 
                        onDelete={this.deleteItem}
                    />
                    <PostAddFrom
                    onAdd={this.addItem}
                    />
            </AppBlock>
        )
    }
}
