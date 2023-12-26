import { SignInDto } from '@/api/axios/auth';

declare module 'next-auth' {
  interface Session {
    user: SignInDto;
  }
}
