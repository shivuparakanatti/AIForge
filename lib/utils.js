import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path){
  return `{process.env.NEXT_PUBLIC_API_URL}${path}`
}
