$( document ).ready(function(){
	$.getJSON("file_index.json", populateFileList);
})

function populateFileList(data, tstat, xhr) {
	var list_ul = $('#files-list')

	if (data === null) {
        list_ul.html('Could not load file list!');
    } else {
		list_ul.html(''); // Clears out the loading message
    	for (i=0; i<data.length; i++) {
    		var file_path = data[i];
    		if (file_path != '') {
    			list_ul.append('<li><a href="'+file_path+'">'+file_path+'</a></li>');
    		}
    	}
    }
}
