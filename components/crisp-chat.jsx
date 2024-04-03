'use client'

import { useEffect } from "react"

const { Crisp } = require("crisp-sdk-web")

export const CrispChat=()=>{
    useEffect(()=>{
        Crisp.configure("90622ed9-e8ae-465b-b015-b0eede551204")
    },[])

    return null
}