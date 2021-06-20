import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  private url='http://stagingapi.lifestyleatthepark.com.au/api/member';
  constructor(private http: HttpClient) { }

  getPosts(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Secret-Token': '371230987844:&?u4j9v5HBgKE?84%J^A@wv&RkAGTTVLasV4gg4yeZS!'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get(this.url, requestOptions);
    
  }
}
