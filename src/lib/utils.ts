import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAvatarFallback(name:string){
  const firstLetters = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('');
    return firstLetters;

}
