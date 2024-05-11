import RssFeedRepository from "../repositories/RssFeedRepository";

class RssFeedService {
    protected rssFeedRepository;
    constructor() {
        this.rssFeedRepository = new RssFeedRepository();
    }
    async getFeed() {
        return await this.rssFeedRepository.getFeed();
    }
}

export default RssFeedService;