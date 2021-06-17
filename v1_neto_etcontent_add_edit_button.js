function addmanagebutton() {

    var contentzones = [];
    var spancontenzones = document.querySelectorAll("span[data-etcontentzone]");
    console.log(spancontenzones)
    for (var p = 0; p < spancontenzones.length; p++) {
        contentzones.push(spancontenzones[p]);

    }
    console.log(contentzones)

    var zone_id_array = [];
    for (var p = 0; p < contentzones.length; p++) {
        var zoneid = contentzones[p].getAttribute("data-etcontentzone"); //show the value of attribute data in the data-etcontentzone
        console.log(zoneid)
        zone_id_array.push(zoneid);
        contentzones[p].closest("span").outerHTML += '<button class="edit-button" style="display: inline-block;background: #FF0000;color: rgba(255, 255, 255, 255);font-family:Trebuchet MS;font-size:8px;font-weight:bold;padding:2px 4px;text decoration:none;width: 20px;height: 20px;border-radius: 50%;text-align: center;border: solid 2px rgba(255, 255, 255, 0.47);" onclick="window.open(\'/_cpanel/contentzones/view?id=' + zone_id_array[p] + '\')">E</button>';

    }
}
