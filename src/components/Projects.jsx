import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ProjectItemCard from "./ProjectItemCard";

const Projects = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.jsonbin.io/v3/b/669a0cc7ad19ca34f889b787',
      )
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-8">My projects</h1>
      <div className="grid grid-cols-4">
      {
        data.record.map((project)=>(
          <ProjectItemCard title={project.title} image={project.thumbnail}/>
        ))
      }
      </div>
    </div>
  )
};

export default Projects;
