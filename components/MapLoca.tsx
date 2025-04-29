import React from 'react'

const MapLoca = () => {
  return (
    <div className="w-full h-[400px]">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.4556949066282!2d-7.631231245648126!3d33.55973089582048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d5d884a822f%3A0xfc9a5557995d0ec5!2sGare%20CASA%20OASIS!5e0!3m2!1sfr!2sma!4v1745938839560!5m2!1sfr!2sma"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        >

        </iframe>
    </div>

  )
}

export default MapLoca