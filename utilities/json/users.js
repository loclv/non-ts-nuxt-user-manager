import { v4 as uuidV4 } from 'uuid'
import { GendersEnum } from '@/utilities/model'

const users = [
  {
    name: 'Frozen Yogurt',
    gender: GendersEnum.WOMAN,
  },
  {
    name: 'Ice cream sandwich',
    gender: GendersEnum.MAN,
  },
  {
    name: 'Eclair',
    gender: GendersEnum.OTHER,
  },
  {
    name: 'Cupcake',
    gender: GendersEnum.WOMAN,
  },
  {
    name: 'Gingerbread',
    gender: GendersEnum.OTHER,
  },
  {
    name: 'Jelly bean',
    gender: GendersEnum.MAN,
  },
  {
    name: 'Lollipop',
    gender: GendersEnum.MAN,
  },
  {
    name: 'Honeycomb',
    gender: GendersEnum.OTHER,
  },
  {
    name: 'Donut',
    gender: GendersEnum.WOMAN,
  },
  {
    name: 'KitKat',
    gender: GendersEnum.MAN,
  },
]

for (let i = 0; i < users.length; i++) {
  users[i].id = uuidV4()
}

export { users }
