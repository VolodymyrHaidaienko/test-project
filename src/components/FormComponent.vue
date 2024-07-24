<template>
  <div>
    <Form @submit.prevent>
      <div
        class="xs:block sm:flex md:flex lg:flex xl:flex justify-center gap-24"
      >
        <div class="p-5 gap-y-3.5">
          <h3 class="uppercase mb-10">представтеся будь ласка</h3>
          <TextInput
            v-model.trim="surname"
            name="surname"
            type="text"
            label="* прізвище"
            placeholder=""
            classInput="w-full border-2 border-black mb-2"
            classLabel="uppercase flex mb-2"
            :error="errorSurName"
          />
          <TextInput
            v-model.trim="name"
            name="name"
            type="text"
            label="* ім'я"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorName"
          />
          <TextInput
            v-model.trim="position"
            name="position"
            type="text"
            label="органцізація та посада"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorPosition"
          />
          <Radio
            v-model="clientRole"
            type="radio"
            value="споживач"
            classInput="w-5 mb-1 border-2 border-black flex items-center mt-2"
            id="споживач"
            label="споживач"
            label-class="uppercase"
            input-class="w-5 h-5"
            @update:model-value="($evt) => $emit('update:modelValue', $evt)"
          />
          <Radio
            v-model="clientRole"
            type="radio"
            value="медичний працівник"
            classInput="w-5 mb-1 border-2 border-black flex items-center"
            id="медичний працівник"
            label-class="uppercase"
            input-class="w-5 h-5"
            label="медичний працівник"
            @update:model-value="($evt) => $emit('update:modelValue', $evt)"
          />
          <Radio
            v-model="clientRole"
            type="radio"
            value="журналіст"
            classInput="w-5 mb-1 border-2 border-black flex items-center"
            id="журналіст"
            label-class="uppercase"
            input-class="w-5 h-5"
            label="журналіст"
            @update:model-value="($evt) => $emit('update:modelValue', $evt)"
          />
          <h5 class="uppercase my-5 text-start">Повідомлення</h5>
          <TextInput
            v-model.trim="theme"
            name="theme"
            type="text"
            label="тема повідомлення"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex"
            :error="errorTheme"
          />
          <Textarea
            v-model.trim="description"
            name="description"
            label="* повідомлення"
            placeholder="Textarea"
            classInput="border-2 border-black"
            classLabel="uppercase text-start block  mb-2"
            :error="errorDescription"
          />
        </div>
        <div class="p-5 gap-y-3.5">
          <h3 class="uppercase mb-10">контактна інформація</h3>
          <TextInput
            v-model.trim="email"
            name="email"
            type="text"
            label="* email"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorEmail"
          />
          <TextInput
            v-model.trim="country"
            name="country"
            type="text"
            label="країна"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorСountry"
          />
          <TextInput
            v-model.trim="city"
            name="city"
            type="text"
            label="місто"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorСity"
          />
          <TextInput
            v-model.trim="indexCity"
            name="indexCity"
            type="text"
            label="індекс"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorIndexCity"
          />
          <TextInput
            v-model.trim="address"
            name="address"
            type="text"
            label="адреса"
            placeholder=""
            classInput="w-full mb-2 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorAddress"
          />
          <TextInput
            v-model.trim="phone"
            name="phone"
            type="tel"
            label="* телефон"
            placeholder=""
            classInput="w-full mb-5 border-2 border-black"
            classLabel="uppercase flex mb-2"
            :error="errorPhone"
          />
          <Button
            text="відправити"
            btn-class="bg-slate-500 hover:bg-slate-900
          h-10 text-xs font-normal w-44 items-center text-white uppercase mt-5"
            :is-disabled="!isFromValid"
            @click="submitClient"
          />
        </div>
      </div>
    </Form>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { defineEmits, ref, computed } from "vue";
import { useField, Form, useForm } from "vee-validate";
import * as yup from "yup";

// import components
import TextInput from "@/components/global/TextInput.vue";
import Textarea from "@/components/global/Textarea.vue";
import Radio from "@/components/global/Radio.vue";
import Button from "@/components/global/Button.vue";

const { handleSubmit, meta, values } = useForm();

defineEmits<{
  (event: "update:modelValue", value: number): void;
}>();

const clientRole = ref<string>("");

const isFromValid = computed<boolean>(() => meta.value.valid);

const submitClient = handleSubmit((): void => {
  const { ...res } = values;
  res.role = clientRole.value;
  alert("Форма надіслана");
});

const { value: surname, errorMessage: errorSurName } = useField(
  "surname",
  yup
    .string()
    .required("Це поле є обов'язкове")
    .test("length", "Введіть коректне приізвище", (value) =>
      value ? value.length < 30 : true
    )
    .matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);

const { value: name, errorMessage: errorName } = useField(
  "name",
  yup
    .string()
    .required("Це поле є обов'язкове")
    .test("length", "Введіть коректне ім'я", (value) =>
      value ? value.length < 30 : true
    )
    .matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);
const { value: position, errorMessage: errorPosition } = useField(
  "position",
  yup.string().matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);
const { value: theme, errorMessage: errorTheme } = useField(
  "theme",
  yup.string().matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);
const { value: description, errorMessage: errorDescription } = useField(
  "description",
  yup
    .string()
    .required("Це поле є обов'язкове")
    .matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);

const { value: email, errorMessage: errorEmail } = useField(
  "email",
  yup.string().required("Це поле є обов'язкове").email("Введіть коректний мейл")
);
const { value: country, errorMessage: errorСountry } = useField(
  "country",
  yup.string().matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);
const { value: city, errorMessage: errorСity } = useField(
  "city",
  yup.string().matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);
const { value: indexCity, errorMessage: errorIndexCity } = useField(
  "indexCity",
  yup.string().matches(/^[0-9]+$/, "Введіть цифри")
);
const { value: address, errorMessage: errorAddress } = useField(
  "address",
  yup.string().matches(/^[а-яА-ЯёЁa]+$/, "Введіть кирилицю")
);
const { value: phone, errorMessage: errorPhone } = useField(
  "phone",
  yup.string().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, "Введіть вірний номер")
);
</script>
