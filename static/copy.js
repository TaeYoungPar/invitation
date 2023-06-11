function copyClipboard() {
    const text = document.getElementById('text').textContent;
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("복사되었습니다.");
  }

  function copyClipboard1() {
    const text = document.getElementById('text1').textContent;
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("복사되었습니다.");
  }
  const button1 = 'button';
  const button2 = 'button1';
  
  const button = document.getElementById(button1);
  button.addEventListener('click', copyClipboard);

  const button3 = document.getElementById(button2);
  button3.addEventListener('click', copyClipboard1);