import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditNumberBlockPage } from './edit-number-block.page';

describe('EditNumberBlockPage', () => {
  let component: EditNumberBlockPage;
  let fixture: ComponentFixture<EditNumberBlockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditNumberBlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
