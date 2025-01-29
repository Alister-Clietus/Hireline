import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-side-bar',
  templateUrl: './student-side-bar.component.html',
  styleUrls: ['./student-side-bar.component.css']
})
export class StudentSideBarComponent implements OnInit {
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
