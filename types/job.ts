export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  remote: boolean
  salary?: {
    min: number
    max: number
    currency: string
  }
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  postedAt: Date
  applicationEmail: string
  tags: string[]
}
