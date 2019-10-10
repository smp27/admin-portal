import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminuserComponent } from './create-adminuser.component';

describe('CreateAdminuserComponent', () => {
  let component: CreateAdminuserComponent;
  let fixture: ComponentFixture<CreateAdminuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdminuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
