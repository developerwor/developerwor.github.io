function copyToClipboard(elementId) {
    // 텍스트를 복사할 요소를 가져옵니다.
    var textElement = document.getElementById(elementId);

    // 임시 input 요소를 생성합니다.
    var tempInput = document.createElement('input');
    tempInput.setAttribute('value', textElement.innerText);
    
    // 문서에 임시 input 요소를 추가합니다.
    document.body.appendChild(tempInput);
    
    // 임시 input 요소의 내용을 선택하고 복사합니다.
    tempInput.select();
    document.execCommand('copy');
    
    // 임시 input 요소와 선택을 해제합니다.
    document.body.removeChild(tempInput);
    window.getSelection().removeAllRanges();

    // alert('이메일이 복사되었습니다');

    var successMessage = document.createElement('div');
    successMessage.innerText = '이메일이 복사되었습니다';
    successMessage.style.position = 'fixed';
    successMessage.style.top = '50%';
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translate(-50%, -50%)';
    successMessage.style.padding = '1em';
    successMessage.style.background = 'white';
    successMessage.style.border = '1px solid #ccc';
    successMessage.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(successMessage);

    // 일정 시간 후에 메시지를 제거합니다.
    setTimeout(function () {
        document.body.removeChild(successMessage);
    }, 2000); // 2초 후에 메시지를 제거합니다.
}

