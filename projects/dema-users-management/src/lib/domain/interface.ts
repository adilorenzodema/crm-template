export interface UserProfile {
  profileCode: string;
  profileName: string;
}

export type Code = 'delete-user' | 'edit-user' | 'insert-user' | 'view-user' | 'activate-user';

export interface Operations {
  code: Code;
  description: string;
  value: string;
}
export interface Permissions {
  menuItemKey: string;
  operations: Operations[];
}
