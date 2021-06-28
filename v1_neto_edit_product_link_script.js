function addeditbutton() {
    var srcValues = [];
    var skus = [];
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].hasAttribute("src")) {
            if (images[i].getAttribute("src").includes("assets/thumb")) {
                srcValues.push(images[i].getAttribute("src"));
            }
            if (images[i].getAttribute("src").includes("assets/alt")) {
                srcValues.push(images[i].getAttribute("src"));
            }
            if (images[i].getAttribute("src").includes("assets/thumbL")) {
                srcValues.push(images[i].getAttribute("src"));
            }
            if (images[i].getAttribute("src").includes("assets/full")) {
                srcValues.push(images[i].getAttribute("src"));
            }
        }
        if (images[i].hasAttribute("data-src")) {
            if (images[i].getAttribute("data-src").includes("/assets/thumb/")) {
                srcValues.push(images[i].getAttribute("data-src"));
            }
        }
    }

    for (var x = 0; x < srcValues.length; x++) {
        var sku = srcValues[x].substring(srcValues[x].lastIndexOf("/") + 1, srcValues[x].lastIndexOf("."));
        skus.push(sku);
    }
    var uniqueSkus = [...new Set(skus)];
    for (var i = 0; i < uniqueSkus.length; i++) {
        for (var j = 0; j < images.length; j++) {
            if (images[j].hasAttribute("data-src")) {
                if (images[j].getAttribute("data-src").includes(uniqueSkus[i])) {
                    images[j].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + uniqueSkus[i] + "')\">E</button>";
                }
            } else {
                if (images[j].getAttribute("src").includes(uniqueSkus[i])) {
                    if (images[j].getAttribute("src").includes("/assets/thumbL/")) {
                        images[j].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + uniqueSkus[i] + "')\">E</button>";
                    }
                    if (images[j].getAttribute("src").includes("/assets/thumb/")) {
                        images[j].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + uniqueSkus[i] + "')\">E</button>";
                    }
                    if (images[j].getAttribute("src").includes("/assets/alt")) {
                        images[j].closest("a").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;line-height: 20x;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);transition: .4s;position:absolute;top:0px;left:0;right:0px;margin:50px;" onclick="window.open(\'/_cpanel/products/view?sku=' + uniqueSkus[i] + "')\">E</button>";
                    }
                }
            }
        }
    }
}
