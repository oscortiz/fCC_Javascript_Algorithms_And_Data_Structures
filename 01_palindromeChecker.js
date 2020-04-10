function palindrome(str) {
  let regex = /[^a-z0-9]{1,}/g;
  return (
    str.toLowerCase().replace(regex, "") ===
    str
      .toLowerCase()
      .replace(regex, "")
      .split("")
      .reverse()
      .join("")
  );
}
