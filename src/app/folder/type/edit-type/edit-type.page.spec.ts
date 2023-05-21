import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTypePage } from './edit-type.page';

describe('EditTypePage', () => {
  let component: EditTypePage;
  let fixture: ComponentFixture<EditTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
