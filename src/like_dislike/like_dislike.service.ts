import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LikeAndDisLikeCreateDto } from 'tools/dtos/like_dislike.dto';
import { DisLikeModel, LikeModel } from 'tools/models/like_dislike.model';
import { VideoModel } from 'tools/models/video.model';

@Injectable()
export class LikeDislikeService {
  constructor(
    @Inject('VIDEO_MODEL')
    private videoMongo: Model<VideoModel>,
    @Inject('LIKE_MODEL')
    private likeMongo: Model<LikeModel>,
    @Inject('DISLIKE_MODEL')
    private disLikeMongo: Model<DisLikeModel>,
  ) { }

  async getLikedVideos(user_id: string): Promise<LikeModel[]> {
    const likedVideos = await this.likeMongo.find({ UserId: user_id }).exec();
    return likedVideos;
  }

  async likeCheck(body: LikeAndDisLikeCreateDto): Promise<any> {
    const like = await this.likeMongo.findOne(body);
    if (like) {
      return { success: true, result: like };
    } else {
      return { success: false, result: null };
    }
  }

  async disLikeCheck(body: LikeAndDisLikeCreateDto): Promise<any> {
    const disLike = await this.disLikeMongo.findOne(body);
    if (disLike) {
      return { success: true, result: disLike };
    } else {
      return { success: false, result: null };
    }
  }

  async createLike(body: LikeAndDisLikeCreateDto): Promise<boolean> {
    const videoInfo = await this.videoMongo.findById(body.VideoId).exec();
    const newLike = new this.likeMongo(body);
    const createdLike = await newLike.save();
    if (createdLike) {
      await this.videoMongo.findByIdAndUpdate(body.VideoId, { Like: videoInfo.Like + 1 }).exec();
      return true;
    } else {
      return false;
    }
  }

  async createDisLike(body: LikeAndDisLikeCreateDto): Promise<boolean> {
    const videoInfo = await this.videoMongo.findById(body.VideoId).exec();
    const newDisLike = new this.disLikeMongo(body);
    const createdDisLike = await newDisLike.save();
    if (createdDisLike) {
      await this.videoMongo.findByIdAndUpdate(body.VideoId, { DisLike: videoInfo.DisLike + 1 }).exec();
      return true;
    } else {
      return false;
    }
  }

  async deleteLike(likeId: string): Promise<boolean> {
    const deletedLike = await this.likeMongo.findByIdAndDelete(likeId).exec();
    const videoInfo = await this.videoMongo.findById(deletedLike.VideoId).exec();
    if (deletedLike) {
      await this.videoMongo.findByIdAndUpdate(videoInfo._id, { Like: videoInfo.Like - 1 }, { new: true }).exec();
      return true;
    } else {
      return false;
    }
  }

  async deleteDisLike(disLikeId: string): Promise<boolean> {
    const deletedDisLike = await this.disLikeMongo.findByIdAndDelete(disLikeId).exec();
    const videoInfo = await this.videoMongo.findById(deletedDisLike.VideoId).exec();
    if (deletedDisLike) {
      await this.videoMongo.findByIdAndUpdate(videoInfo._id, { DisLike: videoInfo.DisLike - 1 }, { new: true }).exec();
      return true;
    } else {
      return false;
    }
  }

  async deleteLikes(videoId: string): Promise<boolean> {
    const likes = await this.likeMongo.find({ VideoId: videoId }).exec();
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

  async deleteDisLikes(videoId: string): Promise<boolean> {
    const disLikes = await this.disLikeMongo.find({ VideoId: videoId }).exec();
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
