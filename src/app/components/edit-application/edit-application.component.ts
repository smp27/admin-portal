import { Application } from '../../models/application/application';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApplicationService } from '../../services/application/application.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})

export class EditApplicationComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  applicationData: Application[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private applicationService: ApplicationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateApplication();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getApplication(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      applicationUrl: ['', [Validators.required]]
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

  getApplication(id) {
    this.applicationService.getApplication(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        applicationUrl: data['applicationUrl']
      });
    });
  }

  updateApplication() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      applicationUrl: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.applicationService.updateApplication(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-applications');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}

