function create() {
                var row = parseInt(document.getElementById("row").value);
                var col = parseInt(document.getElementById("col").value);

                var tablestart="<table id=myTable border=10 >";
                var tableend = "</table>";
                var trstart = "<tr>";
                var trend = "</tr>";
                var tdstart = "<td>";
                var tdend = "</td>";
                var data="data in cell";

                document.write(tablestart);

                for (var r=0;r<row;r++) {
                    document.write(trstart);
                    for(var c=0; c<col; c++) {
                        document.write(tdstart+"X"+r+"y"+c+tdend);
                    }
                }



                }
