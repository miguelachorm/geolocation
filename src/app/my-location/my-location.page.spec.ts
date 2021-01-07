import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyLocationPage } from './my-location.page';

describe('MyLocationPage', () => {
  let component: MyLocationPage;
  let fixture: ComponentFixture<MyLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
