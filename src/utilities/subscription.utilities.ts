import { Subscription } from "rxjs";

export function addOrAssign(newSubscription: Subscription, existingSubscription?: Subscription): Subscription {
  if (!existingSubscription) {
    return newSubscription
  }
  existingSubscription.add(newSubscription);
  return existingSubscription;
}
