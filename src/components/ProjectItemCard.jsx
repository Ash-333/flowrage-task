import React from 'react'

const ProjectItemCard = ({title,image}) => {
  return (
    <div className='w-72 h-64 bg-slate-400 p-2 rounded-lg mb-6 hover:scale-105'>
        <img className='w-full h-4/5 object-cover rounded-lg mt-1' src={image} alt="project_thumbnail" />
        <h1 className='text-center mt-4 font-semibold text-white'>{title}</h1>
    </div>
  )
}

export default ProjectItemCard