import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface ListUsers {
  users: Array<User>
}

export async function getUser(): Promise<User[]> {
  const { data } = await api.get<ListUsers>('/users')

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
    }
  })

  return users
}

export function useUsers()  {
  return useQuery('users', getUser, {
    staleTime: 1000 * 5 // 5 seconds
  }) 
}
