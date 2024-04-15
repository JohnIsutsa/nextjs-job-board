import JobListItem from '@/components/JobListItem'
import prisma from '@/lib/prisma'

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main className='max-w-5xl m-auto px-3 my-10 space-y-10'>
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <JobListItem job={job} key={job.id} />
        ))}
      </ul>
    </main>
  )
}
