import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    // postdata , post id , username, user email
    const data = [
      { userId: 1, title: 'John', body:
      'This is my first post', id: 1},
      { userId: 2, title: 'abc', body:
      'lorem aba adasd', id: 2},
      { userId: 1, title: 'John again', body:
      'This is my second post', id: 3},
    ]
    return {data};
  }

  constructor() {
  }
}
