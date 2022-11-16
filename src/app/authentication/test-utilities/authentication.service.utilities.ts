import { User } from "../../shared/models";

export const stubbyMcStubface: User = {
  id: "479b7890-74ba-4b52-a0eb-884a9e5f5c52",
  firstName: "Stubby",
  surname: "McStubface",
  username: "Stubby",
  password: "Stubby123",
};

export function createMockAuthenticationService(): any {
  const mockAuthenticationService = {};
  Object.defineProperty(mockAuthenticationService, "currentUser", {
    configurable: true,
    get: () => stubbyMcStubface
  });

  Object.defineProperty(mockAuthenticationService, "isAuthenticated", {
    configurable: true,
    get: () => true,
  });
  return mockAuthenticationService;
}
