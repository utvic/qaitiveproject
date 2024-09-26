export function generateRandomUsername() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let username = '';
  const usernameLength = Math.floor(Math.random() * 5) + 5; // Dužina korisničkog imena između 5 i 10 karaktera

  for (let i = 0; i < usernameLength; i++) {
    username += characters[Math.floor(Math.random() * characters.length)];
  }

  return username;
}

export function generateRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';
  const emailLength = Math.floor(Math.random() * 10) + 5; // Random dužina između 5 i 15

  for (let i = 0; i < emailLength; i++) {
    email += characters[Math.floor(Math.random() * characters.length)];
  }

  email += '@';
  
  // Odaberi nasumičnu email domenu
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
  email += domains[Math.floor(Math.random() * domains.length)];

  return email;
}
export function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let password = '';
  const passwordLength = Math.floor(Math.random() * 5) + 8; // Random dužina između 8 i 12

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}
export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}
