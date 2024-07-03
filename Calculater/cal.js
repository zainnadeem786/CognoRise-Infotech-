function display(val) {
    document.getElementById('result').value += val;
    return val;
  }
  
  function solve() {
    let x = document.getElementById('result').value;
    try {
      let y = eval(x);
      document.getElementById('result').value = y;
      return y;
    } catch (e) {
      document.getElementById('result').value = "syntax error";
    }
  }
  
  function clearScreen() {
    document.getElementById('result').value = '';
  }