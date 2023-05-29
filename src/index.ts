import App from './config';
import PostsController from './post/controllers';

const app = new App(
  [
    new PostsController(),
  ]
);

app.listen();
