import { Request, Response } from "express";
import RssFeedService from "../services/RssFeedService";

class RssFeedsController {
    protected rssfeedService: any;

    constructor() {
        this.rssfeedService = new RssFeedService();
    }

    public async getFeed(req: Request, res: Response) {
        const feed = await this.rssfeedService.getFeed();
        console.log('feed', feed);
        return res.json({ feed });
    }
}

export default RssFeedsController;