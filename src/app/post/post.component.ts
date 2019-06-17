import { Component, OnInit } from '@angular/core';
import { AllPostsGQL, Post } from '../generated/graphql';
import { Observable } from 'apollo-link';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private allPosts: AllPostsGQL) { }

  ngOnInit() {
    this.posts = this.allPosts.watch()
      .valueChanges
      .pipe(
        map(result => result.data.posts)
      ) as any;
  }

}
