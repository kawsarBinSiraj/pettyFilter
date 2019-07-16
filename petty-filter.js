

/*!
 * petty-filter.js
 * Licensed under MIT ()
 * 
 * @author      - kawsar ibn siraj
 * @created_by  - kawsar ibn siraj
 * @created_at  - 16.07.2019
 * 
 * @web - http://kawsarhossain.com/
 * @github - https://github.com/kawsarIbnSiraj
 */

function pettyFilter(options) {
    if ($(options.filterGridRow).length) {
        $(options.filterGridRow + ' ' + options.filterGridItem).css('display', 'none');
        $(options.filterBtn).on('click', function () {

            // add current
            $(options.filterBtn).removeClass(options.ActiveClassName);
            $(this).addClass(options.ActiveClassName);

            // filter status
            var $target = $(this).data('target');
            if ($target !=='*' && $target !== 'all') {
                $(options.filterGridRow + ' ' + options.filterGridItem).css('display', 'none');
                $(options.filterGridRow + ' ' + options.filterGridItem+'[data-status="' + $target + '"]').fadeIn('slow');
            } else {
                $(options.filterGridRow + ' ' + options.filterGridItem).css('display', 'none').fadeIn('slow');
            }
        });
        // filterBtnActive triggered
        $('.' + options.ActiveClassName).trigger('click');
    }
}



