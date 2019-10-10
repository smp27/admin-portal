import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SuperadminService } from '../../services/superadmin/superadmin.service';
import { AdminUser } from '../../models/adminuser/adminuser';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  AdminData: AdminUser[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private superadminService: SuperadminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      this.superadminService.login(this.editForm.value)
        .subscribe(res => {
          if(res.success) {
            this.router.navigateByUrl('/dashboard');
            console.log('Logged In successfully!')
          } else {
            console.log('Email or Password Invalid!')
          }
        }, (error) => {
          console.log(error)
        })
    }
  }

}