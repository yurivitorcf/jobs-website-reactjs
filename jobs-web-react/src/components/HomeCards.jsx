import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className='text-2xl font-bold'>For Employees</h2>
              <p className='mt-2 mb-4'>
                Browse our jobs and start your career today
              </p>
              <a
                href='/jobs'
                className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
              >
                Browse Jobs
              </a>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Employees</h2>
            <p className='mt-2 mb-4'>
              List your job to find the perfect role for you
            </p>
            <a
              href='/jobs'
                lassName='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Add Job
            </a>  
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards
