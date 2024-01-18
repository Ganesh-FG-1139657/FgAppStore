import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgAppListComponent } from './fg-app-list.component';

describe('FgAppListComponent', () => {
  let component: FgAppListComponent;
  let fixture: ComponentFixture<FgAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgAppListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
