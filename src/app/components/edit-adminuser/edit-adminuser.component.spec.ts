import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminuserComponent } from './edit-adminuser.component';

describe('EditAdminuserComponent', () => {
  let component: EditAdminuserComponent;
  let fixture: ComponentFixture<EditAdminuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdminuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
