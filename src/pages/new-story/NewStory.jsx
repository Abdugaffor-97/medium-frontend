import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Container } from "react-bootstrap";
import "react-quill/dist/quill.bubble.css";
import { Button } from "react-bootstrap";
import "./styles.scss";
import CategoryPicker from "../../components/CategoryPicker";

export default class NewStory extends Component {
  state = {
    html: "",
    loading: false,
    error: null,
    article: {
      category: {
        name: "",
        img: "",
      },
      author: {
        name: "",
        img: "",
      },
      headLine: "",
      subHead: "",
      content: "",
      cover: "",
      reviews: [],
    },
  };
  editor = React.createRef();

  uploadPost = async (e) => {
    this.setState({ loading: true });
    const url = process.env.REACT_APP_BE_URL;
    console.log(url);
    const res = await fetch(url + "/articles", {
      method: "POST",
      body: JSON.stringify(this.state.article),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    if (res.ok) {
      this.setState({
        article: {
          category: {
            name: "",
            img: "",
          },
          author: {
            name: "",
            img: "",
          },
          headLine: "",
          subHead: "",
          content: "",
          cover: "",
          reviews: [],
        },
        loading: false,
      });
    }
  };

  updateArticle = (e) => {
    const article = { ...this.state.article };
    if (e.currentTarget) {
      const currentId = e.currentTarget.id;
      article[currentId] = e.currentTarget.value;
      this.setState({ article: article });
    }
  };

  onChange = (html) => {
    this.setState({ html });
    console.log(html);
  };

  onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.editor && this.editor.current.focus();
    }
  };

  render() {
    const { article } = this.state;
    return (
      <Container className="new-story-container" expand="md">
        <div className="category-container">
          <CategoryPicker
            onChange={(topic) => {
              const newArticle = { ...article };
              article.category = topic;
              this.setState({ article: newArticle });
            }}
          />
        </div>
        <input
          onKeyDown={this.onKeyDown}
          placeholder="Title"
          className="article-title-input"
          id="headLine"
          onChange={this.updateArticle}
          value={article.headLine}
        />

        <ReactQuill
          modules={NewStory.modules}
          formats={NewStory.formats}
          ref={this.editor}
          theme="bubble"
          value={article.content}
          onChange={(html) =>
            this.setState({ article: { ...article, content: html } })
          }
          placeholder="Tell your story..."
        />
        <input
          onKeyDown={this.onKeyDown}
          onChange={this.updateArticle}
          placeholder="Cover link e.g : https://picsum.photos/800"
          className="article-cover-input"
          id="cover"
        />

        <Button
          onClick={this.uploadPost}
          variant="success"
          className="post-btn"
        >
          Post
        </Button>
      </Container>
    );
  }
}

NewStory.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],

    ["bold", "italic", "blockquote"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],

    ["link", "image"],

    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
NewStory.formats = [
  "header",
  "bold",
  "italic",
  "blockquote",
  "align",

  "link",
  "image",
];
