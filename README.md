## pettyFilter 
### Usage example :

<pre>
     - Method call and object pass
  
     pettyFilter({
        filterBtn       : 'button.btn',  // this is your filter button which is the get targated value
        ActiveClassName : 'current',    // you have to must use by class name
        filterGridItem  : '.grid__thumb', // gird item which is your filter item
        filterGridRow   : '.filter__grid' // gird row which is the parrent of  filter item or grid item
    });
    
</pre>

     <code>
          - filter-options
          - filter grid
          
          <div class="filter-options">
                <button class="btn btn-primary current" data-target="*">All</button>
                <button class="btn btn-primary" data-target="A"> &#8594; Study </button>
                <button class="btn btn-primary"data-target="B"> Tour</button>
          </div>
          
          <div class="row filter__grid">
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 grid__thumb" data-status="A"> </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 grid__thumb" data-status="B"> </div>
            </div>
     </code>


     



      
