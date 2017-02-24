    $('#image_holder').show(); // var image_holder = getElementsById("#image_holder")
    $("#fileToUpload").on('change', function() { // var fileToUpload = getElementsById("#fileToUpload")
        if (typeof(FileReader) != "undefined") {
            var image_holder = $("#image-holder"); // var image_holder = getElementsById("#image_holder")
            image_holder.empty();
            var reader = new FileReader();
            reader.onload = function(e) {
                $("<img />", { //var img = getElementsByTagName("img")
                    "src": e.target.result,
                    "class": "thumb-image",
                    "width": "128px",
                    "height": "128px"
                }).appendTo(image_holder);
                $('.placeholder').hide();
            }
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            alert("Este browser não suporta a função FileReader.");
        }
    });
