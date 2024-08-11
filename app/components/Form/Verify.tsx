'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Verify: React.FC = () => {
    const email = localStorage.getItem('email');
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(30); // Time in seconds
    const router = useRouter();

    useEffect(() => {
        // Set up the interval to count down every second
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const handleInputChange = (index: number, value: string) => {
        if (value === '' || (value >= '0' && value <= '9')) {
            const updatedVerificationCode = [...verificationCode];
            updatedVerificationCode[index] = value;
            setVerificationCode(updatedVerificationCode);

            if (value !== '' && index < 3) {
                const nextIndex = index + 1;
                const nextInput = document.getElementById(`input-${nextIndex}`) as HTMLInputElement;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
            const updatedVerificationCode = [...verificationCode];
            updatedVerificationCode[index - 1] = '';
            setVerificationCode(updatedVerificationCode);
            const prevInput = document.getElementById(`input-${index - 1}`) as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const codeString = verificationCode.join('');
        const response = await fetch(`https://akil-backend.onrender.com/verify-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            OTP: codeString,
          }),
        });
        const res = await response.json();
    
        if (res.success) {
            localStorage.clear();
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            router.push('/home');
        } else {
            alert(res.message);
            console.log(res);
        }
        console.log(codeString); 
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md py-10 px-15'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Verify Email</h1>
                <p className='text-gray-600 mb-6 text-center'>
                    We've sent a verification code to the email address you provided. 
                    To complete the verification process, please enter the code here.
                </p>
                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                    <div className='flex space-x-2 mb-4'>
                        {[...Array(4)].map((_, index) => (
                            <input 
                                key={index}
                                id={`input-${index}`}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                type="number" 
                                value={verificationCode[index]}
                                className='w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500' 
                                maxLength={1}
                            />
                        ))}
                    </div>
                    <p className='text-gray-600 mb-4'>
                        You can request to <a href="#" className='text-blue-500 hover:underline'>Resend code</a> in
                        <span className='text-blue-500'> {formatTime(timeLeft)}</span>
                    </p>
                    <button 
                        type="submit" 
                        className='w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Verify;
