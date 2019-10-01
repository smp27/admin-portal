import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SuperadminService } from '../../services/superadmin/superadmin.service';
import { Admin } from '../../models/admin/admin';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  AdminData: Admin[];

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
          this.router.navigateByUrl('/dashboard');
          console.log('Logged In successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }

}