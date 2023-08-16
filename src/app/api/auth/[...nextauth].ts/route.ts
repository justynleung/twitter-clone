import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_ID!,
            clientSecret: process.env.TWITTER_SECRET!,
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)