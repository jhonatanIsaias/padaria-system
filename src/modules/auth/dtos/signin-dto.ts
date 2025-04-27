import { AuthTokenResponsePassword } from "@supabase/supabase-js";

export class SigninDto{
    accessToken?:string;
    user_id?:string;

   static of(authTokenResponsePassword: AuthTokenResponsePassword):SigninDto{
     const data = new SigninDto();

     data.accessToken = authTokenResponsePassword.data.session?.access_token;
     data.user_id = authTokenResponsePassword.data.user?.id;

     return data;
   }
   
}