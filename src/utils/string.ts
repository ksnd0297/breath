export function getKoreanPostPosition(word: string) {
  // 유니코드에서 한글의 시작과 끝 범위
  const HANGUL_START = 0xAC00;
  const HANGUL_END = 0xD7A3;

  // 입력 단어의 마지막 글자를 추출
  const lastChar = word[word.length - 1];
  const lastCharCode = lastChar.charCodeAt(0);

  // 한글 범위에 있는지 확인
  if (lastCharCode < HANGUL_START || lastCharCode > HANGUL_END) {
    return null; // 한글이 아니면 null 반환
  }

  // 한글 음절의 시작 코드에서 몇 번째 인지 계산
  const syllableIndex = lastCharCode - HANGUL_START;

  // 받침이 있는지 없는지 확인 (종성 계산)
  const hasBatchim = (syllableIndex % 28) !== 0;

  // 알맞은 조사 반환
  return hasBatchim ? '은' : '는';
}