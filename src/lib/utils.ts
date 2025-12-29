import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function calculateDuration(
  startDate: string,
  endDate: string | 'Present',
): string {
  const start = new Date(startDate)
  const end = endDate === 'Present' ? new Date() : new Date(endDate)

  // Calculate difference in months
  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()

  // Adjust for negative months
  if (months < 0) {
    years--
    months += 12
  }

  // Add 1 month to include the start month in the count (e.g. Jan to Jan is 1 month)
  months += 1
  if (months >= 12) {
    years++
    months -= 12
  }

  if (years > 0) {
    return `${years} yr${years > 1 ? 's' : ''} ${months > 0 ? ` ${months} mo${months > 1 ? 's' : ''}` : ''}`
  }
  return `${months} mo${months > 1 ? 's' : ''}`
}

export function formatDate(dateString: string | 'Present'): string {
  if (dateString === 'Present') return 'Present'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
