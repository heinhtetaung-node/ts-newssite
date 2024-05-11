import { Express } from 'express';
import RssFeeds from './RssFeeds';
import Users from './Users';

export default (app: Express) => {
    RssFeeds(app);
    Users(app);
}