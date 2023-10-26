import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ICardBlog } from '../interface/interface';
import { BlogService } from './blog.service';

export const blogResolver: ResolveFn<ICardBlog> = (route, state) => {
  return inject(BlogService).getBlog(Number(route.paramMap.get('id')));
};
