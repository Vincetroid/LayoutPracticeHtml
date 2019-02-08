var xhr= new XMLHttpRequest();
xhr.open('GET', 'btn-bioimpedance-anthropometry.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    document.getElementById('btn-bioimpedance-anthropometry').innerHTML= this.responseText;
};
xhr.send();