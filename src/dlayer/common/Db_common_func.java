package dlayer.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * @author sekidaichi
 *
 *         DB接続の共通処理を実装
 * 
 */
public class db_common_func {

	// DB接続用のローカル変数を定義
	Connection conn = null;
	PreparedStatement stmt = null;

	/**
	 * @param sql
	 * @return
	 * @throws SQLException
	 * 
	 * SQL実行処理
	 */
	public ResultSet executeSQL(String sql) throws SQLException {
		// ステートメントを準備
		stmt = conn.prepareStatement(sql);
		// SQL実行結果を返す
		return stmt.executeQuery();
	}


	/**
	 * @param sql
	 * @param prepareList
	 * @return
	 * @throws SQLException
	 * 
	 * SQL実行処理
	 * executeSQLのOverLoad
	 */
	public ResultSet executeSQL(String sql, ArrayList<String> prepareList) throws SQLException {
		// ステートメントを準備
		stmt = conn.prepareStatement(sql);
		// ステートメントの変数設定
		for (int i = 1; i <= prepareList.size(); i++) {
			stmt.setString(i, prepareList.get(i));
		}
		// SQL実行結果を返す
		return stmt.executeQuery();
	}

	
	/**
	 * @param tableName
	 * @throws ClassNotFoundException
	 * @throws SQLException
	 * 
	 * DB接続処理
	 */
	public void openConn(String tableName) throws ClassNotFoundException, SQLException {
		// JDBC Driverのロード
		Class.forName(Db_const.FOR_NAME);
		// コネクションを確立
		conn = DriverManager.getConnection(Db_const.CONN_ADD + tableName, Db_const.USER_ID, Db_const.PASSWDORD);
	}

	
	/**
	 * @throws SQLException
	 * 
	 * DB接続切断処理
	 */
	public void closeConn() throws SQLException {
		// Statementをclose
		if (stmt != null) {
			stmt.close();
		}
		// Connectionをclose
		if (conn != null) {
			conn.close();
		}
	}

}
