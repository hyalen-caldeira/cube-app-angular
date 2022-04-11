import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let http: HttpClient;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ UserService ],
      imports: [HttpClientTestingModule],
      declarations: [ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should update user when http put methos is called', () => {
    const mockData = {
      id: 1,
      name: 'Any name'
    }

    const headers = new HttpHeaders()
      .set('content-type', 'application/vnd.spring-template.user.v1+json')
      .set('accept', 'application/vnd.spring-template.user.v1+json')
      .set('Access-Control-Allow-Origin', '*');

    service.update(1, mockData).subscribe((res) => {
      console.log("I'm here ...");
      expect(res).toEqual(mockData);
    })

    const req = controller.expectOne('http://localhost:8080/api/users/1');
    req.flush(mockData);

    expect(req.request.body).toEqual(mockData);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.headers).toEqual(headers);
  });
});

// 2 components talk to each other, child components, input/output property, not related
// Testing components childrens
// Router states - pass info from one component to another
// input/output parent --> child and vice versa