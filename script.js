// $(document).ready(function (){
  

  function addItem(itemName) {
    $('.shopping-list').append(`<li>
      <span class="shopping-item">${itemName}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
    $('#shopping-list-entry').val('')
  }
  
  function addItemSubmit(){
    $('#js-shopping-list-form').on('submit', function(event){
      event.preventDefault();
      const addItemInputVal = $('#shopping-list-entry').val();
      addItem(addItemInputVal)      
    });
  };
  
  function makeLineThru() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).parents('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });
  }
  
    // $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    //   $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    // });
  
  
  // function makeLineThru() {
  // $('.shopping-item-toggle').on('click', function(event) {
  //   $(this).parent().toggleClass('shopping-item__checked');
  // });
  // }
  
  // function makeLineThru() {
  // $('.shopping-item-toggle').on('click', function(event) {
  //   $('.shopping-item').toggleClass('shopping-item__checked');
  // });
  // }
  
  
  // function makeLineThru() {
  //   $('button').on('click', 'span', function(event) {
  //     event.preventDefault();
  //      $('.shopping-item').toggleClass('shopping-item__checked');
  // });
  // }
  
  function deletus() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
  });
  }
  
  //  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  //     $(this).closest('li').remove();
  //   });
  
  // function deletus() {
  //   $('.shopping-item-delete').on('click', 'span', function(event) {
  //     event.preventDefault();
  //     $(this).closest('li').hide();
  // });
  // }
  
  // function makeLineThru() {
  //   $('.shopping-item-toggle').on('click', function(event) {
  //   $('.shopping-item').toggle('.shopping-item__checked');
  // });
  // // $('.shopping-item').toggleClass('shopping-item__checked');
  // }
  
  
  // function makeLineThru() {
  // $('.shopping-item-toggle').on('click', function() {
  //   $('.shoppingItem').toggle('shopping-item__checked');
  // });
  // }
  
  // I want to add a click event on the 'add item' button, that adds a new <li> of whatever was put in to the text input next to it. 
  
  // I want to add the class of .shopping-item to the element created by the add item button.
  
  // I also want to add a click function to the check and delete buttons. Check button will alter the Css and put a check next to the <li>. Delete will hide the item from the page. 
  
  // I want the check and delete buttons to the inputted new <li> as well.
  
  // DELETE BUTTON
  // $(function(){
  //     $('.shopping-item-delete').on('click', function(){
  //       $( ".shopping-item" ).hide();
  //     });
  // });
  
  // I also want to add a click function to the check and delete buttons. Check button will alter the Css and put a check next to the <li>. Delete will hide the item from the page. 
  
  
  // function addElement(element) {
  //  $('').append(shoppingItem);
  // }
  
  //        appendTo(.shopping-list);
  //        $(addClass(.shopping-item))
  //});
  
  
  
  
  function initializeEventListeners() {
    addItemSubmit();
    makeLineThru();
    deletus();
  } 
  
  
  $(initializeEventListeners);