export const pasteCode = async (setFieldValue: any) => {
  const value = await navigator.clipboard.readText();
  const copiedText = Number(value);
  const code = isNaN(copiedText);
  if (!code) {
    setFieldValue('code', copiedText);
  }
};
