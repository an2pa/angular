import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { log } from 'console';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-parent',
  templateUrl: './user-parent.component.html',
  styleUrls: ['./user-parent.component.css']
})
export class UserParentComponent implements AfterViewInit {
  @ViewChild(UserComponent) childComp!: UserComponent;
  name: string = "";
  contactNumber: string= "";
  email: string = "";
  password: string= "";
  check: boolean= false;
  objArray:Array<any>=[];
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
  }

  add() {
    // Create a new user object
    const newUser = {
      name: this.name,
      contactNumber: this.contactNumber,
      email: this.email,
      password: this.password,
    };
  
    // Send a POST request to your backend server
    this.http.post('http://localhost:8081/user/signup', newUser).subscribe(
      (response) => {
        // Handle a successful response from the server, if needed
        console.log('User created successfully:', response);
      },
      (error) => {
        // Handle errors if the POST request fails
        console.error('Error creating user:', error);
      }
    );
  }
  
  delete(i:any){
    this.objArray.splice(i,1);
  }

}

