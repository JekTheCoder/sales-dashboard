import { InjectionToken } from "@angular/core";

export interface MeMatcher {
  isMe(id: string): boolean;
}

export const MeMatcher = new InjectionToken<MeMatcher>("MeMatcher");
