"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import whatsappIcon from '@assets/images/whatsapp.png';
import { Container } from 'react-bootstrap';
import "@styles/whatsappIcon.scss";

const WhatsappIcon = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <Container fluid>
            <div className='whatsapp-icon'>
                <a href="https://wa.me/9116577183" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={whatsappIcon}
                        alt="WhatsApp"
                        className='whatsapp-icon-img'
                        width={50}
                        height={50}
                    />
                </a>
            </div>
        </Container>
    );
};

export default WhatsappIcon;