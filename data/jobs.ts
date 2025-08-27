import { Job } from '@/types/job'

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    salary: {
      min: 150000,
      max: 250000,
      currency: 'USD'
    },
    description: 'We\u2019re seeking a Senior Full-Stack Engineer to help scale Gondi to the next stage of growth. You\u2019ll own the development of critical product features, shape the architecture of our platform, and bring entrepreneurial initiative to an ambitious and fast-moving team.',
    requirements: [
      '5+ years full-stack engineering (No programming language required, our stack is in Next.js and Python)',
      'Strong product instincts and entrepreneurial mindset',
      'Proven experience building secure, scalable, production-grade systems',
      'Excellent collaboration and communication skills',
      'Bonus: experience with Ethereum, Solidity, or DeFi/NFT platforms'
    ],
    responsibilities: [
      'Design, build, and ship end-to-end features across frontend and backend',
      'Translate complex NFT lending and trading logic into seamless user experiences',
      'Collaborate with product, design, and protocol engineers to deliver scalable solutions',
      'Ensure high standards for security, code quality, testing, and reliability',
      'Mentor peers and contribute to Gondi\u2019s engineering culture'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Unlimited PTO and flexible working hours',
      'Remote work options',
      'Top-tier hardware and equipment'
    ],
    postedAt: new Date('2024-01-15'),
    applicationEmail: 'e@floridastreet.xyz',
    tags: ['Next.js', 'Python', 'Full Stack', 'NFT', 'DeFi', 'Ethereum']
  },
  {
    id: '2',
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    salary: {
      min: 140000,
      max: 200000,
      currency: 'USD'
    },
    description: 'We\u2019re seeking a Senior Product Designer to help shape the future onchain credit and trading. You\u2019ll lead design for critical product features, establish design systems that scale, and bring creative problem-solving to complex financial workflows in an ambitious and fast-moving environment.',
    requirements: [
      '5+ years product design experience with a focus on complex web applications or financial products',
      'Strong portfolio demonstrating systematic thinking and polished visual design skills',
      'Proven experience designing for technical users and complex workflows',
      'Proficiency in design tools (Figma, etc.) and understanding of frontend development constraints',
      'Excellent collaboration skills and ability to advocate for user needs across cross-functional teams',
      'Experience with user research methodologies and data-driven design decisions',
      'Bonus: experience with DeFi, trading platforms, or blockchain applications'
    ],
    responsibilities: [
      'Design end-to-end user experiences for NFT lending, trading, and portfolio management features',
      'Transform complex financial concepts and blockchain interactions into intuitive, accessible interfaces',
      'Collaborate closely with engineering, product, and founder to deliver cohesive product experiences',
      'Establish and maintain design systems, patterns, and guidelines that scale across the platform',
      'Conduct user research and usability testing to validate design decisions and identify opportunities',
      'Mentor design team members and contribute to Gondi\u2019s design culture and standards'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Unlimited PTO and flexible working hours',
      'Remote work options'
    ],
    postedAt: new Date('2024-01-20'),
    applicationEmail: 'burga@floridastreet.xyz',
    tags: ['Product Design', 'Figma', 'Design Systems', 'NFT', 'DeFi', 'Trading']
  }
]