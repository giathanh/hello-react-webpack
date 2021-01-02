# React with Typescript and Webpack v4

## fake REST API

- [json-server](https://github.com/typicode/json-server)
- install: `npm install -g json-server`
- create a db.json
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
- start JSON server: `json-server --watch db.json`
- go to http://localhost:3000/posts/1