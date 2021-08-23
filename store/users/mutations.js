import { v4 as uuidV4 } from 'uuid'

export default {
  add(state, user) {
    state.users.unshift({
      ...user,
      id: uuidV4(),
    })
  },
  edit(state, { id, name, gender, email }) {
    const users = state.users
    const foundId = users.findIndex((item) => item.id === id)
    users[foundId].name = name
    users[foundId].gender = gender
    users[foundId].email = email
  },
  delete(state, { id }) {
    const users = state.users
    for (let i = users.length - 1; i >= 0; --i) {
      if (users[i].id === id) {
        users.splice(i, 1)
        break
      }
    }
  },
}
