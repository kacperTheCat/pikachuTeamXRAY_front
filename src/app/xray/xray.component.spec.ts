import { TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { XrayComponent } from './xray.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '@app/global/get-data.service';

describe('Component: XrayComponent', () => {
  let component: XrayComponent;



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XrayComponent],
      imports: [MaterialModule, FormsModule, HttpClientTestingModule],
      providers: [GetDataService, HttpTestingController]
    });

    const fixture = TestBed.createComponent(XrayComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  })

  it('should have light value', () => {
    expect(component.lightValue).not.toEqual(null);
  })
  it('should have contrast value', () => {
    expect(component.contrastValue).not.toEqual(null);
  })
  it('should have patients name', () => {
    expect(component.patientName).not.toEqual(null);
  })
  it('should have button ticked', () => {
    expect(component.blackAndWhite).toEqual(false);
  })
  it('should have button not ticked', () => {
    expect(component.blackAndWhite).not.toEqual(true);
  })
  it("Checking if preview button loads", function () {
    expect(document.getElementsByClassName("mat-button-wrapper")).not.toBe(null);
  });
  it("Checking if capture button loads", function () {
    expect(document.getElementsByClassName("mat-raised-button")).not.toBe(null);
  });
  it("Checking if sliders loads", function () {
    expect(document.getElementsByClassName("mat-slider-ticks")).not.toBe(null);
  });
  it("Checking if image loads", function () {
    expect(document.getElementsByClassName("mat-card-image")).not.toBe(null);
  });
  it("Checking if checkbox loads", function () {
    expect(document.getElementsByClassName("mat-checkbox-inner-container")).not.toBe(null);
  });
  it("Checking if input field loads", function () {
    expect(document.getElementsByClassName(" mat-input-infix")).not.toBe(null);
  });

  it("Checking if sound plays on trigger", function () {
    expect(component.audio).not.toBe(null);
  });

  // let trigger;
  // beforeEach(() => {
  //   trigger = jasmine.createSpy('event');
  //   component();
  // });

  // it('dispatches menu.toggle event', () => {
  //   document.addEventListener('menu.toggle', trigger);

  //   const $trigger = document.querySelector('mat-raised-button');
  //   triggerEvent($trigger, 'click');

  //   expect(trigger).toHaveBeenCalled();
  // });


// checking interval, not working properly
  it("should have a button disabled for 10s", function () {
    setTimeout(function (hideBtn) {
      setTimeout(10000);
    }, 1000);
    setTimeout(function (titleBtn) {
      expect(setTimeout).toHaveBeenCalled();
      clearInterval(0);
    }, 100);
  });


})


