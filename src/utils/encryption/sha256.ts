export async function sha256encrypt(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const pwEncode = encoder.encode(text);
  return await crypto.subtle.digest("SHA-256", pwEncode).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  });
}
