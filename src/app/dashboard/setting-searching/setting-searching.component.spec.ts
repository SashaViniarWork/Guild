import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSearchingComponent } from './setting-searching.component';

describe('SettingSearchingComponent', () => {
  let component: SettingSearchingComponent;
  let fixture: ComponentFixture<SettingSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
