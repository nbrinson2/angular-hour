import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { of } from "rxjs";
import { SearchExampleComponent } from "./search-example.component";
import { SearchService } from "./search.service";

describe("SearchExampleComponent with Mock", () => {
  let component: SearchExampleComponent;
  let fixture: ComponentFixture<SearchExampleComponent>;
  let searchServiceMock: any;

  beforeEach(() => {
    searchServiceMock = {
      search: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [SearchExampleComponent],
      providers: [{ provide: SearchService, useValue: searchServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("ngOnInit", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should create the component", () => {
      expect(component).toBeTruthy();
    });

    it("should call searchService.search and update searchResults on input event", fakeAsync(() => {
      const searchInput = fixture.nativeElement.querySelector("input");
      const mockResults = ["result1", "result2"];
      searchServiceMock.search.mockReturnValue(of(mockResults));

      searchInput.value = "test";
      searchInput.dispatchEvent(new Event("input"));
      tick(600); // Simulate debounceTime

      expect(searchServiceMock.search).toHaveBeenCalledWith("test");
      expect(component.searchResults).toEqual(mockResults);
    }));

  });
});
