import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let mockService : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ UserService ],
      imports: [HttpClientTestingModule],
      declarations: [ AddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(UserService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
