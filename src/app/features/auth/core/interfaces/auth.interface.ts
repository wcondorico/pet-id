export interface Tokens {
  access: string,
  refresh: string
}

export interface SignUp {
  name: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignIn {
  email: string;
  password: string;
}
