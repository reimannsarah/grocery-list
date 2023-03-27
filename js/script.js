// window.onload = function () {
  const form = document.querySelector("form");

  function handleForm(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input[name=list]:checked");
    console.log(userSelections);
    const userSelectionsArray = Array.from(userSelections);
    const ul = document.createElement("ul");
    form.after(ul);
    console.log(userSelectionsArray);

    userSelectionsArray.forEach(function(grocery){
      const li = document.createElement("li");
      console.log(grocery.value);
      li.append(grocery.value);
      ul.append(li);
      
    });
  }
  window.addEventListener('load', function(){
    document.querySelector('form#grocery-list').addEventListener('submit', handleForm);
  });

// }