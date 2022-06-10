/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeardownCleanObservableComponent } from './teardown-clean-observable.component';

describe('TeardownCleanObservableComponent', () => {
  let component: TeardownCleanObservableComponent;
  let fixture: ComponentFixture<TeardownCleanObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeardownCleanObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeardownCleanObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
