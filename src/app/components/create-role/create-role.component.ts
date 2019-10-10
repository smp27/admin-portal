import { Router } from '@angular/router';
import { RoleService } from '../../services/role/role.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})

export class CreateRoleComponent implements OnInit {  
  submitted = false;
  employeeForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private roleService: RoleService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeeForm = this.fb.group({
      roleName: ['', [Validators.required]]
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
      this.roleService.createRole(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Role successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/list-roles'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
