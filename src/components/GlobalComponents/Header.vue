<template>
  <div id="Header" class="text-primary" style="" >
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded" style="margin-top:-60px;margin-bottom:30px;">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand branding text-primary" href="http://localhost:8099/?#/dashboard">EUPHORIA</a>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item active space">
           <a class="nav-link  text-primary" href="http://localhost:8099/?#/dashboard">Home <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active space">
           <a class="nav-link text-primary" href="http://localhost:8099/?#/CompanyProfile">Company<span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active space">
           <a class="nav-link text-primary" href="http://localhost:8099/?#/TimeOff">Time Off <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active space">
           <a class="nav-link text-primary" href="http://localhost:8099/?#/Overtime">Overtime <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active space">
           <a class="nav-link text-primary" href="http://localhost:8099/?#/Payroll">Payroll <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active space">
           <a class="nav-link text-primary" href="http://localhost:8099/?#/Timesheet">Timesheet <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item active space">
           <a class="nav-link text-primary" href="#">Help <span class="sr-only">(current)</span></a>
         </li>
       </ul>
       <form class="form-inline my-2 my-lg-0 but" action="http://localhost:8099/?#/">
         <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Log Out</button>
       </form>
     </div>
    </nav>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space{
    margin-right:20px;
    font-size: 20px;
}
.branding{
  font-weight:bold;
  font-size:22px;
  margin-left:120px;
  margin-right: 170px;
}
.but{
  margin-left: -90px;
}
</style>
