"use client";

import React from "react"
import { ContactModalProvider } from "./contact-modal-context";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ContactModalProvider>
            {children}
        </ContactModalProvider>
    );
};

export default Providers
