import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CommentCreateDto, CommentUpdateDto } from 'tools/dtos/comment.dto';
import { CommentModel } from 'tools/models/comment.model';
import { CommentDisLikeModel, CommentLikeModel } from 'tools/models/comment_like_dislike.model';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_MODEL')
    private commentMongo: Model<CommentModel>,
    @Inject('COMMENT_LIKE_MODEL')
    private commentLikeMongo: Model<CommentLikeModel>,
    @Inject('COMMENT_DISLIKE_MODEL')
    private commentDisLikeMongo: Model<CommentDisLikeModel>
  ) { }

  async findById(comment_id: string): Promise<CommentModel> {
    const comment = await this.commentMongo.findById(comment_id).exec();
    return comment;
  }

  async findAll(video_id: string): Promise<CommentModel[]> {
    const comments = await this.commentMongo.find({ VideoId: video_id }).exec();
    return comments;
  }

  async create(body: CommentCreateDto): Promise<boolean> {
    const newComment = new this.commentMongo(body);
    const createdComment = await newComment.save();
    if (createdComment) {
      return true;
    } else {
      return false;
    }
  }

  async update(comment_id: string, body: CommentUpdateDto): Promise<boolean> {
    const updatedComment = await this.commentMongo.findByIdAndUpdate(comment_id, body, { new: true }).exec();
    if (updatedComment) {
      return true;
    } else {
      return false;
    }
  }

  async delete(comment_id: string): Promise<boolean> {
    const commentLikes = await this.commentLikeMongo.find({ CommentId: comment_id }).exec();
    const commentDisLikes = await this.commentDisLikeMongo.find({ CommentId: comment_id }).exec();

    for (let i = 0; i < commentLikes.length; i++) {
      await this.commentLikeMongo.findByIdAndDelete(commentLikes[i]._id).exec();
    }

    for (let i = 0; i < commentDisLikes.length; i++) {
      await this.commentDisLikeMongo.findByIdAndDelete(commentDisLikes[i]._id).exec();
    }

    const deletedComment = await this.commentMongo.findByIdAndDelete(comment_id).exec();
    if (deletedComment) {
      return true;
    } else {
      return false;
    }
  }

}
