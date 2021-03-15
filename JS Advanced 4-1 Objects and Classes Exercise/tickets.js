function ticketDatabase(tickets, criteria) {
  let database = [];
  let sortingMethods = {
    destination(x) {
      return x.sort((a, b) => { return a.destination.localeCompare(b.destination) });
    },
    price(x) {
      return x.sort((a, b) => { return a.price - b.price });
    },
    status(x) {
      return x.sort((a, b) => { return a.status.localeCompare(b.status) });
    }
  }
  for (let i in tickets) {
    let [destination,price,status] = tickets[i].split("|");

    database.push({ destination, price:Number(price), status })

  }
  return sortingMethods[criteria](database);

}
ticketDatabase(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination');