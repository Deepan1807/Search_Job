import { Routes } from '@angular/router';
import { JobListComponent } from './Components/job-list/job-list.component';
import { FavoriteJobComponent } from './Components/favorite-job/favorite-job.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';

export const routes: Routes = [

    {path: "", component: JobListComponent},
    {path: "jobLists", component: JobListComponent},
    {path: "favJob", component: FavoriteJobComponent},
    {path: "jobDetails", component: JobDetailsComponent}
];
