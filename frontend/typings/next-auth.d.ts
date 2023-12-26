import { SignInDto } from '@/endpoints/axios/auth';

declare module 'next-auth' {
  interface Session {
    user: SignInDto;
  }
}
