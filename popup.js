document.getElementById('save').addEventListener('click', () => {
    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('pswd').value;
    const securityQuestion1 = document.getElementById('securityQuestion1').value;
    const securityAnswer1 = document.getElementById('securityAnswer1').value;
    const securityQuestion2 = document.getElementById('securityQuestion2').value;
    const securityAnswer2 = document.getElementById('securityAnswer2').value;
    const securityQuestion3 = document.getElementById('securityQuestion3').value;
    const securityAnswer3 = document.getElementById('securityAnswer3').value;
  
    chrome.storage.sync.set({
      loginId,
      password,
      securityQuestion1,
      securityAnswer1,
      securityQuestion2,
      securityAnswer2,
      securityQuestion3,
      securityAnswer3
    }, () => {
      console.log('Credentials saved.');
    });
  });
  