function addeditbutton() {

    var productImages = []; //create empty array for product image src name thumb,thumbL & full
    var altImages = []; //create empty array for alt 1,2,3...more
    //Sperate this two array for later use in different parent , child node
    var thumbs = document.querySelectorAll("img[src*='/assets/thumb']"); //thumb, thumbM, thumbL, thumbsdfsdfsfdfs will go in here
    var fulls = document.querySelectorAll("img[src*='/assets/full']");
    var alts = document.querySelectorAll("img[src*='/assets/alt_']");

    for (var p = 0; p < thumbs.length; p++) //loop and add the result above to array,put two result in one array
    {
        productImages.push(thumbs[p]);
    }
    for (var i = 0; i < fulls.length; i++) {
        productImages.push(fulls[i]); //push to same array
    }

    for (var j = 0; j < alts.length; j++) {
        altImages.push(alts[j]); //push to the other array

    }
    //Create three empty array to store the sku specific part in an array + loop alt_skus & skus button in different position 
    var alt_skus = [];// for alt button
    var skus = [];  //for thumb ,full
    var lazyload_skus = []; //for lazyload img src

    for (var k = 0; k < altImages.length; k++) {
        var alt_imageurl = altImages[k].src; //take the src from the array of the img link 
        var alt_single_sku = alt_imageurl.substring(alt_imageurl.lastIndexOf('/') + 1, alt_imageurl.lastIndexOf('.')); //chop to the part that contain sku
        alt_skus.push(alt_single_sku);// push in an array
        //outerHTML used to allow button show inside the a tag,  button not same parentnode as thumb or full(in some page)
        //two button css are different
        altImages[k].outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;vertical-align: middle;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:0px;" onclick="window.open(\'/_cpanel/products/view?sku=' + alt_skus[k] + '\')">E</button>';
    }

    for (var m = 0; m < productImages.length; m++) {
        var imageurl = productImages[m].src;
        var sku = imageurl.substring(imageurl.lastIndexOf('/') + 1, imageurl.lastIndexOf('.'));
        skus.push(sku);
        //closest("a"),put in the position that can : 1. allow the page in the current tag (not div), so than the page can stay in current page when user click and pop up new window
        productImages[m].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + skus[m] + '\')">E</button>';
    }
    //For some img tage used Lazyload to load the buttom of the webpage , so the page not instantly show everything until scroll down , this loop  allow the button show it at the same time with other button by using getAttribute("data-src").   
    //variable productImages remain the same value from above array  
    for (var n = 0; n < productImages.length; n++) {
        var lazyload_imageurl = productImages[n].getAttribute("data-src");
        var data_src_sku = lazyload_imageurl.substring(lazyload_imageurl.lastIndexOf('/') + 1, lazyload_imageurl.lastIndexOf('.'));
        lazyload_skus.push(data_src_sku);
        productImages[m].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255,255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + ata_src_sku[n] + '\')">E</button>';
    }
}
