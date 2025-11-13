import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],*/
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TEST 1: below im testing if the headerText is working

  it('Should render headerText in an h1 tag', () => {
    component.headerText = 'Welcome!';
  fixture.detectChanges();

const compiled = fixture.nativeElement as HTMLElement;
expect(compiled.querySelector('h1')?.textContent).toContain('Welcome!');
});

});
