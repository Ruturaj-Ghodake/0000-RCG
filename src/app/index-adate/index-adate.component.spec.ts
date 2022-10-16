import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexADateComponent } from './index-adate.component';

describe('IndexADateComponent', () => {
  let component: IndexADateComponent;
  let fixture: ComponentFixture<IndexADateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexADateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexADateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
