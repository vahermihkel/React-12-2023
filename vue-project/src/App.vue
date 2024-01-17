<template>
  <!-- <button @click="fetchData">Fetch data</button> -->
  <form v-on:submit.prevent="addContact">
    <p>Add contact</p>
    <p>Name: <input type="text" v-model="name"></p>
    <p>CodeName: <input type="text" v-model="codeName"></p>
    <p>Phone: <input type="text" v-model="phone"></p>
    <button type="submit">Add contact</button>
  </form>
  <br />
  <div v-for="contact in data" :key="contact.id">
    <div>{{ contact.id }}</div>
    <div>{{ contact.name }}</div>
    <div>{{ contact.codeName }}</div>
    <div>{{ contact.phone }}</div>
  </div>
</template>

<script>
  export default {
    async beforeMount() { // process.env.REACT_APP_
      const response = await fetch("http://localhost:8080/contact"); 
      this.data = await response.json();
    },
    data() {
      return {
        data: null,
        name: null,
        codeName: null,
        phone: null
      };
    },
    methods: {
      async addContact() {    
        const contact = {
          name: this.name,
          codeName: this.codeName,
          phone: this.phone,
        }
        // this.data.push(contact)
        this.name = null
        this.codeName = null  
        this.phone = null  
        const response = await fetch("http://localhost:8080/contact", 
          {
            "method": "POST", 
            "body": JSON.stringify(contact), 
            "headers": {"Content-Type": "application/json"}
          }
        ); 
        this.data = await response.json();
      }   
    }
  };
</script>