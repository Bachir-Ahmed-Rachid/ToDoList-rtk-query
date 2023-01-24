import React from 'react'
import { useGetTodoQuery } from '../api/apiSlice'

const Todo = () => {
    const {
        data: todo,
        isLoading,
        isSuccess,
        isError,
        error
      } = useGetTodoQuery(1)
      
    let content;
    if(isLoading){
       content=<><p>Loading...</p></>
   } else if(isSuccess) {
       content=<p>{JSON.stringify(todo)}</p>
   }
   else if(isError) (
       content=<><p>{error}...</p></>
   )
  return (
    <main>
    {content}
</main>
  )
}

export default Todo