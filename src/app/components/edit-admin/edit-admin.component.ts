import { Admin } from '../../models/admin/admin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from '../../services/admin/admin.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})

export class EditAdminComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  adminData: Admin[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

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
      linkedinUrl: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  // updateProfile(e) {
  //   this.editForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

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
            this.router.navigateByUrl('/list-admins');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
