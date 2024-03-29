import { Router } from '@angular/router';
import { AdminuserService } from '../../services/adminuser/adminuser.service';
import { RoleService } from '../../services/role/role.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-adminuser',
  templateUrl: './create-adminuser.component.html',
  styleUrls: ['./create-adminuser.component.css']
})

export class CreateAdminuserComponent implements OnInit {  
  submitted = false;
  employeeForm: FormGroup;
  Roles:any = [];
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private adminService: AdminuserService,
    private roleService: RoleService
  ) { 
    this.mainForm();
    this.readRole();
  }

  ngOnInit() { }

  readRole(){
    this.roleService.getRoles().subscribe((data) => {
     this.Roles = data;
    })    
  }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email2: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email3: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      role: ['', [Validators.required]],
      address: ['', [Validators.required]],
      linkedinUrl: ['', [Validators.required]]
    })
  }

  // Choose role with select dropdown
  updateProfile(e){
    this.employeeForm.get('role').setValue(e, {
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
      this.adminService.createAdmin(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Admin successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-adminusers'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}