  export  const filterCourses=(e)=>{
    e.preventDefault();
    let filterEl = document.querySelector(".filter-el") 
    let filterQuery = filterEl.value.toLowerCase(); 

    let filteredCourses = allCourses.filter(tab => {
        return tab.name === filterQuery; // return true if tab.name === query
    });
    
    if(filterQuery!=='')
        showCards(filteredCourses);
     else 
        showCards(allCourses);
}