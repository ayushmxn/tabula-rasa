import React from "react";
import '../assets/css/Author.css';

export default class Author extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    render()
    {
        return (<form>
            <input type="text" placeholder="Full Name..."/>
            <br/><br/>
            <input type="email" placeholder="Email Address..."/>
            <br/><br/>
            <input type="password" placeholder="Password..."/>
            <br/><br/>
            <button>Update</button>
        </form>);
    }
}