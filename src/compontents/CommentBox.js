import React from 'react';

class CommentBox extends React.Component {
    render(){
        return(
            <form>
                <h4>Add a comment</h4>
                <textarea />
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;