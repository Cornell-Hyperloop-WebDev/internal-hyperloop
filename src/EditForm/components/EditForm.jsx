import React, {Component} from 'react';
import * as firebase from 'firebase';


class EditForm extends Component{
    constructor(props,postBody){
        super(props);
        
        this.state = {
            newPostBody: postBody,
        };

        this.databaseRef = firebase.database().ref().child('post');

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
    }

    handlePostEditorInputChange(ev){
        this.setState({
          newPostBody: ev.target.value
        });
    }

    updatePost(postBody){
        const postToSave = {postBody};
        this.databaseRef.push().set(postToSave);
    }

    render(){
        return(
    <div className="card card-default post-editor">
        <div className="card-body">
        
            <div class="group_form_element">
                <label for="entry">Blog entry:</label>
                <textarea name = "entry" id="entry" className="form-control" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
            </div>

            <button type="submit" className="btn btn-success post-editor-button" onClick={this.updatePost(this.state.newPostBody)}>Submit changes</button>
        </div>
      </div>
            
               
     )
    }
}

export default EditForm;