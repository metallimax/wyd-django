import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  private baseUrl = 'http://127.0.0.1:8000/wyd';

  getUrl(path: string): string {
    return this.baseUrl + (path != null && path.startsWith('/') ? '' : '/') + path + (path != null && path.endsWith('/') ? '' : '/');
  }

  constructor() { }

}
