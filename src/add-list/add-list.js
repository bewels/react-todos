import React from 'react';

import PostAddItem from '../add-list-item';


const PostForm = ({post, onSelect, onDelete, select}) => {
            const elem = post.map(item => {
                const {label, id, select} = item;
                return (
                    <li key={id} className="d-flex filed-todo-li">
                        <PostAddItem label={label} id={id} select={select}  onSelect={() => onSelect(id)} onDelete={() => onDelete(id)} select={select}/>
                    </li>
                )
            });
            return (
                <ul>
                    {elem}
                </ul>
            )
}

export default PostForm;