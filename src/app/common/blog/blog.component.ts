import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../../model/supplier/Blog';
import { BlogService } from '../../../service/user-services/blog/blog.service';
import { thisExpression } from '@babel/types';
import { FormsModule } from '@angular/forms';
import { UserType } from '../../../utils/UserType';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  data: Blog[] = [];
  MOCK_USER_ID = -1;
  
  modalPostTitle: string = '';
  modalPostContent: string = '';

  ngOnInit(): void {
    this.blogService.getBlogs(this.MOCK_USER_ID).subscribe((blogs) => {
      this.data = blogs;
    });
  }

  prettifyDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  likePost(id: number) {
    let post = this.data.find((post) => post.id === id);

    if (post) {
      post.liked = !post?.liked;

      if (post.liked == true) post.like_count++; else post.like_count--;

      this.blogService.updateBlog(post, this.MOCK_USER_ID, "LIKE");
    }
  }

  bookmarkPost(id: number) {
    let post = this.data.find((post) => post.id === id);

    if (post) {
      post.bookmarked = !post.bookmarked;

      if (post.bookmarked == true) post.bookmark_count++; else post.bookmark_count--;

      this.blogService.updateBlog(post, this.MOCK_USER_ID, "BOOKMARK");
      }
  }


  createPost() {
    if (!this.modalPostTitle || !this.modalPostContent) {
      alert("Please make sure you enter a title AND the content you desire to enter!");
      return;
    }

    this.blogService.createBlog(
      {
        title: this.modalPostTitle,
        content: this.modalPostContent,
        author_name: "MOCK USER",
        author_type: UserType.SUPPLIER, // Check role with auth,
        profile_image_url: "MOCK USER PROFILE IMAGE URL",
        createdAt: new Date().toDateString(),
        like_count: 0,
        bookmark_count: 0
      }
    );
    
  }
}
