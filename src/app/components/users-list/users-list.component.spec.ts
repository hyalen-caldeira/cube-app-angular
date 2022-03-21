import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListComponent } from './users-list.component';
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let mockService : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ UserService ],
      imports: [HttpClientTestingModule],
      declarations: [ UsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(UserService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
