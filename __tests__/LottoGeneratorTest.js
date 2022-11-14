const LottoGenerator = require('../src/domain/LottoGenerator');
const lottoGenerator = new LottoGenerator();

describe('로또 생성기 클래스 - 구입 금액 유효성 테스트', () => {
  test('로또 구매 금액을 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.isInputMoneyValid();
    }).toThrow('[ERROR] 구입 금액을 입력해야 합니다.');
  });

  test('로또 구매 금액에 숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.isInputMoneyValid('외상 되나요?');
    }).toThrow('[ERROR] 숫자만 입력할 수 있습니다.');
  });

  test('로또 구매 금액에 0 이하의 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.isInputMoneyValid(-1000);
    }).toThrow('[ERROR] 금액은 0보다 커야 합니다.');
  });

  test('로또 구매 금액을 1000원 단위로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      lottoGenerator.isInputMoneyValid(34280);
    }).toThrow('[ERROR] 천 원 단위로 입력해야 합니다.');
  });
});
