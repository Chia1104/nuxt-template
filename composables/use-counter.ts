export default function useCounter(initialState?: number) {
  const count = useState("count", () => initialState ?? 0);

  function inc() {
    count.value += 1;
  }
  function dec() {
    count.value -= 1;
  }

  return {
    count,
    inc,
    dec,
  };
}
