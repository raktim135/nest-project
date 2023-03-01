import { Controller, Get, Post } from "@nestjs/common";
// import { TagEntity } from "./tag.entity";
import { TagService } from "./tag.service";

@Controller('tags')
export class TagController{
    constructor(private readonly tagService: TagService){}
 
    @Get()
    async findAll(): Promise<{tags: string[]}> {
        const tags = await this.tagService.findAll();
        return {tags: tags.map((obj)=>obj.name)}
    }

    @Post()
    async store() {
        return this.tagService.add()
    }
}