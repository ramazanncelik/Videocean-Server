import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SavedVideoCreateDto } from 'tools/dtos/savedVideo.dto';
import { SavedVideoModel } from 'tools/models/savedVideo.model';

@Injectable()
export class SavedVideoService {
  constructor(
    @Inject('SAVEDVIDEO_MODEL')
    private savedVideosMongo: Model<SavedVideoModel>,
  ) { }

  async findAll(user_id: string): Promise<SavedVideoModel[]> {
    const savedVideos = await this.savedVideosMongo.find({ UserId: user_id }).exec();
    return savedVideos;
  }

  async findOne(body: any): Promise<Object> {
    const save = await this.savedVideosMongo.findOne(body);
    if (save) {
      return { success: true, result: save };
    } else {
      return { success: false, result: null };
    }
  }

  async create(body: SavedVideoCreateDto): Promise<boolean> {
    const newSavedVideo = new this.savedVideosMongo(body);
    const createdSavedVideo = await newSavedVideo.save();
    if (createdSavedVideo) {
      return true;
    } else {
      return false;
    }
  }

  async delete(savedVideo_id: string): Promise<boolean> {
    const deletedSavedVideo = await this.savedVideosMongo.findByIdAndDelete(savedVideo_id).exec();
    if (deletedSavedVideo) {
      return true;
    } else {
      return false;
    }
  }

  async deleteVideoSaveds(videoId: string): Promise<boolean> {
    const savedVideos = await this.savedVideosMongo.find({ VideoId: videoId }).exec();
    if (savedVideos) {
      if (savedVideos.length !== 0) {
        for (let i = 0; i < savedVideos.length; i++) {
          await this.savedVideosMongo.findByIdAndDelete(savedVideos[i]._id);
          if (i + 1 === savedVideos.length) {
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
