import { fakeAsync, TestBed } from "@angular/core/testing";
import { VocabService } from "..";
import { NotificationService } from "../../../../core";
import { createMockNotificationService } from "../../../../core/test-utilities";
import { AuthenticationService } from "../../../authentication/services";
import { createMockAuthenticationService, stubbyMcStubface } from "../../../authentication/test-utilities";
import { VocabList } from "../../models";
import { VocabListsResolver } from "../vocab-lists.resolver";

describe(VocabListsResolver.name, () => {
  let resolver: VocabListsResolver;
  let mockVocabListService: any;
  let mockActivatedRouteSnapshot: any;
  let mockRouterStateSnapshot: any;
  let mockAuthenticationService: any;
  let mockNotificationService: any;

  beforeEach(() => {
    mockVocabListService = jasmine.createSpyObj("mockVocabListService", ["get"]);
    mockActivatedRouteSnapshot = jasmine.createSpy("mockActivatedRoute");
    mockRouterStateSnapshot = jasmine.createSpy("mockRouterStateSnapshot");
    mockAuthenticationService = createMockAuthenticationService();
    mockNotificationService = createMockNotificationService();

    TestBed.configureTestingModule({
      providers: [
        { provide: VocabService, useValue: mockVocabListService as VocabService },
        { provide: AuthenticationService, useValue: mockAuthenticationService as AuthenticationService },
        { provide: NotificationService, useValue: mockNotificationService as NotificationService },
        VocabListsResolver
      ],
    });

    resolver = TestBed.inject(VocabListsResolver);
  });

  describe("resolve", () => {
    it("Should call VocabListService.get if the user is defined", () => {
      spyOnProperty(mockAuthenticationService, "currentUser", "get")
        .and.returnValue(stubbyMcStubface);

      resolver.resolve(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(mockVocabListService.get).toHaveBeenCalledOnceWith(stubbyMcStubface.id);
    });

    it("Should display an error notification if the current user is undefined", () => {
      spyOnProperty(mockAuthenticationService, "currentUser", "get").and.returnValue(undefined);
      spyOn(mockNotificationService, "error");

      resolver.resolve(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(mockNotificationService.error).toHaveBeenCalledTimes(1);
    });

    it("Should return an error observable if the current user is undefined", fakeAsync(() => {
      spyOnProperty(mockAuthenticationService, "currentUser", "get").and.returnValue(undefined);

      resolver.resolve(mockActivatedRouteSnapshot, mockRouterStateSnapshot)
        .subscribe({
          next: (lists: VocabList[]) => fail("Expected error in observable."),
          error: (e) => expect(true).toBeTrue(),
        });
    }));
  });
});
