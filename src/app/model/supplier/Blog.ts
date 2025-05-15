import { UserType } from "../../../utils/UserType";
import { User } from "../customer/User";

export type Blog = {
    id?: number,
    title: string,
    author_name: string, // Note: Used author name instead of author type since suppliers and customers do not share the same user type.
    author_type: UserType,
    profile_image_url: string,
    content: string, // These values are mapped from the backend based on the user.
    liked?: boolean, 
    bookmarked?: boolean,
    createdAt: string,
    like_count: number 
    bookmark_count: number,

}