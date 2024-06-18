import School from '@/components/school/School'
import React from 'react'

export default function SchoolOfEducation() {
  return (
    <section className='my-20 mt-36 mx-10'>
      <School 
        dean='DR. SSERUNJOGI CHARLES'
        deanImage={'/images/blog/author-03.png'}
        message='Having made a choice to join the school of education Bugema University, I take this opportunity to welcome you and assure you that you have made the best decision. As school of education, we look forward to serving you with a complete package.'
        preamble='The School of Education believes that a true teacher is one that is mentally, physically and spiritually sound to impart the same virtues in his/her learners making them best suited for service to God and mankind in this world and in the world to come.'
        goal='1. Train educators in the light of the Seventh day Adventist philosophy of education, which places emphasis on restoring the image of God in mankind through a harmonious development of the physical, mental, spiritual and social powers. 
        2. Impart in student-teachers knowledge and skills that will make them effective and efficient teachers in various levels of education. 
        3. Equip students with relevant knowledge and skills to enable them assume leadership roles in the educational systems and other institutions of society. 
        4. Develop educators who will seek to identify themselves with and create a positive impact on the youth who make up a large percentage of our society. 
        5. Prepare candidates for higher education.'/>
    </section>
  )
}
