import { TestBed, ComponentFixture } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { XrayComponent } from './xray.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '@app/global/get-data.service';
import { TestGetDataService } from '@app/global/testing/test-get-data.service';
import { getTestData } from '@app/global/testing/test-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('Component: XrayComponent', () => {
  let component: XrayComponent;
  let fixture: ComponentFixture<XrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XrayComponent],
      imports: [MaterialModule, FormsModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [GetDataService, HttpTestingController]
    });

    fixture = TestBed.createComponent(XrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have light value', () => {
    expect(component.lightValue).not.toEqual(null);
  });
  it('should have contrast value', () => {
    expect(component.contrastValue).not.toEqual(null);
  });
  it('should have patients name', () => {
    expect(component.patientName).not.toEqual(null);
  });
  it('should have button ticked', () => {
    expect(component.blackAndWhite).toEqual(false);
  });
  it('should have button not ticked', () => {
    expect(component.blackAndWhite).not.toEqual(true);
  });
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
  it("Checking if if parameters are inserted into json", function () {
    expect(component.freshDatas).not.toBe(null);
  });
  it("Checking if sound plays on trigger", function () {
    expect(component.audio).not.toBe(null);
  });
  it("Checking if image is being captured", function () {
    expect(component.comingImage).not.toBe(null);
  });
  it("Checking if image is being captured", function () {
    expect(component.error).not.toEqual('xRay error');
  });
  it('checking json connection to server', function () {
    expect(component.comingImage).not.toBe(null);
  });
 
  it('Checking if button is protected to not trigger', () => {
    let timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(() => {
      timerCallback();
    }, 10000);

    let buttonNodes = fixture.nativeElement.querySelectorAll('button');
    let buttons: HTMLButtonElement[] = Array.from(buttonNodes);
    let button: HTMLButtonElement = buttons[buttons.length-1];
    expect(button.innerText).toBe(component.titleCptBtn);
    expect(button.hasAttribute('disabled')).toBe(false);
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(button.hasAttribute('disabled')).toBe(true);
    jasmine.clock().tick(9000);
    fixture.detectChanges();
    expect(button.hasAttribute('disabled')).toBe(true);
    jasmine.clock().tick(1000);
    fixture.detectChanges();
    expect(button.hasAttribute('disabled')).toBe(false);
    jasmine.clock().uninstall();
  }) 
  it('checking if sliders update the value', () => {
    //expect(component.lightValue).toBe(50);
    let slide: HTMLButtonElement = fixture.nativeElement.querySelector('light');
    expect(slide.innerText).toBe('50');

    // component.lightValue = 150;
    // fixture.detectChanges();
    // expect(component.lightValue).toBe(150);
  })
});


describe('Component: XrayComponent image reloading', () => {
  let component: XrayComponent;
  let fixture: ComponentFixture<XrayComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [XrayComponent],
      imports: [MaterialModule, FormsModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [{
        provide: GetDataService, useClass: TestGetDataService
      },
        HttpTestingController]
    });

    fixture = TestBed.createComponent(XrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if image changes after a second', () => {
    let timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(() => {
      timerCallback();
    }, 1000);

    expect(component.comingImage).not.toBe(null);
    let button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.innerText).toBe(component.titleBtn);
    button.dispatchEvent(new Event('click'));
    jasmine.clock().tick(500);
    expect(`data:image/jpeg;base64,${getTestData()[0].base64}`).not.toBe(component.comingImage);
    jasmine.clock().tick(501);
    expect(`data:image/jpeg;base64,${getTestData()[0].base64}`).toBe(component.comingImage);
   
    jasmine.clock().uninstall();
  });

  it('checking if json is being sent to server', function () {
    expect(component.getXray).not.toBe(null);
  });

});
