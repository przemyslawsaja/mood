import { withAuth } from 'next-auth/middleware';
import {RoutePath} from "@/constants/routing";

export default withAuth({
    pages: {
        signIn: RoutePath.SIGN_IN,
    },
});

export const config = { matcher: ["/dashboard/:path*"] };
