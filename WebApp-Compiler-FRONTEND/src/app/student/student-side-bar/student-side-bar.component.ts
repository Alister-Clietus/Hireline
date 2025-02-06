import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/service/logout.service';

@Component({
  selector: 'app-student-side-bar',
  templateUrl: './student-side-bar.component.html',
  styleUrls: ['./student-side-bar.component.css']
})
export class StudentSideBarComponent implements OnInit {
companyDetails() 
{
  this.router.navigate(['./student/companey-details'],{skipLocationChange:true});
}
resumeChecker() 
{
  this.router.navigate(['./student/resume-checker'],{skipLocationChange:true});
}
  listChamptions() {
    this.router.navigate(['./student/champion'],{skipLocationChange:true});
    }
    studentDetails() 
    {
      this.router.navigate(['./student/profile-details'],{skipLocationChange:true});
    }
    jobAlerts() 
    {
      this.router.navigate(['./student/jobalerts'],{skipLocationChange:true});
    }
      isSidebarOpen: boolean = false;
    
      constructor(private router: Router,private logoutt:LogoutService) { }
    
      ngOnInit(): void 
      {
    
      }
    
      toggleSidebar() 
      {
        this.isSidebarOpen = !this.isSidebarOpen;
      }
      
      goToDashboard() 
      {
        this.router.navigate(['./student/student-dashboard'],{skipLocationChange:true});
      }

      downloadFile() 
      {
        this.router.navigate(['./student/download'],{skipLocationChange:true});
      }
      uploadFile() 
      {
        this.router.navigate(['./student/upload'],{skipLocationChange:true});
      }
      openSettings() 
      {
        this.router.navigate(['./student/settings'],{skipLocationChange:true});
      }
      logout() {
      }

}
