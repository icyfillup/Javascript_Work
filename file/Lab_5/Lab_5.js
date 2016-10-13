
$(document).ready(
    function()
    {
	$("#information_submit").click(
	    function()
	    {
		var FirstName = $("#first_name").val();
		var LastName = $("#last_name").val();
		var Email = $("#email_address").val();		
		var IsValid = true;

		if($("#first_name").val() == "")
		{
		    $("#first_name").next().text("This field cannot be empty")
		    $("#first_name_error").css("color", "red");		    
		    IsValid = false;
		}
		else
		{
		    $("#first_name").next().text("")
		}

		if($("#last_name").val() == "")
		{
		    $("#last_name").next().text("This field cannot be empty")
		    $("#last_name_error").css("color", "red");
		    IsValid = false;
		}
		else
		{
		    $("#last_name").next().text("")
		}

		if($("#email_address").val() == "")
		{
		    $("#email_address").next().text("This field cannot be empty")
		    $("#email_error").css("color", "red");
		    IsValid = false;
		}
		else
		{
		    $("#email_address").next().text("")
		}

		if(IsValid)
		{
		    document.write("<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:250px;\">")
		    document.write("<tbody>")

		    document.write("<tr>")
		    document.write("<td>First Name</td>")
		    document.write("<td>", FirstName, "</td>")
		    document.write("</tr>")
		    
		    document.write("<tr>")
		    document.write("<td>Last Name</td>")
		    document.write("<td>", LastName, "</td>")
		    document.write("</tr>")
		    
		    document.write("<tr>")
		    document.write("<td>Email</td>")
		    document.write("<td>", Email, "</td>")
		    document.write("</tr>")
		    
		    document.write("</tbody>")
		    document.write("</table>")
		}
		
	    })
    });
