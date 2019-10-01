import { Router } from '@angular/router';
import { ApplicationService } from '../../services/application/application.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})

export class CreateApplicationComponent implements OnInit {  
  submitted = false;
  employeeForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private applicationService: ApplicationService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      applicationUrl: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.applicationService.createApplication(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Application successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-applications'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}