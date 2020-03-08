import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimlasComponent } from './add-animlas.component';

describe('AddAnimlasComponent', () => {
  let component: AddAnimlasComponent;
  let fixture: ComponentFixture<AddAnimlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
