import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '@app/global/get-data.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
 // let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        CoreModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [LoginComponent],
      providers: [GetDataService, HttpTestingController]
    })
      .compileComponents();
  }));


//   // const fixture = TestBed.createComponent(LoginComponent);
//   // component = fixture.componentInstance;
  
// describe('should have login module loaded', () => {
describe('Component: LoginComponent', () => {
  let component: LoginComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MaterialModule, FormsModule, HttpClientTestingModule],
      providers: [GetDataService, HttpTestingController]
    });

    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it('check if login module loads',
    () => expect(component.loginForm).not.toBe(null));
});
});
