'use client'

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface MiSessioProps {
    children: ReactNode
}

const MiSessionProvider: FC<MiSessioProps> = ({children})  => {
    return <SessionProvider>{children}</SessionProvider>
}

export default MiSessionProvider