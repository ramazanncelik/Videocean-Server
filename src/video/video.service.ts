import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoCreateDto, VideoUpdateDto } from 'tools/dtos/video.dto';
import { UserModel } from 'tools/models/user.model';
import { VideoModel } from 'tools/models/video.model';

@Injectable()
export class VideoService {
  constructor(
    @Inject('VIDEO_MODEL')
    private videoMongo: Model<VideoModel>,
    @Inject('USER_MODEL')
    private userMongo: Model<UserModel>,
  ) { }

  async findById(video_id: string): Promise<VideoModel> {
    const video = await this.videoMongo.findById(video_id).exec();
    return video;
  }

  async findAll(type: string): Promise<VideoModel[]> {
    if (type !== "all") {
      const videos = await this.videoMongo.find({ Category: type }).exec();
      return videos;
    } else {
      const videos = await this.videoMongo.find().exec();
      return videos;
    }
  }

  async searchVideo(searchText: string): Promise<Object> {
    const videos = await this.videoMongo.find({ Title: { $regex: searchText, $options: 'i' } }).exec();
    if (videos) {
      return { success: true, result: videos };
    } else {
      return { success: false, result: [] };
    }
  }

  async getUserVideos(user_id?: string): Promise<VideoModel[]> {
    const videos = await this.videoMongo.find({ OwnerId: user_id }).exec();
    return videos;
  }

  async create(body: VideoCreateDto): Promise<boolean> {
    const newVideo = new this.videoMongo(body);
    const createdVideo = await newVideo.save();
    if (createdVideo) {
      const videoOwner = await this.userMongo.findById(body.OwnerId);
      await this.userMongo.findByIdAndUpdate(videoOwner._id, { VideoCount: videoOwner.VideoCount + 1 }, { new: true })
      return true;
    } else {
      return false;
    }
  }

  async update(video_id: string, body: VideoUpdateDto): Promise<boolean> {
    const updatedVideo = this.videoMongo.findByIdAndUpdate(video_id, body, { new: true }).exec();
    if (updatedVideo) {
      return true;
    } else {
      return false;
    }
  }

  async delete(video_id: string): Promise<boolean> {
    const deletedVideo = await this.videoMongo.findByIdAndDelete(video_id).exec();
    const videoOwner = await this.userMongo.findById(deletedVideo.OwnerId);
    const updatedVideoOwner = await this.userMongo.findByIdAndUpdate(videoOwner._id, { VideoCount: videoOwner.VideoCount - 1 }, { new: true });
    if (deletedVideo && updatedVideoOwner) {
      return true;
    } else {
      return false;
    }
  }

}
