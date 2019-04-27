<template>
  <div class="apollo">
    <h3>VueJS * GraphQL * Apollo</h3>
    <p>
      {{ luke }}
    </p>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
const query = gql`
        query luke {
          person @rest(type: "Person", path: "people/1/") {
            name
          }
        }
      `;

export default {
  data() {
      return {
        luke: null,
    }
  },
  apollo: {
    luke: gql`
      query luke {
        person @rest(type: "Person", path: "people/1/") {
          name
        }
      }
    `,
    // Apollo maps results to the name of the query, for caching.
    // So to update the right property on the componet, you need to
    // select the property of the result with the name of the query.
    update: result => result.person,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

















// <script>
// import gql from 'graphql-tag';

// export default {
//   data() {
//     return {
//       <span class="code-annotation">getLuke: null</span>
//     }
//   },

//   apollo: {
//     // They key is the name of the data property
//     // on the component that you intend to populate.
//     getLuke: {
//       const query = gql`
//         query luke {
//           person @rest(type: "Person", path: "people/1/") {
//             name
//           }
//         }
//       `;

//       variables: {
//         input: `03e082be-5e10-4351-a968-5f28d3e50565`
//       },

//       // Apollo maps results to the name of the query, for caching.
//       // So to update the right property on the componet, you need to
//       // select the property of the result with the name of the query.
//       update: result => result.getAlligator,
//     }
//   }
// }