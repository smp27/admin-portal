import { AdminUser } from '../../models/adminuser/adminuser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdminuserService } from '../../services/adminuser/adminuser.service';
import { RoleService } from '../../services/role/role.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-adminuser',
  templateUrl: './edit-adminuser.component.html',
  styleUrls: ['./edit-adminuser.component.css']
})

export class EditAdminuserComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  Roles:any = [];
  adminData: AdminUser[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private adminService: AdminuserService,
    private router: Router,
    private roleService: RoleService
  ) {
    this.readRole();
  }

  readRole(){
    this.roleService.getRoles().subscribe((data) => {
     this.Roles = data;
    })    
  }

  ngOnInit() {
    this.updateAdmin();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAdmin(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email2: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email3: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      role: ['', [Validators.required]],
      linkedinUrl: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('role').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getAdmin(id) {
    this.adminService.getAdmin(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        phoneNumber: data['phoneNumber'],
        email2: data['email2'],
        email3: data['email3'],
        linkedinUrl: data['linkedinUrl'],
        role: data['role'],
        address: data['address']
      });
    });
  }

  updateAdmin() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email2: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email3: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      role: ['', [Validators.required]],
      linkedinUrl: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.adminService.updateAdmin(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-adminusers');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
