"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import './WhatsappLive.css'

const WhatsappLive = () => {
    const message = "Bonjour, je suis intéressé par la location d'une voiture. Pouvez-vous m'aider à choisir un véhicule adapté à mes besoins ?";
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(()=>{
        const handleScroll=()=>{
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            if(window.scrollY > 100){
                whatsappLinkElement?.classList.add("visible")
            }else{
                whatsappLinkElement?.classList.remove("visible")
            }
        };

        const checkScrollVisibility = ()=>{
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if(scrollHeight > clientHeight){
                handleScroll();
                window.addEventListener("scroll", handleScroll);

            }else{
                whatsappLinkElement?.classList.add("visible")
            }
        }


        checkScrollVisibility();
        // window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        };

    },[])
  return (
    <div>
        <a
            className='whatsapp-link relative'
            href={whatsappLink}
            target="_blank"
            rel='noreferrer noopener'
        >
            <span className='absolute left-[7px] top-[7px] z-50 size-10'>
                <span className='flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75 w-10 h-10'>
                </span>
            </span>
            <Image src="/assets/whatsapp.png" alt="whatsapp" width={40} height={40} className="whatsapp-icon z-50" />

        </a>

    </div>
  )
}

export default WhatsappLive