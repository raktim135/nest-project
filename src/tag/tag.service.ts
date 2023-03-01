import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TagEntity } from "./tag.entity";

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>
    ){}

    async findAll(): Promise<TagEntity[]> {
        return await this.tagRepository.query("SELECT * FROM tags ORDER BY id")
    }

    async add() {
        return await this.tagRepository.insert({name: 'Books', status: true})
    }
}