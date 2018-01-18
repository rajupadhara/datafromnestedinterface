import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReposirotySearchResponse } from './../models/reposiroty-search-response';


@Injectable()
export class GitsearchService {
  webApiUri: string = 'https://api.github.com/search/repositories?q=angular';

  constructor(private http: HttpClient) { }

  getAllGitData() {
      return this.http.get<ReposirotySearchResponse>(this.webApiUri);
  }

}
