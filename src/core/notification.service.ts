export abstract class NotificationService {
  public abstract info(message: string): void;
  public abstract success(message: string): void;
  public abstract warn(message: string): void;
  public abstract error(message: string): void;
}
