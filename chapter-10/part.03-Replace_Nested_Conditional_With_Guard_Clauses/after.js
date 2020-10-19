// 코드가 의도한 일은 모든 조건이 거짓일 때만 실행되므로, 보호 구문 사용을 통해 의도를 드러내기
function payAmount(employee) {
	let result;
	// 퇴사한 직원인가?
	if (employee.isSeparated) result = { amount: 0, reasonCode: 'SEP' };
	// 은퇴한 직원인가?
	if (employee.isRetired) {
		result = { amount: 0, reasonCode: 'RET' };
	} else {
		// logic to compute amount, 급여 계산 로직
		// lorem.ipsum(dolor.sitAmet);
		// consectetur(adipiscing).elit();
		// sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
		// ut.enim.ad(minim.veniam);
		result = someFinalComputation();
	}
	return result;
}

function someFinalComputation() {
	return { amount: 100, reasonCode: 'OFFICE' };
}

module.exports = payAmount;
