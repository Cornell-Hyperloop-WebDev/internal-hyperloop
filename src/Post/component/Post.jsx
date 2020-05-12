import React from 'react';
import EditForm from '../../EditForm/components/EditForm.jsx';
import ThreadDisplay from '../../ThreadDisplay/components/ThreadDisplay.jsx';



const Post = (props) => (
    <div className="card card-default post">
        <div className="card-body">
            { props.postBody.map((postPart, idx) => (
                <div>
                <div>{postPart}</div>
                {/*<EditForm addPost={ThreadDisplay.addPost} postBody={postPart} /> */}
                </div>
            )) }
            <button onClick={new EditForm(props.postBody)}>Edit</button>
            
        </div>
    </div>
);



export default Post;
