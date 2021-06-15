
function addeditbutton() {
    if (document.getElementById("main-image")) {
        var editbuttonimage = document.getElementById("main-image"); //the main image in the product detail page
        editbuttonimage.parentElement.outerHTML += '<button id="edit-button" style="border:1px solid #c0c0c0;position:absolute;top:0;left:0;margin:5px;padding:2px">Edit</button>';
        var imageurl = editbuttonimage.src; //get the image source
        var sku = imageurl.substring(imageurl.lastIndexOf('/') + 1, imageurl.lastIndexOf('.')); //trim the source, use the substring method
        //start at to store the button class name "edit-button"
        var edit_button = document.getElementById("edit-button");
        //no array no loop require, edit-button from button id, use set attribute (on click) and its values (location.href='/_cpanel/products/view?sku="+sku+), also put the+sku+ and front and end
        edit_button.setAttribute("onclick", "location.href='/_cpanel/products/view?sku=" + sku + "'");
    }

    var editbuttonimagesbelow = document.getElementsByClassName("product-image"); //the below product image or in main category 
    var skus = []; // array to store each sku, is more unambiguous, later will use
    for (var m = 0; m < editbuttonimagesbelow.length; m++) {// assign button to image that classname is product-image
        editbuttonimagesbelow[m].parentElement.outerHTML += '<button class="edit-button" style="border:1px solid #c0c0c0;position:absolute;top:0;left:0;margin:5px;padding:2px">Edit</button>';
        
        //start here to store the button class name "edit-button"
        var imageurl_below = editbuttonimagesbelow[m].src; //get the image source
        var sku_below = imageurl_below.substring(imageurl_below.lastIndexOf('/') + 1, imageurl_below.lastIndexOf('.')); //trim the source, use the substring method
        //console.log("sku" + sku_below);

        //add sku to array
        skus.push(sku_below);// it use to add new item to an array an use push method
        //console.log(skus);

        //add url with sku to each edit button
        for (var n = 0; n < skus.length; n++) {
            var edit_buttons_below = document.getElementsByClassName("edit-button");

            //loop each button to asign the sku to the on click function
            for (var k = 0; k < edit_buttons_below.length; k++) {
                //in this loop array :edit-button , use set attribute (on click) and its values (location.href='/_cpanel/products/view?sku="+sku+), also put the+sku+ and front and end
                edit_buttons_below[n].setAttribute("onclick", "location.href='/_cpanel/products/view?sku=" + skus[n] + "'");
                //console.log(edit_buttons_below[n]);
            }
        }
    }
    
}