import { Meeting } from '@modules/meeting/types';
import { messages } from '@modules/chat/chats.data';

const annotations: Annotation[] = [
  {
    id: 'annotation001',
    seller: {
      id: 'user101',
      name: 'Alice Smith',
    },
    content:
      'Ya se le presentó un resumen del servicio "ADMINISTRACION RESTAURANTE"',
    date: '2020-01-01',
  },
  {
    id: 'annotation002',
    seller: {
      id: 'user202',
      name: 'Bob Johnson',
    },
    content:
      'Se realizaron pruebas de funcionamiento del servicio "ADMINISTRACION RESTAURANTE"',
    date: '2020-01-01',
  },
  {
    id: 'annotation003',
    seller: {
      id: 'user303',
      name: 'Eva Martinez',
    },
    content:
      'Se le explicó el método de pago del servicio "ADMINISTRACION RESTAURANTE"',
    date: '2020-01-01',
  },
];

export const meeting = {
  id: 'aa',
  name: 'Meeting',
  client: {
    id: 'aa2',
    name: 'Client',
    avatar: 'https://via.placeholder.com/150',
    phone: '+1 234 567 890',
    email: 'k3E9Z@example.com',
    company: {
      name: 'Company',
    },
  },
  chat: {
    id: 'aa3',
    messages,
  },
  annotations,
};

type Annotation = {
  id: string;
  seller: {
    id: string;
    name: string;
  };
  content: string;
  date: string;
};
