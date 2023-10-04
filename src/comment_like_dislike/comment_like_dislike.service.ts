import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CommentLikeAndDisLikeCreateDto } from 'tools/dtos/comment_like_dislike.dto';
import { CommentModel } from 'tools/models/comment.model';
import { CommentDisLikeModel, CommentLikeModel } from 'tools/models/comment_like_dislike.model';

@Injectable()
export class CommentLikeDislikeService {
  constructor(
    @Inject('COMMENT_MODEL')
    private commentMongo: Model<CommentModel>,
    @Inject('COMMENT_LIKE_MODEL')
    private likeMongo: Model<CommentLikeModel>,
    @Inject('COMMENT_DISLIKE_MODEL')
    private disLikeMongo: Model<CommentDisLikeModel>,
  ) { }

  async likeCheck(body: CommentLikeAndDisLikeCreateDto): Promise<any> {
    const like = await this.likeMongo.findOne(body);
    if (like) {
      return { success: true, result: like };
    } else {
      return { success: false, result: null };
    }
  }

  async disLikeCheck(body: CommentLikeAndDisLikeCreateDto): Promise<any> {
    const disLike = await this.disLikeMongo.findOne(body);
    if (disLike) {
      return { success: true, result: disLike };
    } else {
      return { success: false, result: null };
    }
  }

  async createLike(body: CommentLikeAndDisLikeCreateDto): Promise<boolean> {
    const commentInfo = await this.commentMongo.findById(body.CommentId).exec();
    const newLike = new this.likeMongo(body);
    const createdLike = await newLike.save();
    if (createdLike) {
      await this.commentMongo.findByIdAndUpdate(body.CommentId, { Like: commentInfo.Like + 1 }).exec();
      return true;
    } else {
      return false;
    }
  }

  async createDisLike(body: CommentLikeAndDisLikeCreateDto): Promise<boolean> {
    const commentInfo = await this.commentMongo.findById(body.CommentId).exec();
    const newDisLike = new this.disLikeMongo(body);
    const createdDisLike = await newDisLike.save();
    if (createdDisLike) {
      await this.commentMongo.findByIdAndUpdate(body.CommentId, { DisLike: commentInfo.DisLike + 1 }).exec();
      return true;
    } else {
      return false;
    }
  }

  async deleteLike(likeId: string): Promise<boolean> {
    const deletedLike = await this.likeMongo.findByIdAndDelete(likeId).exec();
    const commentInfo = await this.commentMongo.findById(deletedLike.CommentId).exec();
    if (deletedLike) {
      await this.commentMongo.findByIdAndUpdate(commentInfo._id, { Like: commentInfo.Like - 1 }, { new: true }).exec();
      return true;
    } else {
      return false;
    }
  }

  async deleteDisLike(disLikeId: string): Promise<boolean> {
    const deletedDisLike = await this.disLikeMongo.findByIdAndDelete(disLikeId).exec();
    const commentInfo = await this.commentMongo.findById(deletedDisLike.CommentId).exec();
    if (deletedDisLike) {
      await this.commentMongo.findByIdAndUpdate(commentInfo._id, { DisLike: commentInfo.DisLike - 1 }, { new: true }).exec();
      return true;
    } else {
      return false;
    }
  }

  async deleteLikes(commentId: string): Promise<boolean> {
    const likes = await this.likeMongo.find({ CommentId: commentId }).exec();
    if (likes) {
      if (likes.length !== 0) {
        for (let i = 0; i < likes.length; i++) {
          await this.likeMongo.findByIdAndDelete(likes[i]._id)
          if (i + 1 === likes.length) {
            return true;
          }
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  async deleteDisLikes(commentId: string): Promise<boolean> {
    const disLikes = await this.disLikeMongo.find({ CommentId: commentId }).exec();
    if (disLikes) {
      if (disLikes.length !== 0) {
        for (let i = 0; i < disLikes.length; i++) {
          await this.disLikeMongo.findByIdAndDelete(disLikes[i]._id)
          if (i + 1 === disLikes.length) {
            return true;
          }
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

}
