import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../../app/model/supplier/Blog';
import { UserType } from '../../../utils/UserType';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // TODO: Integrated backend.
  // This service class is created with moock data to simulate API
  // since backend is not implemented

  constructor() {}

  mockBlogPosts: Blog[] = this.getMockPostData().map(
    (
      [title, author_name, author_type, profile_image_url, content, createdAt],
      index
    ) => ({
      id: index + 1,
      title,
      author_name,
      author_type: author_type as UserType,
      profile_image_url,
      content,
      createdAt,
      like_count: Math.floor(Math.random() * 100) + 1,
      bookmark_count: Math.floor(Math.random() * 100) + 1,

      liked: [false, true][Math.round(Math.random())],
      bookmarked: [false, true][Math.round(Math.random())],
    })
  );

  public getBlogs(userID: number, limit: number = 10): Observable<Blog[]> {
    // Map user liked blogs to liked = true in backend DTO based on user

    return new Observable<Blog[]>((observer) => {
      observer.next(this.mockBlogPosts.slice(0, limit));
      observer.complete();
    });
  }

  public updateBlog(blog: Blog, userID: number, type: 'LIKE' | 'BOOKMARK') {
    // Update blog

    if (type === 'LIKE') {
      // Update user's blog like history
    } else {
      // Update user's bookmark like history
    }
  }

  public createBlog(blog: Blog) {
    // Create blog
  }

  private getMockPostData() {
    return [
      [
        'Why Cats Hate Mondays',
        'Alice Meow',
        'Customer',
        'assets/girlMsgProfile1.jpg',
        'Something here that makes sense this is a place holder bla bla bla ',
        '2025-05-15T10:00:00Z',
      ],
      [
        'The Future of Mango Farming',
        'Farmer Joe',
        'Supplier',
        'assets/girlMsgProfile1.jpg',
        'From AI irrigation to drone harvesting, mango farming will never be the same.',
        '2025-05-14T08:30:00Z',
      ],
      [
        '5 Ways To Brew the Perfect Cup of Tea',
        'Benny Brewster',
        'Customer',
        'assets/girlMsgProfile1.jpg',
        'You think you know tea? Think again. Here are 5 game-changing techniques.',
        '2025-05-13T14:45:00Z',
      ],
      [
        'How to Sell Tomatoes Without Crying',
        'Tommy Tomato',
        'Supplier',
        'assets/girlMsgProfile1.jpg',
        "Tips for managing emotional attachment to your harvest. Spoiler: it's okay to cry.",
        '2025-05-13T12:00:00Z',
      ],
      [
        'The Art of Avocado Toast',
        'Ava Cado',
        'Customer',
        'assets/girlMsgProfile1.jpg',
        'From millennials to boomers, avocado toast unites us all.',
        '2025-05-12T09:00:00Z',
      ],
      [
        'Carrots and Confidence',
        'Carrie Carrot',
        'Supplier',
        'assets/girlMsgProfile1.jpg',
        'How farming carrots helped me find my inner strength and outer beta-carotene.',
        '2025-05-12T17:20:00Z',
      ],
      [
        'Can Cows Do Yoga?',
        'Moo Moo',
        'Customer',
        'assets/girlMsgProfile1.jpg',
        'Exploring the wellness potential of livestock — with hilarious results.',
        '2025-05-11T15:00:00Z',
      ],
      [
        'My Journey from Soil to CEO',
        'Sandy Fields',
        'Supplier',
        'assets/girlMsgProfile1.jpg',
        'From mud to money, one woman’s inspiring agri-startup journey.',
        '2025-05-11T11:30:00Z',
      ],
      [
        'Secrets of the Silent Herb Garden',
        'Basil Whisperer',
        'Customer',
        'assets/girlMsgProfile1.jpg',
        'Why your herbs might be judging you silently. And how to gain their trust.',
        '2025-05-10T10:10:00Z',
      ],
      [
        'Bees: The Real MVPs',
        'Buzz Lightyear',
        'Supplier',
        'assets/girlMsgProfile1.jpg',
        'Without bees, there’s no blog post. Let’s give them some credit.',
        '2025-05-09T16:45:00Z',
      ],
    ];
  }
}
