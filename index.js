const searchElement = document.querySelector('.search');
const ItemElement = document.querySelector('.items');

let students = [];

let template = `
    <form id='formPage'>
    <div class="flex-container">
    {{#each items}}
    <div class="student">
    <div class="view view-tenth" style="width: 310px; height: 210px;">
    <img src="{{image}}" />
    <div class="mask">
        <h2>{{name}}</h2>
        <p>{{desc}}</p><br>
        <span>{{price}}</span>     
    </div>
</div>
    </div>
    {{/each}}
    </div>
    
    <form>
`;
 
/**
 * Renders the template with the given data.
 * @param context The date to render.
 */

function render(context) {
  let compiled = Handlebars.compile(template);
  ItemElement.innerHTML = compiled(context);
}
function searchHandler(event) {

  let val = event.target.value;
  val= val.toLowerCase();
  val= val.charAt().toLocaleUpperCase() + val.slice(1);

  
  let filteredItems = val1.filter(function (items) {
  
      return items.name.includes(val);
    // return false   
  });

  let dataCopy = {
    items: filteredItems
  };

  render(dataCopy);
}
const content= document.querySelector(".student");
$.ajax({
 
  method: 'GET',
  url: 'https://5e8e9c89e0e7de001685f869.mockapi.io/WorldTravels',
}).done(function( data ) {
  console.log( data );
  render({items: data})
  val1= data;
  
  ren = render({items: data})
});



searchElement.addEventListener('input', searchHandler);

