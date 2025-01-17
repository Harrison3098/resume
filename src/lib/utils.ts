import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// 用于合并 className
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
