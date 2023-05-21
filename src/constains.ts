export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface LoginDetails {
  username: string;
  password: string;
}

export interface Contact {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

