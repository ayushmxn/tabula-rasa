import React from "react";
import '../assets/css/Story.css';

export default class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            date: Date.now(),
            isEditable: false,
            isPublished: false
        };
        this.onUpdate = this.onUpdate.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onPublish = this.onPublish.bind(this);
    }

    onUpdate(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSave() {
        this.setState((state) => ({ isEditable: !state.isEditable }));
    }

    onPublish() {
        this.setState((state) => ({ isPublished: !state.isPublished }));
        this.setState((state) => ({ date: Date.now() }));
    }

    render() {
        return (<article class="Story">
            <input class="Title" disabled={this.state.isEditable ? "" : "disabled"} type="text" value={this.state.title} name="title" placeholder="Title" onChange={this.onUpdate} />
            <br /><br />
            <textarea class="Content" disabled={this.state.isEditable ? "" : "disabled"} value={this.state.content} name="content" placeholder="Tell your story" onChange={this.onUpdate} />
            <button class="Update" onClick={this.onSave}>{this.state.isEditable ? "Save" : "Edit"}</button><button class="Publish" onClick={this.onPublish}>{this.state.isPublished ? "Unpublish" : "Publish"}</button>
        </article>);
    }
}