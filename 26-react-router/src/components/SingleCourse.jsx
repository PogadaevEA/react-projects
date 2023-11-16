import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react'

const SingleCourse = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slag === slug)

  useEffect(() => {
      if (!course) {
        navigate('..', { relative: 'path' })
      }
  }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <Link
        to=".."
        relative="path"
      >
        Back to courses
      </Link>
    </>
  )
}

export default SingleCourse
