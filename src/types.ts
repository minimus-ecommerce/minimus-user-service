export type User = {
  id: string;
  user_name: string;
  first_name: string;
  last_name: string;
  created_at: string;
};

export type UserCreatePayload = Omit<User, "id" | "created_at">;

export type UserUpdatePayload = Partial<UserCreatePayload>;
