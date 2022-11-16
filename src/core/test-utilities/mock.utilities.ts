export function createMockNotificationService(): any {
  return {
    info: (message: string) => { },
    success: (message: string) => { },
    warn: (message: string) => { },
    error: (message: string) => { },
  }
}
