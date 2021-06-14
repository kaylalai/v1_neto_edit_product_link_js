function addeditbutton() {
    if (document.getElementById("main-image")) // if have this idea, only for main image
    {
        var editbuttonimage = document.getElementById("main-image"); //the main image in the page
        editbuttonimage.parentElement.outerHTML += '<button id="edit-button" style="border:1px solid #c0c0c0;position:absolute;top:0;left:0;margin:5px;padding:2px">Edit</button>';
        var imageurl = editbuttonimage.src; //get the image source url
        var sku = imageurl.substring(imageurl.lastIndexOf('/') + 1, imageurl.lastIndexOf('.')); //trim the source, use the substring method,the / at least and before the.
        //below is to start to store the button ID name "edit-button" from the button code
        var edit_button = document.getElementById("edit-button");
        //no array no loop require, edit-button from button id, use set attribute (on click) and its values (location.href='/_cpanel/products/view?sku="+sku+), also put the+sku+ and front and end
        edit_button.setAttribute("onclick", "location.href='/_cpanel/products/view?sku=" + sku + "'");
    }
    var editbuttonimagesbelow = document.getElementsByClassName("product-image"); //the below image
    for (var m = 0; m < editbuttonimagesbelow.length; m++) {
        editbuttonimagesbelow[m].parentElement.outerHTML += '<button class="edit-button" style="border:1px solid #c0c0c0;position:absolute;top:0;left:0;margin:5px;padding:2px">Edit</button>';
        var imageurl_below = editbuttonimagesbelow[m].src; //get the image source
        var sku_below = imageurl_below.substring(imageurl_below.lastIndexOf('/') + 1, imageurl_below.lastIndexOf('.')); //trim the source, use the substring method
        //below is to start to store the button class name "edit-button" from the button code
        var edit_buttons_below = document.getElementsByClassName("edit-button");
        //loop each button to asign the sku to the on click function
        for (var n = 0; n < edit_buttons_below.length; n++) {
            //in this loop array :edit-button , use set attribute (on click) and its values (location.href='/_cpanel/products/view?sku="+sku+), also put the+sku+ at front and end
            edit_buttons_below[n].setAttribute("onclick", "location.href='/_cpanel/products/view?sku=" + sku_below + "'");

        }
    }
}