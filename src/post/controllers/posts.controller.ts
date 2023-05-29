import * as express from 'express';
import Post from '../models';

class PostsController {
  public path = '/posts';
  public router = express.Router();

  private posts: Post[] = [
    { author: 'Bar Foo Test', content: 'Foo contents', title: 'Bar Ipsum',},
    { author: 'Foo Test', content: 'Bar contents', title: 'Foo Ipsum',}
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  }

  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  }
}

export default PostsController;