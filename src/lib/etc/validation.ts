export function email(email: string): boolean {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return regex.test(email);
}

export function password(password: string): boolean {
  return true;
}

export function mobile(mobile: string): boolean {
  const regex = /^[0-9]{0,11}$/i;

  return regex.test(mobile);
}
