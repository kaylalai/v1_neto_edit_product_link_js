    var productImages = []; //create empty array
    var thumbs = document.querySelectorAll("img[src*='/assets/thumb']"); //thumb, thumbM, thumbL, thumbsdfsdfsfdfs will go in here
    var fulls = document.querySelectorAll("img[src*='/assets/full']");

    for (var p = 0; p < thumbs.length; p++) //loop and add the result above to array,put two result in one array
    {
        productImages.push(thumbs[p]);
    }
    for (var i = 0; i < fulls.length; i++) {
        productImages.push(fulls[i]);

    }
    var skus = [];
    for (var i = 0; i < productImages.length; i++) { //loop the new array ,it is the url
        var imageurl = productImages[i].src; //take the src only
        var sku = imageurl.substring(imageurl.lastIndexOf('/') + 1, imageurl.lastIndexOf('.')); //only take some part
        skus.push(sku); //use push = add the result sku to emty array
        productImages[i].parentElement.outerHTML += '<button class="edit-button" style="border:1px solid #c0c0c0;position:absolute;top:0;left:0;margin:5px;padding:2px" onclick="window.open(\'/_cpanel/products/view?sku=' + skus[i] + '\')">edit</button>';

        //put each sku in the button href
        //assign button, not work for innerHTML,is outside cannt not link the button to sku
        //not work for href
        //sytan have to becareful in location.href
    }

}
