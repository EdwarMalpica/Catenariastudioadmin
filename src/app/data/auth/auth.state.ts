
export interface User {
  id: number;
  name: string;
  email: string;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: string;
  numero_telefonico: string;
}


export interface AuthState {
  token: string;
  user: User;
  isLoading: boolean;
}

export const initialState: AuthState = {
  token: '293|s8CCYDKFc48Y2kGS5pexKpFsvejawpNw9yN0zASVed29b3cb',
  user: {
    id: 0,
    name: '',
    email: '',
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    numero_telefonico: '',
  },
  isLoading: false,
};


