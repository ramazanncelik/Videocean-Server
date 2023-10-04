export declare class UserCreateDto {
    Email: string;
    Password: string;
    NickName: string;
    FullName: string;
    Biography: string;
    ImageUrl: string;
    SubscriberCount: number;
    VideoCount: number;
    ConfirmationCode: string;
    Role: string;
    UsageAgreement: boolean;
    EmailVerify: boolean;
}
export declare class UserUpdateDto {
    NickName: string;
    Password: string;
    FullName: string;
    Biography: string;
    ImageUrl: string;
    SubscriberCount: number;
    VideoCount: number;
    ConfirmationCode: string;
    Role: string;
    EmailVerify: boolean;
}
export declare class UserLoginDto {
    Email: string;
    Password: string;
}
