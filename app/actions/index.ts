'use server'
import { signIn, signOut } from "@/auth";
interface Action{
    get(arg0: string): unknown;
    
}

export async function doSocialLogin(formData:FormData) {
    const action = formData.get('action');
    if (typeof action === 'string') {
        await signIn(action, { redirectTo: "/" });
    }
}
