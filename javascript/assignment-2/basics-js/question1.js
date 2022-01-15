var names_array = ['Neeta sapkota', 'neha shiwakoti', 'Srijana Khatiwada', 'Smrity Dhakal', 'Sami Chakradhar', 'Kirtee Maharjan', 'Trija Thebe', 'Sindhu Aryal', 'Kusum Ranjitkar', 'Elisha Bista', 'Rachana kafle', 'Barsha Maharjan', 'Pooja Gurung', 'Bisikha Subedi', 'Kritika Baral', 'Srijana Thulung']
var final = [];
var result_array = {};

for (var i = 0; i < 16; i++) {
    var splitted = names_array[i].split(" ");

    result_array.id = i;
    result_array.firstname = splitted[0];
    result_array.lastname = splitted[1];
    console.log(final[i] = (result_array));
    console.log("Itertion:" + i);
    console.log(final);
}