  function Hotel(Name,Pool,Wifi,Rate) {
    this.name = Name;
    this.pool = Pool;
    this.wifi = Wifi;
    this.rate = Rate;
    this.intro = function () {
      return this.name;
    };
  }

  var h1 = new Hotel("Hilton");
  var h2 = new Hotel("Le Meridien");
  var msg1 = "I checked-in " + h1.intro()+ " hotel." + h1.Pool;
  var msg2= "I checked-in " + h2.intro()+ " hotel.";
  // var el = document.getElementById('one');
  //el.textContent = msg;

  document.getElementById('one').textContent = msg1;
  document.getElementById('two').textContent = msg2;
