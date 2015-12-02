package date;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

@Path("add")
public class RestTest {

	@POST
	@Path("/post")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String testPost(String clacPlusInJson){
		
		Gson gson = new Gson();
		ClacPlusIn clacPlusIn = (ClacPlusIn) gson.fromJson(clacPlusInJson, ClacPlusIn.class);
		
		ClacPlusOut clacPlusOut = new Clac().plus(clacPlusIn);
		return gson.toJson(clacPlusOut);
	}
	
	@GET
	@Path("/get")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String testAdd() {
		return "TEST";
	}
	
	
}
