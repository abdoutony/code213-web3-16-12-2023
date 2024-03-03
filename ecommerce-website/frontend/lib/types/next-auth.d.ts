import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    // user: {
    //   id: string;
    //   username: string;
    //   email: string;
    //   accessToken: string;
    // };
    user: {
      data:{
        _id: string;
        firsname: string;
        lastname: string;
        email: string;
        accessToken: string;
      }
    };
  }
}
