<template>
<div>
    <a-select
    label-in-value
    :default-value="{ key: 'lucy' }"
    style="width: 120px"
    @change="handleChange"
  >
    <Select.OptGroup value="jack">
      Jack (100)
    </Select.OptGroup>
    <Select.OptGroup value="lucy">
      Lucy (101)
    </Select.OptGroup>
  </a-select>
</div>
  
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
  },
};
</script>