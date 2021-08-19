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
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Gender is required']"
            label="Item"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-btn :disabled="!valid" color="success" class="" @click="validate">
        Submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { GendersEnum } from '@/utilities/model'

const genders = []
for (const property in GendersEnum) {
  genders.push(GendersEnum[property])
}

const nameMaxLength = 36

export default {
  data() {
    return {
      nameMaxLength,
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) =>
          v.length <= nameMaxLength ||
          `Name must be less than ${nameMaxLength} characters`,
      ],
      select: null,
      items: genders,
    }
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit('submitted', { name: this.name, gender: this.select })
      }
    },
  },
}
</script>
