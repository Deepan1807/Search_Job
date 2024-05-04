import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';

export interface JobData {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  isSelectedFav: boolean
}

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.css'
})
export class FavoriteJobComponent implements OnInit {
  noFavJob: string | undefined;
  isFavorite: boolean = false;

  constructor(private commonservice: CommonService,
    private router: Router) { }
  favoriteJobList: JobData[] = [];

  ngOnInit(): void {
    if (this.commonservice.favoriteJob.length !== 0) {
      this.isFavorite = true;
      this.favoriteJobList = this.commonservice.favoriteJob;
    } else {
      this.isFavorite = false;
      this.noFavJob = 'No favorites '
    }
  }

  jobDetail(selectedJob: JobData) {
    this.commonservice.SelectedJob = selectedJob;
    this.router.navigate(['/jobDetails']);
  }
}
