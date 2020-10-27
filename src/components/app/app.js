import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddFrom from '../post-add-form';

import './app.css';

const App = () => {
    const data = [
        {label: "Going to learn React", important: false, id:"wqdqw"},
        {label: "That is so nice", important: false, id:"asd"},
        {label: "I will be PRO", important: true, id:"irg"}
    ];
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
                <PostList posts={data} />
                <PostAddFrom/>
        </div>
    )
}
export default App;
