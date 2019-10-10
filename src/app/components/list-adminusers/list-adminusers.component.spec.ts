import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminusersComponent } from './list-adminusers.component';

describe('ListAdminusersComponent', () => {
  let component: ListAdminusersComponent;
  let fixture: ComponentFixture<ListAdminusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdminusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
