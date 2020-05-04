import React, {Component} from 'react';

class PostEditor extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            newPostBody: '',
        };

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorInputChange(ev){
        this.setState({
          newPostBody: ev.target.value
        });
    }

    createPost(){
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        });
    }

    render(){
        return(
    <div className="card card-default post-editor">
        <div className="card-body">
        
            <div class="group_form_element">
                <label for="entry">Blog entry:</label>
                <textarea name = "entry" id="entry" className="form-control" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
            </div>

            <button type="submit" className="btn btn-success post-editor-button" onClick={this.createPost}>Post to blog</button>
        </div>
      </div>
            
               
     )
    }
}

export default PostEditor;