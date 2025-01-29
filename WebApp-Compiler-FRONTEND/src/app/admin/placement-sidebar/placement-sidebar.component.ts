import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement-sidebar',
  templateUrl: './placement-sidebar.component.html',
  styleUrls: ['./placement-sidebar.component.css']
})
export class PlacementSidebarComponent implements OnInit {
listChamptions() {
throw new Error('Method not implemented.');
}
studentDetails() {
throw new Error('Method not implemented.');
}
jobAlerts() {
throw new Error('Method not implemented.');
}
  isSidebarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void 
  {

  }

  toggleSidebar() 
  {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  goToDashboard() {
  }
  listUsers() {
  }
  addQuestion() {
  }
  viewAnalytics() {
  }
  viewCodeBase() {
  }
  downloadFile() {
  }
  uploadFile() {
  }
  listQuestions() {
  }
  openSettings() {
    // Implementation to open settings
  }
  logout() {
  }

}
