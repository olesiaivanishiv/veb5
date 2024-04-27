function padNumber() {
    let number = document.getElementById('numberInput').value;
    let desiredLength = parseInt(document.getElementById('lengthInput').value, 10);
  
    if (isNaN(desiredLength)) {
        alert("Будь ласка, введіть коректну довжину числа.");
        return;
    }

    let paddedNumber = number.padStart(desiredLength, '0');
    document.getElementById('numberInput').value = paddedNumber;
}

function showDaysInCurrentMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    document.getElementById('daysInMonth').innerText = daysInMonth;
}

function calculateArea() {
  let sidesInput = document.getElementById('sides').value;
  let sides = sidesInput.split(',').map(function(item) {
    return parseFloat(item.trim());
  });

  if (sides.length === 2 && !isNaN(sides[0]) && !isNaN(sides[1])) {
    let area = 0.5 * sides[0] * sides[1];
    document.getElementById('area').innerText = area;
  } else {
    document.getElementById('area').innerText = 'Будь ласка, введіть коректні значення двох катетів.';
  }
}

