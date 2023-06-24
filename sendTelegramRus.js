//bot token
var telegram_bot_id = "5913593116:AAGlliDpcLpnPa-lrQnWLQ0vWSvN6iuUpKo"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001905105051; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message, mushk;
var ready = function() {
    u_name = document.getElementById("name-inputt").value;
    email = document.getElementById("phone-inputt").value;
    message = document.getElementById("message-textarea").value;
    mushk = document.getElementById("exampleDropdown").value;

    message = "Ismi: " + u_name + "\nTel: " + email + "\nMushkambar turi: " + mushk + "\nIzoh: " + message;
};
var sendtelegramrus = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name-inputt").value = "";
    document.getElementById("phone-inputt").value = "";
    document.getElementById("message-textarea").value = "";
    document.getElementById("exampleDropdown").value = "";
    return false;
};
