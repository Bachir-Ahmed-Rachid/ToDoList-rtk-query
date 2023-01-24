import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    tagTypes: ['Todos'],
    endpoints: builder => ({
      getTodos: builder.query({
        query: () => '/todos',
        providesTags: ['Post']
      }),
      getTodo: builder.query({
        query: (id) => `/todos/${id}`
      }),
      addNewTodo: builder.mutation({
        query: todo=> ({
          url: '/todos',
          method: 'POST',
          body:  todo
        }),
         invalidatesTags: ['Post']
      }),
      updateTodo: builder.mutation({
        query: todo=> ({
          url: `/todos/${todo.id}`,
          method: 'PUT',
          body:  todo
        }),
         invalidatesTags: ['Post']
      }),
      deleteTodo: builder.mutation({
        query: id=> ({
          url: `/todos/${id}`,
          method: 'DELETE',
          body:  id
        }),
         invalidatesTags: ['Post']
      })
    })
  })
  export const {
     useGetTodosQuery ,
     useGetTodoQuery ,
     useUpdateTodoMutation ,
     useAddNewTodoMutation ,
     useDeleteTodoMutation ,


} = apiSlice