
async function getCourses() {

    let respons= await (await fetch("http://localhost:3000/tabs")).json();
      console.log(respons[0].name);
}


