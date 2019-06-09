<template>
  <div class="about">
    <h1>Vue x GraphQL x Vue-Apolo</h1>
    <div class="main-text">
      <h5>ABOUT</h5>
      <hr/>
      <p>
        This is a proof of concept project experimenting with implementing 
        GraphQL over an already running REST Api with Apollo - Server + Client 
        with a VueJS frontend, (and a couple other frameworks to help along).
        GraphQL has been out for a while now and I wanted to see how well it
        integrated with the existing frameworks I'm used to using - more
        specifically - VueJS in the frontend and also using Apollo Server and 
        Client to do it.
      </p>
      <p>
        GraphQL came along publicly in 2015 (developed internally at Facebook 
        in 2012), and because of its integration with the popular frontend
        framework React, it soon became a really popular option for making 
        efficient and performant queries that only returned the exact data 
        you specified in the query.  
      </p>
      <h5>
        PROCESS
      </h5>
       <hr/>
      <p>
        Because making a REST Api wasn't the focus of this project I chose to 
        use a free online REST Api called SWAPI The Star Wars Api. After 
        hooking that up I created a GraphQL server application layer that did 
        the important task of definig the schemas, queries and resolvers. After 
        completing the server I moved on to the frontend that I built with VueJS
        and Vue-Apollo and some other libraries like Vue-Bootstrap (see 
        frameworks section for more info).
      </p>
      <h5>
        FRAMEWORKS
      </h5>
       <hr/>
      <p>
        These are the main frameworks I used in this project. Each of them has its
        own range of dependencies that I won't be listing here.
      </p>
        <p class="list">GraphQL Apollo (Server / Cpent)</p>
        <p class="list">VueJS</p>
        <p class="list">Vue-Apollo</p>
        <p class="list">Bootstrap Vue</p>
        <p class="list">Axios (Server)</p>    
      <p id="test-f">TEST FRAMEWORKS</p>
        <p class="list">Jest - Unit Testing</p>
        <p class="list">Cypress - End-2-end Testing</p>   
      <h5>
        LIMITATIONS AND COMMENTS
      </h5>
       <hr/>
      <p>
        All in all I enjoyed working with GraphQL and I it felt pretty cool to use.
        There are a couple of points that bother me: weak TypeScript support in 
        Vue-Apollo and a little too much repeated syntax in defining the queries 
        on both the client and server side. In the future, I would like to implement this in 
        TypeScript.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  h1 {
    font-size: 3.5em;
    text-transform: uppercase;
  }

  h5 {
    color: #002d57;
    text-transform: uppercase;
    padding-top: 30px;
  }

  p {
    padding-bottom: 2px;
    text-align: left;
  }

  .about {
    background-image: url("https://media.wired.com/photos/5cd5df1f2948ca2e63b090f0/master/w_1164,c_limit/01_SPoW_051119.jpg");
    background-color: #cccccc;
    min-height: 600px;
    padding: 35px 50px 35px 50px;
    color: #d1e8ff;
  }

  .list {
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .main-text {
    background-color: rgba(245, 255, 255, 0.822);
    border-radius: 7px;
    color: black;
    margin: 0 auto;
    min-height: 5em;
    margin-top: 30px;
    padding: 30px;
    width: 80%;
  }

  #test-f {
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
</style>
