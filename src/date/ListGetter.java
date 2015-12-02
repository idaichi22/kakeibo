package date;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ListGetter {
	
	public ListGetterOut dbAccess() throws Exception {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		ListGetterOut listGetterOut = new ListGetterOut();
		
		try {
			Class.forName("org.postgresql.Driver");
			conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "test");
			
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select * from testtable");
			TestTable testTable = new TestTable();
			while (rs.next()) {
				testTable.setX(rs.getString("x"));
				testTable.setY(rs.getString("y"));
				testTable.setResult(rs.getString("result"));
				listGetterOut.putList(testTable);
			}
			return listGetterOut;
			
		} finally {
			if (rs != null) {
				rs.close();
			}
			if (stmt != null) {
				stmt.close();
			}
			if (stmt != null) {
				conn.close();
			}
		}
		
	}

}
