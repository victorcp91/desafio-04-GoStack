import React, { Component } from "react";
import "./PostList.css";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:8080/images/profile1.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/profile3.png"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur. Dicta officia quia iste quasi numquam harum tempora doloremque deleniti? Pariatur, quae inventore nobis deleniti cum qui molestias tempora odio."
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/profile3.png"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur. Dicta officia quia iste quasi numquam harum tempora doloremque deleniti? Pariatur, quae inventore nobis deleniti cum qui molestias tempora odio."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:8080/images/profile2.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/profile3.png"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur. Dicta officia quia iste quasi numquam harum tempora doloremque deleniti? Pariatur, quae inventore nobis deleniti cum qui molestias tempora odio."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:8080/images/profile1.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/profile2.png"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur. Dicta officia quia iste quasi numquam harum tempora doloremque deleniti? Pariatur, quae inventore nobis deleniti cum qui molestias tempora odio."
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:8080/images/profile3.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/profile1.png"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur. Dicta officia quia iste quasi numquam harum tempora doloremque deleniti? Pariatur, quae inventore nobis deleniti cum qui molestias tempora odio."
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/images/profile1.png"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur. Dicta officia quia iste quasi numquam harum tempora doloremque deleniti? Pariatur, quae inventore nobis deleniti cum qui molestias tempora odio."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul className="postList">
        {this.state.posts.map(post => (
          <Post post={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
