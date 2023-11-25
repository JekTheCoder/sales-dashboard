import { Meeting } from '@modules/meeting/types';

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
    messages: [
      {
        id: 'message001',
        user: {
          id: 'user101',
          name: 'Alice Smith',
          avatar: 'alice_avatar.jpg',
        },
        content: 'Hello, how are you?',
      },
      {
        id: 'message002',
        user: {
          id: 'user202',
          name: 'Bob Johnson',
          avatar: 'bob_avatar.jpg',
        },
        content: 'I am fine, thank you',
      },
    ],
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
