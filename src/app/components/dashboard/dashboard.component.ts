import { Component, OnInit } from '@angular/core';
import { GitsearchService } from './../../services/gitsearch.service';
import { ReposirotySearchResponse } from '../../models/reposiroty-search-response';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private gitRepoService: GitsearchService) { }

  gitDataRepo: ReposirotySearchResponse;
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.gitRepoService.getAllGitData().subscribe(
      data => {
          this.gitDataRepo = data;
          console.log(this.gitDataRepo);
      }
    );
  }

}
