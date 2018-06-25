function loadList(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/data/country.json",true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var list = document.getElementById("listcountry");
            var data = xhr.responseText;
            var vec = JSON.parse(data);
            vec.forEach(function(ob){
                var li = document.createElement("li");
                var a = document.createElement("a");
                var text = document.createTextNode(ob.country);
                a.appendChild(text);
                a.setAttribute("href","#");
                li.appendChild(a);
                list.appendChild(li);
            });
            $('#listcountry').listview('refresh');
        }
    }
    xhr.send();
}
