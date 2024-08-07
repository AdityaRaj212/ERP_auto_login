chrome.storage.sync.get([
    'loginId', 
    'password', 
    'securityQuestion1', 'securityAnswer1', 
    'securityQuestion2', 'securityAnswer2', 
    'securityQuestion3', 'securityAnswer3'
  ], (data) => {
    if (data.loginId && data.password && data.securityQuestion1 && data.securityAnswer1 && 
        data.securityQuestion2 && data.securityAnswer2 && data.securityQuestion3 && data.securityAnswer3) {
      
      // Fill in login ID and password
      const userIdElement = document.querySelector('#user_id');
      const passwordElement = document.querySelector('#password');
      userIdElement.value = data.loginId;
      passwordElement.value = data.password;
  
      // Focus on the password field and blur it to trigger the security question
      passwordElement.focus();
      passwordElement.blur();
  
      // Trigger a click outside to make the security question appear
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
  
      setTimeout(() => {
        document.body.dispatchEvent(clickEvent);
      }, 1000);
  
      // Wait for a short duration to ensure the security question is rendered
      setTimeout(() => {
        // Now handle the security question
        const questionElement = document.querySelector('#question'); // Replace with the actual element selector for the question
        const questionText = questionElement ? questionElement.innerText : '';
        
        let answer = '';
        if (questionText.includes(data.securityQuestion1)) {
          answer = data.securityAnswer1;
        } else if (questionText.includes(data.securityQuestion2)) {
          answer = data.securityAnswer2;
        } else if (questionText.includes(data.securityQuestion3)) {
          answer = data.securityAnswer3;
        }
  
        // Fill in the answer
        const answerElement = document.querySelector('#answer'); // Replace with the actual element selector for the answer
        answerElement.value = answer;
  
        // Submit the form
        document.querySelector('#getotp').click(); // Replace with the actual button selector
  
      }, 2000); // Adjust the timeout duration if necessary
    }
  });
  