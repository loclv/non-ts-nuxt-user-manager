import { v4 as uuidV4 } from 'uuid'
import { GendersEnum } from '@/utilities/model'

const users = [
  {
    name: 'Frozen Yogurt',
    gender: GendersEnum.WOMAN,
    email: 'frozen@frozen.co',
  },
  {
    name: 'Ice cream sandwich',
    gender: GendersEnum.MAN,
    email: 'ice@ice.co',
  },
  {
    name: 'Eclair',
    gender: GendersEnum.OTHER,
    email: 'eclair@eclair.co',
  },
  {
    name: 'Cupcake',
    gender: GendersEnum.WOMAN,
    email: 'cupcake@cupcake.co',
  },
  {
    name: 'Gingerbread',
    gender: GendersEnum.OTHER,
    email: 'gingerbread@gingerbread.co',
  },
  {
    name: 'Jelly bean',
    gender: GendersEnum.MAN,
    email: 'jelly@bean.co',
  },
  {
    name: 'Lollipop',
    gender: GendersEnum.MAN,
    email: 'lollipop@lollipop.co',
  },
  {
    name: 'Honeycomb',
    gender: GendersEnum.OTHER,
    email: 'honeycomb@honeycomb.co',
  },
  {
    name: 'Donut',
    gender: GendersEnum.WOMAN,
    email: 'donut@donut.co',
  },
  {
    name: 'KitKat',
    gender: GendersEnum.MAN,
    email: 'kitKat@kitKat.co',
  },
]

for (let i = 0; i < users.length; i++) {
  users[i].id = uuidV4()
}

export { users }
