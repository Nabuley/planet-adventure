function searchDestinations() {
    var input, filter, destinations, destination, name, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    destinations = document.getElementsByClassName('destination');
    if(filter.search(/\s/) !== -1){
        filter = filter.replace(/\s/g, "");
    }
    if(filter.search(/\-/) !== -1){
        filter = filter.replace(/\-/g, " ");
    }
    //console.log(filter);
    for (i = 0; i < destinations.length; i++) {
        destination = destinations[i];
        name = destination.getAttribute('data-name');
        if (name) {
            txtValue = name.toUpperCase();
            if (txtValue.indexOf(filter) > -1) {
                destination.style.display = "";
            } else {
                destination.style.display = "none";
            }
        }
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('문의가 성공적으로 제출되었습니다.');
});