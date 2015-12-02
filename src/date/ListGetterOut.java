package date;

import java.util.ArrayList;

public class ListGetterOut {
	
	private ArrayList<TestTable> resultList= new ArrayList<TestTable>();

	public ArrayList<TestTable> getResultList() {
		return resultList;
	}

	public void setResultList(ArrayList<TestTable> resultList) {
		this.resultList = resultList;
	}

	public void putList(TestTable result) {
		resultList.add(result);
	}
	
	public TestTable pushList(int index) {
		return resultList.get(index);
	}
}
