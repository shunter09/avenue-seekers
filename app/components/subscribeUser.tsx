'use client';
import {subscribeUser} from "@/app/actions";
import {useState} from "react";
import BTNComponent from "@/app/components/keyfeaturesbtn";

export default function SubscribeUser() {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');


    async function handleFormSubmit(formData: FormData) {
        setStatus('idle');
        const result = await subscribeUser(formData);
        if (result.success) {
            setStatus('success');
            setMessage('Check your inbox! You have successfully subscribed to AvenueSeekers');
        } else {
            setStatus('error');
            setMessage(result.error || 'Failed to subscribe');
        }
    }

    return (
        <section className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-9 flex items-center justify-center">
            <div className="font-fredoka text-[#405068] text-4xl text-center mb-8">
                <h2>Subscribe for weekly updates on new jobs, <br/>volunteer, and internship opportunities!</h2>
                <form action={handleFormSubmit} className="flex flex-col justify-center items-center gap-6 mt-8 ">
                    <input type="email" name="email" id="email" required placeholder="example@gmail.com" className="text-center text-3xl border rounded-lg"></input>
                    <BTNComponent/>
                    {status === 'success' && <p>{message}</p>}
                    {status === 'error' && <p>{message}</p>}
                </form>
            </div>


        </section>
    );
}