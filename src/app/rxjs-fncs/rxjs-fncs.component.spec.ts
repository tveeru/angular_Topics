import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFncsComponent } from './rxjs-fncs.component';

describe('RxjsFncsComponent', () => {
  let component: RxjsFncsComponent;
  let fixture: ComponentFixture<RxjsFncsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFncsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFncsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
