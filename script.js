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
  
  function deletus() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
  });
  }
  
  function initializeEventListeners() {
    addItemSubmit();
    makeLineThru();
    deletus();
  } 
  
  $(initializeEventListeners);