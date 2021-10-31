$(document).ready(function($) {
    $(document).on('click',".btn_row_delete", function(e)
    {
        var r = $(this).closest('tr').remove();
    });

    $(document).on('click',".btn_row_add", function(e)
    {
        var tableBody = $(document).find('.tbl_member').find("tbody");
        var trLast = tableBody.find("tr:last");
        var trNew = 
        trLast.after(trNew);
    });
});