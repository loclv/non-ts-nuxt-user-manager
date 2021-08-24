<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="nameMaxLength"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="gender"
            :items="items"
            :rules="[(v) => !!v || 'Gender is required']"
            label="Item"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn
        class="ma-4 menu-item-w"
        :disabled="!valid"
        color="success"
        @click="submit"
      >
        Submit
      </v-btn>
      <v-btn class="ma-4 menu-item-w" color="error" @click="onCancel"
        >Cancel</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
import { GendersEnum } from '@/utilities/model'

const genderEnum = []
for (const property in GendersEnum) {
  genderEnum.push(GendersEnum[property])
}

const nameMaxLength = 36
const nullUser = {
  name: '',
  gender: null,
  email: '',
}

export default {
  data() {
    return {
      nameMaxLength,
      valid: false,
      name: nullUser.name,
      gender: nullUser.gender,
      email: nullUser.email,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) =>
          v.length <= nameMaxLength ||
          `Name must be less than ${nameMaxLength} characters`,
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      items: genderEnum,
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit('submitted', {
          name: this.name,
          gender: this.gender,
          email: this.email,
        })
      }
    },
    onCancel() {
      this.reset()
      this.$emit('form-cancel')
    },
    set(user) {
      const { name, gender, email } = user
      this.name = name
      this.gender = gender
      this.email = email
    },
    reset() {
      // reset form
      this.name = nullUser.name
      this.gender = nullUser.gender
      this.email = nullUser.email
      this.$refs.form.resetValidation()
    },
  },
}
</script>
