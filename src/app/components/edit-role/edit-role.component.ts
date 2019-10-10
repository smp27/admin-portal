import { Role } from '../../models/role/role';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RoleService } from '../../services/role/role.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})

export class EditRoleComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  roleData: Role[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateRole();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getRole(id);
    this.editForm = this.fb.group({
      roleName: ['', [Validators.required]]
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

  getRole(id) {
    this.roleService.getRole(id).subscribe(data => {
      this.editForm.setValue({
        roleName: data['roleName']
      });
    });
  }

  updateRole() {
    this.editForm = this.fb.group({
      roleName: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.roleService.updateRole(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-roles');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}

