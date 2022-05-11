/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddtoCartComponent } from './addtoCart.component';

describe('AddtoCartComponent', () => {
  let component: AddtoCartComponent;
  let fixture: ComponentFixture<AddtoCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtoCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
