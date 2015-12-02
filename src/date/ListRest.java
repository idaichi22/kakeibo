package date;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

@Path("list")
public class ListRest {

	@GET
	@Path("/get")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String listGet() {

		Gson gson = new Gson();

		ListGetter listGetter = new ListGetter();
		ListGetterOut listGetterOut = new ListGetterOut();
		try {
			listGetterOut = listGetter.dbAccess();
		} catch (Exception e) {

		}

		return gson.toJson(listGetterOut);
		

	}

}
