export declare class VideoCreateDto {
    OwnerId: string;
    Title: string;
    Description: string;
    CoverPhotoUrl: string;
    VideoUrl: string;
    Category: string;
    Like: number;
    DisLike: number;
    Comment: number;
    ViewsCount: number;
    Date: string;
}
export declare class VideoUpdateDto {
    Title: string;
    Description: string;
    CoverPhotoUrl: string;
    Like: number;
    DisLike: number;
    Comment: number;
    ViewsCount: number;
}
