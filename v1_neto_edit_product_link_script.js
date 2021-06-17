function addeditbutton() {

    var productImages = []; //create empty array for product image src name thumb,thumbL & full
    var altImages = [];//create empty array for alt 1,2,3...more
//Sperate this two array for later use in different parent , child node
    var thumbs = document.querySelectorAll("img[src*='/assets/thumb']"); //thumb, thumbM, thumbL, thumbsdfsdfsfdfs will go in here
    var fulls = document.querySelectorAll("img[src*='/assets/full']");
    var alts = document.querySelectorAll("img[src*='/assets/alt_']");

    for (var p = 0; p < thumbs.length; p++) //loop and add the result above to array,put two result in one array
    {
        productImages.push(thumbs[p]);
    }
    for (var i = 0; i < fulls.length; i++) 
    {
        productImages.push(fulls[i]);//push to same array
    }
   
     for (var j = 0; j < alts.length; j++) 
    {
        altImages.push(alts[j]);//push to the other array

    }
   //Create two empty array to store the button position
     var skus = []; 
    var alt_skus = [];

    for (var k = 0; k < altImages.length; k++) { 
        var alt_imageurl = altImages[k].src; //take the src
        var alt_single_sku = alt_imageurl.substring(alt_imageurl.lastIndexOf('/') + 1, alt_imageurl.lastIndexOf('.')); //chop to the part that contain sku
        alt_skus.push(alt_single_sku); 
//outerHTML used to allow button show inside the a tag,  button not same parentnode as thuumb or full(in some page)
//two button css are different
        altImages[k].outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;vertical-align: middle;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:0px;" onclick="window.open(\'/_cpanel/products/view?sku=' + alt_skus[k] + '\')">E</button>';
       
    }


    for (var m = 0; m < productImages.length; m++) { 
        var imageurl = productImages[m].src; 
        var sku = imageurl.substring(imageurl.lastIndexOf('/') + 1, imageurl.lastIndexOf('.')); 
        skus.push(sku); 
//closest("a"), same as parent elements used to let the page not in the a tag , so the page stag in current page when user click
        productImages[m].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + skus[m] + '\')">E</button>';
       
    }
}
  
