import React, { useState } from 'react';
import { Form, Button, Input } from 'reactstrap';

const CommentForm = (props) => {
    const [state, setState] = useState({
        author: '',
        rating: '',
        comment: ''
    })

    const handleInputChange = event => {
        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        props.addComment(props.dishId, state.author, state.rating, state.comment)

        setState(prevState => ({
            ...prevState,
            author: '',
            rating: '',
            comment: ''
        }))
        event.preventDefault()
    }

    return (
        < div >
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="author"
                    value={state.author}
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    required
                /> <br />
                <Input
                    type="select"
                    name="rating"
                    value={state.rating}
                    onChange={handleInputChange}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <br />
                <Input
                    type="textarea"
                    name="comment"
                    value={state.comment}
                    onChange={handleInputChange}
                    placeholder="Your Comment"
                    required
                />
                <br />
                <Button type="submit">Submit Comment</Button>
            </Form>
        </div >
    );
};

export default CommentForm;