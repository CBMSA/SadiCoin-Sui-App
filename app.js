
// Simulated account data and transactions
const account = {
  balance: 3000,
  transactions: [],
};

document.getElementById('balance').innerText = account.balance;

function generateTxId() {
  return 'TX' + Math.floor(Math.random() * 1e8);
}

function viewHistory() {
  const historyDiv = document.getElementById('history');
  historyDiv.innerHTML = '<h3>Transaction History</h3>';
  if (account.transactions.length === 0) {
    historyDiv.innerHTML += '<p>No transactions yet.</p>';
    return;
  }
  account.transactions.forEach(tx => {
    historyDiv.innerHTML += `<p>${tx.id}: ${tx.action} - R${tx.amount}</p>`;
  });
}

function cashout() {
  const txId = generateTxId();
  const amount = 100;
  if (account.balance >= amount) {
    account.balance -= amount;
    account.transactions.push({ id: txId, action: 'Cash Out', amount });
    document.getElementById('balance').innerText = account.balance;
    alert('Cash out successful! Transaction ID: ' + txId);
  } else {
    alert('Insufficient balance.');
  }
}
