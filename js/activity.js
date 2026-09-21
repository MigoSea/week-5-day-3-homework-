$(document).ready(function () { // wait until the page is ready
  $("td").click(function () { // handle every table-cell click in one handler
    var content = $(this).text(); // get content of the clicked cell
    if (content != "Not Available" && $(this).index() != 0) { // ignore unavailable and label cells
      $(this).toggleClass("tdhighlight"); // toggle the green highlight
      if ($(this).hasClass("tdhighlight")) { // check whether the cell was selected
        var colIndex = $(this).index(); // get the clicked cell column index
        var cliff = $("tr").first().children().eq(colIndex).text(); // get the matching cliff header
        $("#displaySelected").css("visibility", "visible"); // show the selected activities box
        $("#displaySelected").css("margin-top", "2em"); // add space above the box
        $("#result").append("<p>" + content + "<span class='cliff'> at " + cliff + "</span></p>"); // add the selected activity
      } else { // handle a cell that was deselected
        $("#result p:contains(" + content + ")").remove(); // remove the matching activity
        if ($("#result").has("p").length == false) { // check whether the list is empty
          $("#displaySelected").css("visibility", "hidden"); // hide the empty box
          $("#displaySelected").css("margin-top", "0"); // remove the box top margin
        }
      }
    }
  }); // finish the table-cell click handler
}); // finish the document-ready function
