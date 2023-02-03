export const saveCode = async (website, code) => {
  if (website?.length < 5 || code?.length < 2) {
    return Promise.reject("empty params")
  }

  const payload = {
    website,
    code,
  };

  return fetch("/.netlify/functions/save-code", {
    method: "post",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};
