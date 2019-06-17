import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { FindPostGQL, Post } from '../generated/graphql';
import { Observable } from 'apollo-link';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post$: Observable<Post>;

  constructor(protected route: ActivatedRoute, protected findPost: FindPostGQL) { }

  ngOnInit() {
    const postId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.post$ = this.findPost.watch({
      postId: postId
    }).valueChanges.pipe(
      map(t => t.data.post as Post)
    ) as any;
  }

}
