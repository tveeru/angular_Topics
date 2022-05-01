/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultChangeDetectionComponentComponent } from './DefaultChangeDetectionComponent.component';

describe('DefaultChangeDetectionComponentComponent', () => {
  let component: DefaultChangeDetectionComponentComponent;
  let fixture: ComponentFixture<DefaultChangeDetectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChangeDetectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChangeDetectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
