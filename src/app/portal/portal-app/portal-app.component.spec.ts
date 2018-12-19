import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAppComponent } from './portal-app.component';

describe('PortalAppComponent', () => {
  let component: PortalAppComponent;
  let fixture: ComponentFixture<PortalAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
