import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { JobListComponent } from './Components/job-list/job-list.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    JobListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) { }

  setTab(name: string) {
    this.router.navigate([`/${name}`]);
  }
}
