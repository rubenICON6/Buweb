import School from '@/components/school/School'
import React from 'react'

export default function SchoolOfScience() {
  return (
    <section className='my-20 mt-36 mx-10'>
      <School 
        dean='Dr. Lowu Francis'
        deanImage={'/images/blog/author-03.png'}
        message='As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems.'
        preamble='The School of Science and Technology prepares professionals that can harness the potentials of computer and information sciences to provide relevant solutions. The School faculty and students are engaged in ongoing research projects and development of computer solutions in the areas of education, health, public administration, information management, ecommerce, and agriculture. The undergraduate and graduate programs offered in both Blended and Online Learning environments focus on Information Systems, Computer Networks Security and Systems Engineering.'
        goal='To produce quality human resource capital that will steer the continent into the next industrial revolution.'/>
    </section>
  )
}
