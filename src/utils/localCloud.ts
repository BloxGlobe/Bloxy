export function getFeedback(): any[] {
  return JSON.parse(localStorage.getItem("feedback") || "[]");
}

export function saveFeedback(fb: string, rating: number) {
  const existing = getFeedback();
  existing.push({ fb, rating, date: Date.now() });
  localStorage.setItem("feedback", JSON.stringify(existing));
}
