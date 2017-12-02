import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  private baseUrl = 'http://127.0.0.1:8000';
  private webserviceUrl = this.baseUrl + '/wyd';
  private mediaUrl = this.baseUrl + '/media';

  normalizePath(path: string): string {
    return (path != null && path.startsWith('/') ? '' : '/') + path + (path != null && path.endsWith('/') ? '' : '/');
  }

  getWebserviceUrl(path: string): string {
    return this.webserviceUrl + this.normalizePath(path);
  }
  
  getMediaUrl(path: string): string {
    return this.mediaUrl + this.normalizePath(path);
  }

  constructor() { }

}
