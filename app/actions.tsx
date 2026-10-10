'use server';

import {EmailTemplate} from "@/app/components/email-template";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeUser(formData: FormData) {
    const email = formData.get('email') as string;
    if(!email){
        return { success: false, error: 'Email is required'};
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email],
            subject: 'Your Subscription to AvenueSeekers was confirmed!',
            react: <EmailTemplate email={email}/> ,
        });

        if (error) {
            return { success: false, error: error.message};
        }

        return { success: true};
    } catch (err) {
        console.error('Subscribe error:', err);
        return { success: false, error: 'Something went wrong'};
    }
}