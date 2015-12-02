package date;

import java.math.BigDecimal;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/add")
public class Clac {

	public ClacPlusOut plus(ClacPlusIn input) {
		
		BigDecimal input1 = new BigDecimal(input.getX());
		BigDecimal input2 = new BigDecimal(input.getY());
		
		
		BigDecimal result = input1.add(input2);
		
		ClacPlusOut clacPlusOut = new ClacPlusOut();
		
		clacPlusOut.setResult(result.toString());
		return clacPlusOut;
	}
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String test(){
		return "<html> <title> Simple RESTful Hello</title> "  
                + "<body><h2>Hello from the html response of class Hello :)</h2></body></html>";  
	}

}
