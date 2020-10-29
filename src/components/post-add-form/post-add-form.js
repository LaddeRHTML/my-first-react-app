import React from 'react';

const PostAddFrom = ({onAdd}) =>{
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button 
                    className="btn btn-outline-secondary" 
                    type="submit"
                    onClick={() => onAdd('hello')}
                    >
                    Добавить
            </button>
        </div>
    )
}
export default PostAddFrom;